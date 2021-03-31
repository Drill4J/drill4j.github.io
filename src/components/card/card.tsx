import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './card.module.scss';

interface Props {
  iconUrl: string;
  children: string;
  href: string;
}

export const Card = ({
  children, iconUrl, href,
}: Props) => (
  <a href={href} className={styles.card}>
    <span
      className={styles.icon}
      style={{ backgroundImage: `url(${useBaseUrl(iconUrl)})` }}
    />
    {children}
    <span
      className={styles.externalLinkIcon}
      style={{ backgroundImage: `url(${useBaseUrl('img/external-link.svg')})` }}
    />
  </a>
);
