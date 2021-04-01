import React from 'react';

import { Icon } from '../icon';

import styles from './card.module.scss';

interface Props {
  iconSrc: string;
  children: string;
  href: string;
}

export const Card = ({
  children, iconSrc, href,
}: Props) => (
  <a href={href} className={styles.card}>
    <Icon src={iconSrc} width={48} height={48} />
    {children}
    <Icon src="img/external-link.svg" className={styles.externalLinkIcon} />
  </a>
);
