import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.scss';

interface Props {
  title: string;
  Icon: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

export const ExpandCollapseCard = ({ children, title, Icon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { location: { hash } } = useHistory();

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
        setIsOpen(!isOpen);
      }}
      >
        {Icon}
        {title}
      </summary>
      <div className="md:my-10 md:px-8">
        {children}
      </div>
    </details>
  );
};
