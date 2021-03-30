import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './card.module.scss';

interface Props {
  iconUrl: string;
  children: string;
  href: string;
  altTextForIcon: string;
}

export const Card = ({
  children, iconUrl, href, altTextForIcon,
}: Props) => (
  <a href={href} className={styles.card}>
    <img src={useBaseUrl(iconUrl)} alt={altTextForIcon} />
    {children}
    <img
      className={styles['card__external-link-icon']}
      src={useBaseUrl('img/external-link.svg')}
      alt="external link icon"
    />
  </a>
);
