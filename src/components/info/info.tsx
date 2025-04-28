import React from 'react';
import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './styles.module.scss';
import { Icon } from '../icon';

interface Props {
  children: React.ReactNode
}

export const Info = ({ children }: Props) => (
  <div
    className={clsx(
      styles.wrapper,
      'flex gap-x-3 py-5 px-4 mb-4',
      'rounded-lg bg-blue-default bg-opacity-5',
      'text-monochrome-default text-16 leading-24',
    )}
  >
    <Icon src="imgs/info.svg" width={16} height={16} className="mt-1 h-4 text-orange-default" />
    <div>{children}</div>
  </div>
);
