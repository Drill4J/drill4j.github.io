import React from 'react';
import styles from './style.module.scss';

export const ListItem = ({ children, number }) => (
  <div className={styles.listItem}>
    <div>{number}</div>
    <div className={styles.listItem_content}>{children}</div>
  </div>
);
