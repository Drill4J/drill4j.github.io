import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Props {
  className?: string;
  src: string;
  width?: number;
  height?: number;
}

export const Icon = ({
  src, width = 16, height = 16, className,
}: Props) => (
  <span
    className={className}
    style={{
      backgroundImage: `url(${useBaseUrl(src)})`, minWidth: `${width}px`, minHeight: `${height}px`, display: 'inline-block',
    }}
  />
);
