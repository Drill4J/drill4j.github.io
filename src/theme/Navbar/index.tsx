/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import IconMenu from '@theme/IconMenu';
import clsx from 'clsx';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';

import { useBlur } from '../../hooks/use-blur';

import styles from './styles.module.scss';

const MOBILE_TOGGLE_SIZE = 24;

const Navbar = () => {
  const { navbar: { items } } = useThemeConfig();
  const { pathname } = useLocation();
  const [navbarShown, setNavbarShown] = useState(false);
  useLockBodyScroll(navbarShown);
  const ref = useBlur(() => setNavbarShown(false));

  return (
    <header className="sticky top-0 z-20 bg-monochrome-white shadow">
      <nav className="flex items-center justify-between py-5 container">
        <Link
          to={useBaseUrl('/')}
        >
          <img src={useBaseUrl('img/drill4j-logo.svg')} alt="drill-logo" />
        </Link>
        <div className="md:flex items-center" ref={ref}>
          <ul
            className={clsx('fixed md:static flex flex-col md:flex-row gap-2 md:gap-6 md:items-center p-4 md:p-0 transition-all', {
              'inset-y-0 z-20 left-0 right-1/4 bg-monochrome-white': navbarShown,
              '-left-full right-full': !navbarShown,
            })}
          >
            {items.map(({ to = '', label = '' }: any, index) => {
              const tab = pathname.includes(to) ? styles.activeTab : styles.tab;
              const isTryDemoButton = items.length === index + 1;

              return (
                <li>
                  <Link
                    style={{ textDecoration: 'none' }}
                    className={clsx({
                      'text-16 font-normal leading-24 text-monochrome-default hover:text-blue-default': !isTryDemoButton,
                      'button-primary w-44 ml-5 invisible md:visible': isTryDemoButton,
                      [tab]: !isTryDemoButton,
                    })}
                    to={useBaseUrl(to)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <IconMenu
            className={clsx('flex items-center justify-center w-16 h-9 block md:hidden')}
            type="button"
            onClick={() => setNavbarShown(true)}
            height={MOBILE_TOGGLE_SIZE}
            width={MOBILE_TOGGLE_SIZE}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
