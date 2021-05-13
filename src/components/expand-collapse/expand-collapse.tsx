import React, { useLayoutEffect, useState } from 'react';
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
  const id = title.toLowerCase().replace(/\s/g, '-');

  useLayoutEffect(() => {
    if (hash.split('#').join('') === id) {
      setIsOpen(true);
    }
  }, [hash]);

  return (
    <details
      id={id}
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
