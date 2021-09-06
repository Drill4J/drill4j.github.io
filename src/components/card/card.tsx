import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
  <a href={useBaseUrl(href)} className={styles.card} rel="noreferrer">
    <Icon src={iconSrc} width={48} height={48} />
    <span>{children}</span>
  </a>
);
