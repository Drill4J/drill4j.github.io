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
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import { socialLinks } from '../social-links';

import styles from './styles.module.scss';

const Navbar = () => {
  const { navbar: { items } } = useThemeConfig();
  const { pathname } = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  useLockBodyScroll(isNavbarVisible);

  const [tryDemoButton, ...links] = [...items].reverse();
  return (
    <header className="sticky top-0 z-50 h-22">
      <div className="absolute top-0 left-0 z-40 w-full bg-monochrome-white shadow">
        <nav className="flex items-center justify-between py-5 container">
          <Link
            to={useBaseUrl('/')}
          >
            <img src={useBaseUrl('img/drill4j-logo.svg')} alt="drill-logo" />
          </Link>
          <div className="md:flex items-center">
            <ul className="invisible md:visible fixed md:static flex flex-row gap-6 items-center">
              {links.map(({ to = '', label = '' }: any) => (
                <li>
                  <Link
                    style={{ textDecoration: 'none' }}
                    className={`
                      text-16 font-normal leading-24 text-monochrome-default hover:text-blue-default 
                      ${pathname.includes(to) ? styles.activeTab : styles.tab}
                      `}
                    to={useBaseUrl(to)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  className="button-primary w-44 ml-5"
                  to={useBaseUrl((tryDemoButton as any).to)}
                >
                  {tryDemoButton.label}
                </Link>
              </li>
            </ul>
            <button
              aria-label="menu button"
              className={`flex items-center justify-center w-9 h-9 md:hidden ${isNavbarVisible ? 'bg-close' : 'bg-menu'} bg-no-repeat`}
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
              <div className="container pt-2 pb-6">
                <ul>
                  {links.map(({ to = '', label = '' }: any) => (
                    <li className="text-16 leading-24 border-b border-monochrome-medium-tint">
                      <Link
                        style={{ textDecoration: 'none' }}
                        className="gray-link inline-flex py-4 w-full h-full"
                        to={useBaseUrl(to)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <div className="flex gap-x-6 mt-9 mb-30">
                    {socialLinks.map(({ bg, link }) => (
                      <li>
                        <Link to={link} className={`${bg} bg-no-repeat bg-center transform scale-150 block w-9 h-9 cursor-pointer`} />
                      </li>
                    ))}
                  </div>
                  <li>
                    <Link
                      style={{ textDecoration: 'none' }}
                      className="button-primary w-full"
                      to={useBaseUrl((tryDemoButton as any).to)}
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
