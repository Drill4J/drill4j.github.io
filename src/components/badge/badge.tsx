import React from 'react';

interface Props {
  children: string;
  color?: string;
}

export const Badge = ({ color = '#E3E6E8', children, ...rest }: Props) => (
  <span
    className="inline-block px-2 text-14 leading-24 bg-monochrome-black rounded-lg"
    style={{ color }}
    {...rest}
  >
    {children}
  </span>
);
