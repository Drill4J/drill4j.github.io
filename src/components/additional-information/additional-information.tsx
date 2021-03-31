import React from 'react';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export const AdditionalInformation = ({ children }: Props) => <p className={styles.additionalInformation}>{children}</p>;
