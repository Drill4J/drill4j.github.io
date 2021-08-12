import React from 'react';
import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import InfoIcon from '../../../static/img/info.svg';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode
}

export const Info = ({ children }: Props) => (
  <div
    className={clsx(
      styles.wrapper,
      'flex gap-x-3 py-5 pl-3 pr-4 mb-4',
      'rounded-lg border-l-8 border-blue-default bg-blue-default bg-opacity-5',
      'text-monochrome-default text-16 leading-24',
    )}
  >
    <InfoIcon className="mt-1" />
    <div>{children}</div>
  </div>
);
