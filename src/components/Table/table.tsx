import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';

import Expand from '../../../static/img/expand.svg';
import Close from '../../../static/img/close.svg';

import styles from './styles.module.scss';

interface Props {
  columns?: string[];
  width?: number;
  children: string;
}

export const Table = ({ columns = [], children, width = 100 }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const isExpandTable = width > 100;
  useLockBodyScroll(isExpand);
  const className = `table-${uuidv4(6)}`;
  const columnsWidth = columns.map((column, index) => `
    .${className} td:nth-child(${index + 1}), .${className} th:nth-child(${index + 1}) {
      width: ${column};
    }
  `);
  const css = `
   .${className} table {
        width: ${width}%;
   }
  ${columnsWidth.join(' ')}`;
  return (
    <div className={`${className} ${styles.table} relative mb-4`}>
      {isExpandTable && (
        <button
          className="absolute top-2 right-2 z-10"
          aria-label="open expanded table button"
          type="button"
          onClick={() => setIsExpand(true)}
        >
          <Expand />
        </button>
      )}
      <style type="text/css">
        {css}
      </style>
      <div className={styles.customScroll}>
        {children}
      </div>
      {isExpandTable && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ${isExpand
            ? 'opacity-100'
            : 'opacity-0 invisible'}`}
        >
          <div className="relative z-10 flex items-center justify-end h-12 pr-7 bg-monochrome-black bg-opacity-90">
            <button
              type="button"
              aria-label="close expanded table button"
              className="flex items-center justify-center w-9 h-9 text-monochrome-medium-tint hover:text-monochrome-white"
              onClick={() => setIsExpand(false)}
            >
              <Close className="fill-current cursor-pointer" />
            </button>
          </div>
          <div className="absolute inset-0 bg-monochrome-black opacity-60" onClick={() => setIsExpand(false)} />
          <div className={`${styles.expandedTable} ${styles.customScroll}`}>{children}</div>
        </div>
      )}
    </div>
  );
};
