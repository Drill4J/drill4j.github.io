import React from 'react';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const AdditionalInformation = ({ children, className = '' }: Props) => (
  <p className={`${styles.additionalInformation} ${className}`}>
    {children}
  </p>
);
