import React from 'react';

interface Props {
  children: string;
  color?: string;
}

export const Badge = ({ color = '#687481', children, ...rest }: Props) => (
  <span
    className="inline-block px-2 text-14 leading-24 bg-monochrome-light-tint rounded-lg"
    style={{ color }}
    {...rest}
  >
    {children}
  </span>
);
