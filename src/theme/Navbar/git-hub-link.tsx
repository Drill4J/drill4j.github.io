import React from 'react';
import Link from '@docusaurus/Link';
import GitHubIcon from '../../../static/img/git-hub.svg';
import Star from '../../../static/img/star.svg';

import styles from './styles.module.scss';

export const GitHubLink: React.FC = ({ children }) => (
  <Link to="https://github.com/Drill4J/drill4j" className={styles.githubLink}>
    <GitHubIcon />
    <div className={styles.githubStarsCount}>
      <Star />
      <span className="text-monochrome-default font-regular">{children}</span>
    </div>
  </Link>
);
