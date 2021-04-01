import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Props {
  src: string;
  width?: number;
  height?: number;
}

export const Icon = ({ src, width = 16, height = 16 }: Props) => (
  <span style={{ backgroundImage: `url(${useBaseUrl(src)})`, width: `${width}px`, height: `${height}px` }} />
);
