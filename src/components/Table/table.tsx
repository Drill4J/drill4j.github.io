import React, {
  useState, useRef, useEffect, useLayoutEffect,
} from 'react';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';

import Expand from '../../../static/img/expand.svg';
import Close from '../../../static/img/close.svg';

import styles from './styles.module.scss';

interface Props {
  columns?: string[];
  children: string;
}

export const Table = ({ columns = [], children }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isShowExpand, setIsShowExpand] = useState(false);
  const [size, setSize] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      const scrollHeight = ref?.current.offsetHeight - ref?.current.clientHeight;
      setIsShowExpand(scrollHeight > 0);
    }
  }, [size]);

  useLockBodyScroll(isExpand);

  useEffect(() => {
    const element = ref && ref.current;
    function handleResize() {
      if (element) {
        setSize(element.getBoundingClientRect().width);
      }
    }

    const resizeObserver = new ResizeObserver(() => handleResize());
    // @ts-ignore
    resizeObserver.observe(element);

    return () => {
      // @ts-ignore
      resizeObserver.disconnect(element);
    };
  }, [ref]);

  useLayoutEffect(() => {
    if (ref.current && columns?.length) {
      const table = ref.current.children[0];
      table.style.tableLayout = 'fixed';
      const colgroup = document.createElement('colgroup');
      columns?.forEach((width) => {
        const col = document.createElement('col');
        col.width = width;
        col.span = 1;
        colgroup.appendChild(col);
        return col;
      });
      table.prepend(colgroup);
    }
  }, []);

  return (
    <div className={`${styles.table} relative mb-4`}>
      {isShowExpand && (
        <button
          className="absolute top-2 right-2 z-10"
          aria-label="open expanded table button"
          type="button"
          onClick={() => setIsExpand(true)}
        >
          <Expand />
        </button>
      )}
      <div ref={ref} className={styles.customScroll}>
        {children}
      </div>
      {isShowExpand && (
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
