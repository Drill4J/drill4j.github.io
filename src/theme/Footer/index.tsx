/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { socialLinks } from '../social-links';

const Footer = () => {
  const { footer: { links } } = useThemeConfig();
  return (
    <footer className="bg-monochrome-light-tint border-t border-monochrome-medium-tint">
      <div className="navigationContainer">
        <section className="grid py-12 lg:py-16 grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-x-5">
          <a href="/" className="col-span-full lg:col-span-4 mb-12 lg:mb-0">
            <img src={useBaseUrl('imgs/drill4j-logo-grayscale.svg')} alt="drill4j github" />
          </a>
          {links.map(({ title = '', items }, index) => (
            <div
              key={title}
              className={clsx('space-y-3', `md:col-span-${index === 2 ? 2 : 3} lg:col-span-3 lg:col-start-${5 + index * 3}`)}
            >
              <ul>
                {items.map(({ label, href }) => (
                  <li key={label} className="mb-4 md:mb-2">
                    <Link className="gray-link" to={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="flex flex-col gap-y-4 py-6 border-t border-monochrome-medium-tint sm:flex-row justify-between">
          <span className="flex flex-col gap-y-2 items-center gap-x-2 text-16 leading-24 text-monochrome-default sm:flex-row">
            Sponsored by
            <Link to="https://www.epam.com/">
              <img src={useBaseUrl('imgs/epam-logo.svg')} alt="Epam" />
            </Link>
            Licensed under Apache v2.0
          </span>
          <ul className="flex justify-center gap-x-4 items-center">
            {socialLinks.map(({ Icon, link }) => (
              <li key={link}>
                <Link to={link} className="cursor-pointer"><Icon /></Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
