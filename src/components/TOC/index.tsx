import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {TOCItem} from '@docusaurus/mdx-loader';
import styles from './styles.module.css';

const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;

interface TOCProps {
  readonly toc: readonly TOCItem[];
}

export function TOC({toc}: TOCProps): JSX.Element {
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
      <TOCItems
        toc={toc}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={ACTIVE_LINK_CLASS_NAME}
        minHeadingLevel={2}
        maxHeadingLevel={3}
      />
    </div>
  );
}
