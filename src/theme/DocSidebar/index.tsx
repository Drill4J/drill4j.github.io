/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import clsx from 'clsx';
import { isSamePath } from '@docusaurus/theme-common';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import type { Props } from '@theme/DocSidebar';
import SearchBar from '@theme/SearchBar';
import { useLocation } from '@docusaurus/router';
import { useBreakpoint } from '../../hooks/use-breakpoint';
import './styles.scss';
import { Icon } from '../../components';

function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const isActiveSidebarItem = (item, activePath) => {
  if (item.type === 'link') {
    return isSamePath(item.href, activePath);
  }
  if (item.type === 'category') {
    return item.items.some((subItem) =>
      isActiveSidebarItem(subItem, activePath));
  }
  return false;
};

function DocSidebarItemCategory({
  item,
  onItemClick,
  collapsible,
  activePath,
  ...props
}) {
  const { items, label } = item;

  const isActive = isActiveSidebarItem(item, activePath);
  const wasActive = usePrevious(isActive);

  // active categories are always initialized as expanded
  // the default (item.collapsed) is only used for non-active categories
  const [collapsed, setCollapsed] = useState(() => {
    if (!collapsible) {
      return false;
    }
    return isActive ? false : item.collapsed;
  });

  const menuListRef = useRef<HTMLUListElement>(null);
  const [menuListHeight, setMenuListHeight] = useState<string | undefined>(
    undefined,
  );
  const handleMenuListHeight = (calc = true) => {
    setMenuListHeight(
      calc ? `${menuListRef.current?.scrollHeight}px` : undefined,
    );
  };

  // If we navigate to a category, it should automatically expand itself
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      setCollapsed(false);
    }
  }, [isActive, wasActive, collapsed]);

  const handleItemClick = useCallback(
    (e) => {
      e.preventDefault();

      if (!menuListHeight) {
        handleMenuListHeight();
      }

      setTimeout(() => setCollapsed((state) => !state), 100);
    },
    [menuListHeight],
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
        'menu__list-item--none-collapsed': !collapsed,
      })}
      key={label}
    >
      <a
        className={clsx('menu__link', {
          'menu__link--sublist': collapsible,
          'menu__link--active': collapsible && isActive,
        })}
        onClick={collapsible ? handleItemClick : undefined}
        href={collapsible ? '#!' : undefined}
        {...props}
      >
        {label}
      </a>
      <ul
        className="menu__list"
        ref={menuListRef}
        style={{
          height: menuListHeight,
        }}
        onTransitionEnd={() => {
          if (!collapsed) {
            handleMenuListHeight(false);
          }
        }}
      >
        {items.map((childItem) => (
          <DocSidebarItem
            tabIndex={collapsed ? '-1' : '0'}
            key={childItem.label}
            item={childItem}
            onItemClick={onItemClick}
            collapsible={collapsible}
            activePath={activePath}
          />
        ))}
      </ul>
    </li>
  );
}

function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  collapsible: _collapsible,
  ...props
}) {
  const { href, label } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  return (
    <li className="menu__list-item" key={label}>
      <Link
        className={clsx('menu__link', {
          'menu__link--active': isActive,
        })}
        to={href}
        {...(isInternalUrl(href)
          ? {
            isNavLink: true,
            exact: true,
            onClick: onItemClick,
          }
          : {
            target: '_blank',
            rel: 'noreferrer noopener',
          })}
        {...props}
      >
        {label}
      </Link>
    </li>
  );
}

function DocSidebarItem(props) {
  switch (props.item.type) {
    case 'category':
      return <DocSidebarItemCategory {...props} />;
    case 'link':
    default:
      return <DocSidebarItemLink {...props} />;
  }
}

function DocSidebar({
  path,
  sidebar,
  sidebarCollapsible = true,
}: Props): JSX.Element | null {
  const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const { pathname } = useLocation();

  useLockBodyScroll(showResponsiveSidebar);
  const isWindowLg = useBreakpoint('lg');

  useEffect(() => {
    setShowResponsiveSidebar(false);
  }, [isWindowLg]);

  useEffect(() => {
    setShowResponsiveSidebar(false);
  }, [pathname]);

  return (
    <div className={clsx('flex flex-col lg:mt-6', {
      'fixed inset-0 z-50 mt-0 bg-monochrome-white': showResponsiveSidebar,
    })}
    >
      {(isWindowLg || showResponsiveSidebar) && (
        <div className="flex justify-between items-center mb-3 lg:mb-4 py-3 lg:py-0 lg:pr-3 pt-6 lg:pt-0 px-6 lg:px-0">
          <h3 className="hidden sm:inline lg:hidden text-monochrome-default">Documentation</h3>
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
        </div>
      )}
      <div
        className="menu px-6 lg:px-0"
      >
        {!isWindowLg && (
          <button
            aria-label={showResponsiveSidebar ? 'Close Menu' : 'Open Menu'}
            aria-haspopup="true"
            className={clsx('button button--secondary button--sm menu__button',
              'flex items-center justify-center w-16 h-9 fixed right-4 bottom-10 z-20')}
            type="button"
            onClick={() => setShowResponsiveSidebar(!showResponsiveSidebar)}
          >
            {showResponsiveSidebar ? (
              <span className="text-24">
                &times;
              </span>
            ) : (
              <Icon src="/img/open-menu.svg" width={24} height={24} />
            )}
          </button>
        )}
        {(isWindowLg || showResponsiveSidebar) && (
          <ul className="menu__list">
            {sidebar.map((item) => (
              <DocSidebarItem
                key={item.label}
                item={item}
                onItemClick={(e) => {
                  e.target.blur();
                  setShowResponsiveSidebar(false);
                }}
                collapsible={sidebarCollapsible}
                activePath={path}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DocSidebar;
