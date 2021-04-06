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

const socialLinks = [
  { bg: 'bg-git-hub', link: 'https://github.com/Drill4J' },
  { bg: 'bg-telegram', link: 'https://t.me/drill4j' },
  { bg: 'bg-twiter', link: 'https://twitter.com/' },
  { bg: 'bg-youtube', link: 'https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured' },
];

const Footer = () => {
  const { footer: { links } } = useThemeConfig();
  return (
    <footer className="bg-monochrome-light-tint">
      <div className="container">
        <section className="grid pt-14 pb-18 grid-cols-1 md:grid-cols-2 lg:grid-cols-footer" style={{ gap: '106px' }}>
          <a href="https://github.com/Drill4J" target="_blank" rel="noreferrer noopener">
            <img src={useBaseUrl('img/drill4j-logo-grayscale.svg')} alt="drill4j github" />
          </a>
          {links.map(({ title = '', items }) => (
            <div className="space-y-3">
              <h5>{title}</h5>
              <ul>
                {items.map(({ label, href }) => (
                  <li className="mb-2">
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
            <Link to="https://www.epam-group.ru/">
              <img src={useBaseUrl('img/epam-logo.svg')} alt="Epam" />
            </Link>
            Licensed under Apache v2.0
          </span>
          <ul className="flex justify-center gap-x-4 items-center">
            {socialLinks.map(({ bg, link }) => (
              <li className={`${bg} w-6 h-6 cursor-pointer`}>
                <Link to={link} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
