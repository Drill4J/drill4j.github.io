import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.scss';

interface Props {
  iconUrl: string;
  children: React.ReactNode;
  title: string;
}

export const Expand = ({ children, iconUrl, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref && ref.current && ref.current.nextSibling.setAttribute('style', `visibility: ${!isOpen ? 'hidden' : 'visible'}`);
  }, [isOpen]);

  return (
    <>
      <div className={styles.card} ref={ref} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={styles.icon}
          style={{ backgroundImage: `url(${useBaseUrl(iconUrl)})` }}
        />
        {title}
        <span
          className={clsx(styles.expandIcon, isOpen && styles.rotate)}
          style={{ backgroundImage: `url(${useBaseUrl('img/arrow.svg')})` }}
        />
      </div>
    </>
  );
};
