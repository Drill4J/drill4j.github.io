/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  ...props
}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...href ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: prependBaseUrlToHref ? normalizedHref : href,
      } : {
        to: toUrl,
      }}
      {...props}
    >
      {label}
    </Link>
  );
}

const FooterLogo = ({
  url,
  alt,
}) => <img className="footer__logo" alt={alt} src={url} />;

function Footer() {
  const {
    footer,
  } = {};
  const {
    copyright,
    links = [
      {
        items: [
          {
            html: `
            <div class="footer__item__logo">
              <a href="https://github.com/Drill4J" target="_blank" rel="noreferrer noopener">
                <img src="img/drill4j-logo-grayscale.svg" alt="drill4j github" />
              </a>
            </div>
              `,
          },
        ],
      },
      {
        title: 'Documentation',
        items: [
          {
            label: 'Features',
            to: 'docs/',
          },
          {
            label: 'Plugins',
            to: 'docs/doc2/',
          },
          {
            label: 'FAQ',
            to: 'docs/doc2/',
          },
        ],
      },
      {
        title: 'Installation',
        items: [
          {
            label: 'Java Agent',
            href: '#',
          },
          {
            label: 'JS Agent',
            href: '#',
          },
          {
            label: 'Auto tests Agent',
            href: '#',
          },
          {
            label: 'Chrome Extension',
            href: '#',
          },
        ],
      },
      {
        title: 'Drill4j',
        items: [
          {
            label: 'About',
            href: '#',
          },
          {
            label: 'Contacts us',
            href: 'https://t.me/drill4j',
          },
        ],
      },
    ],
    logo = {},
  } = footer || {};
  const logoUrl = useBaseUrl(logo.src);
  return (
    <footer className="footer">
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map((linkItem) => (
              <div key={linkItem.title} className="col footer__col">
                {linkItem.title != null ? <h4 className="footer__title">{linkItem.title}</h4> : null}
                {linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item) => (item.html ? (
                      <li
                        key={linkItem.title}
                        className="footer__item" // Developer provided the HTML, so assume it's safe.
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: item.html,
                        }}
                      />
                    ) : (
                      <li key={item.href || item.to} className="footer__item">
                        <FooterLink {...item} />
                      </li>
                    )))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        <div className="footer__bottom">
          <div
            className="footer__copyright" // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
          >
            <span className="footer__copyright__info">
              Sponsored by
              <a href="https://www.epam-group.ru/" target="_blank" rel="noreferrer noopener">
                <img src="img/epam-logo.svg" alt="Epam" />
              </a>
              Licensed under Apache v2.0
            </span>
            <div className="footer__copyright__social-links">
              <a
                className="footer__copyright__social-links__git-hub"
                href="https://github.com/Drill4J"
                target="_blank"
                rel="noreferrer noopener"
              >
                {null}
              </a>
              <a
                className="footer__copyright__social-links__telegram"
                href="https://t.me/drill4j"
                target="_blank"
                rel="noreferrer noopener"
              >
                {null}
              </a>
              <a
                className="footer__copyright__social-links__twiter"
                href="https://t.me/drill4j"
                target="_blank"
                rel="noreferrer noopener"
              >
                {null}
              </a>
              <a
                className="footer__copyright__social-links__youtube"
                href="https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured"
                target="_blank"
                rel="noreferrer noopener"

              >
                {null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
