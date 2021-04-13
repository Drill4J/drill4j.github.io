import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Props {
  backgroundSrc: string;
  children: React.ReactNode;
}

export const Banner = ({ backgroundSrc, children, ...rest }: Props) => (
  <div
    className="py-14 px-5 text-center bg-cover"
    style={{ backgroundImage: `url(${useBaseUrl(backgroundSrc)})` }}
    {...rest}
  >
    {children}
  </div>
);
