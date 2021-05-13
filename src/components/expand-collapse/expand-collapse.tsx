import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.scss';

interface Props {
  title: string;
  Icon: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

export const ExpandCollapse = ({ children, title, Icon }: Props) => {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (hash.split('#').join('') === title.toLowerCase()) {
      setIsOpen(true);
    }
  }, [hash]);
  return (
    <details
      className={styles.expandCollapse}
      open={isOpen}
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
    >
      <summary>
        {Icon}
        {title}
      </summary>
      {children}
    </details>
  );
};
