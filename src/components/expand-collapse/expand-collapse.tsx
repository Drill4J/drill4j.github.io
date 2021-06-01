import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.scss';

interface Props {
  title: string;
  Icon: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

export const ExpandCollapse = ({ children, title, Icon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { push, location: { pathname, hash } } = useHistory();

  useEffect(() => {
    if (hash.split('#').join('') === title.toLowerCase().replace(/\s/g, '-')) {
      setIsOpen(true);
      ref && ref.current && ref.current.scrollIntoView({ block: 'center' });
    } else {
      setIsOpen(false);
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
        !isOpen ? push(`${pathname}#${title.toLowerCase().replace(/\s/g, '-')}`)
          : push(pathname);
      }}
      >
        {Icon}
        {title}
      </summary>
      {children}
    </details>
  );
};
