import React from 'react';
import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WarningIcon from '../../../static/img/warning.svg';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode
}

export const Warning = ({ children }: Props) => (
  <div
    className={clsx(
      styles.wrapper,
      'flex gap-x-3 py-4 pl-3 pr-4 mb-4',
      'rounded-lg border-l-8 border-orange-default bg-orange-default bg-opacity-5',
      'text-monochrome-default text-16 leading-24',
    )}
  >
    <WarningIcon className="mt-1" />
    <div>{children}</div>
  </div>
);
