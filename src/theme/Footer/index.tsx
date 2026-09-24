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
import { socialLinks } from '../social-links';
import { useContactEmail } from '../../hooks/use-contact-email';

const Footer = () => {
  const { footer } = useThemeConfig();
  const contactEmail = useContactEmail();
  const columns = footer?.links ?? [];

  return (
    <footer className="site-footer">
      <div className="navigationContainer site-footer__inner">
        <section className="site-footer__top">
          <div className="site-footer__brand">
            <a href="/">
              <img
                className="site-footer__logo"
                src={useBaseUrl('imgs/drill4j-logo.svg')}
                alt="Drill4J"
              />
            </a>
            <p className="site-footer__tagline">
              Continuous test gap &amp; impact analysis — execution truth for teams and agentic pipelines.
            </p>
            {contactEmail && (
              <a className="site-footer__email" href={`mailto:${contactEmail}`}>
                Email
              </a>
            )}
          </div>

          {columns.map(({ title = '', items = [] }) => (
            <div key={title} className="site-footer__column">
              <h3 className="site-footer__heading">{title}</h3>
              <ul className="site-footer__list">
                {items.map(({ label, href, to }) => (
                  <li key={label}>
                    <Link className="site-footer__link" to={to || href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="site-footer__bottom">
          <span className="site-footer__meta">
            Sponsored by
            <Link to="https://www.epam.com/">
              <img src={useBaseUrl('imgs/epam-logo.svg')} alt="Epam" />
            </Link>
            Licensed under Apache v2.0
          </span>
          <ul className="site-footer__social">
            {socialLinks.map(({ Icon, link }) => (
              <li key={link}>
                <Link to={link} className="site-footer__social-link" aria-label={link}>
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
