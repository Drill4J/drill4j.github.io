/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';

import styles from './styles.module.scss';

const Navbar = () => {
  const { navbar: { items } } = useThemeConfig();
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-monochrome-white shadow">
      <nav className="flex flex-col gap-y-4 items-center xs:flex-row justify-between py-5 container">
        <Link
          to={useBaseUrl('/')}
        >
          <img src={useBaseUrl('img/drill4j-logo.svg')} alt="drill-logo" />
        </Link>
        <section className="md:flex items-center">
          <ul className="md:flex gap-x-6 items-center">
            {items.map(({ to = '', label = '' }: any, index) => (
              <li className={pathname.includes(to) ? styles.activeTab : undefined}>
                <Link
                  className={items.length !== index + 1
                    ? 'hidden md:block gray-link'
                    : 'button-primary md:ml-5'}
                  to={useBaseUrl(to)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
