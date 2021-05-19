import React, { useEffect, useState, useRef } from 'react';
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
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hash.split('#').join('') === title.toLowerCase().replace(/\s/g, '-')) {
      setIsOpen(true);
      ref && ref.current && ref.current.scrollIntoView({ block: 'center' });
    }
  }, [hash]);

  return (
    <details
      ref={ref}
      className={styles.expandCollapse}
      open={isOpen}
    >
      <summary onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
      >
        {Icon}
        {title}
      </summary>
      {children}
    </details>
  );
};
