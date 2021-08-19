/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import clsx from 'clsx';
import { socialLinks } from '../social-links';
import { GitHubLink } from './git-hub-link';
import styles from './styles.module.scss';

const Navbar = () => {
  const { navbar: { items } } = useThemeConfig();
  const { pathname } = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [startCount, setStartCount] = useState(0);
  useLockBodyScroll(isNavbarVisible);
  const links = [...items];
  const [tryDemoButton] = links.splice(-1, 1);
  const { navbarRef, isNavbarVisible: isHeaderVisibleAfterScroll } = useHideableNavbar(true);
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch('https://api.github.com/repos/Drill4J/drill4j', {
          headers: {
            'User-Agent': 'Drill4J',
          },
        });
        const data = await res.json();
        setStartCount(data?.stargazers_count);
      })();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <header
      ref={navbarRef}
      className={clsx('fixed top-0 inset-x-0 z-50 h-22', styles.header, {
        [styles.headerHidden]: !isHeaderVisibleAfterScroll,
      })}
    >
      <div className="absolute top-0 left-0 z-40 w-full bg-monochrome-white shadow">
        <nav className="flex items-center justify-between h-22 navigationContainer">
          <Link
            to={useBaseUrl('/')}
          >
            <img src={useBaseUrl('/img/drill4j-logo.svg')} alt="drill-logo" />
          </Link>
          <div className="md:flex items-center">
            <ul className="invisible md:visible fixed md:static flex flex-row gap-6 items-center">
              {links.map(({ to = '', label = '' }: any) => (
                <li key={to}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    className={`flex items-center h-22
                      text-16 text-monochrome-default
                      ${pathname.includes(to.split('/')[0]) ? styles.activeTab : styles.tab}
                      `}
                    to={useBaseUrl(to)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li><GitHubLink>{startCount}</GitHubLink></li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  className="button-primary ml-5 px-8"
                  to={useBaseUrl((tryDemoButton as any).to)}
                >
                  {tryDemoButton.label}
                </Link>
              </li>
            </ul>
            <button
              aria-label="menu button"
              className={`flex items-center justify-center w-9 h-9 md:hidden text-monochrome-black fill-current ${isNavbarVisible
                ? 'bg-close' : 'bg-menu'} bg-no-repeat`}
              type="button"
              onClick={() => setIsNavbarVisible(!isNavbarVisible)}
            />
          </div>
        </nav>
      </div>
      {
        isNavbarVisible && (
          <nav className="visible md:invisible fixed w-full h-full left-0 top-22">
            <div className="bg-monochrome-white">
              <div className="navigationContainer pt-2 pb-6">
                <ul>
                  {links.map(({ to = '', label = '' }: any) => (
                    <li className="text-16 leading-24 border-b border-monochrome-medium-tint">
                      <Link
                        style={{ textDecoration: 'none', fontWeight: pathname.includes(to.split('/')[0]) ? '600' : '400' }}
                        className="gray-link inline-flex py-4 w-full h-full"
                        to={useBaseUrl(to)}
                        onClick={() => setIsNavbarVisible(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <div className="flex gap-x-6 mt-9 mb-30">
                    {socialLinks.map(({ link, Icon }) => (
                      <li>
                        <Link to={link} className="cursor-pointer">
                          <Icon className="w-9 h-9" />
                        </Link>
                      </li>
                    ))}
                  </div>
                  <li>
                    <Link
                      style={{ textDecoration: 'none' }}
                      className="button-primary w-full"
                      to={useBaseUrl((tryDemoButton as any).to)}
                      onClick={() => setIsNavbarVisible(false)}
                    >
                      {tryDemoButton.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-full bg-monochrome-black bg-opacity-50" onClick={() => setIsNavbarVisible(!isNavbarVisible)} />
          </nav>
        )
      }
    </header>
  );
};

export default Navbar;
