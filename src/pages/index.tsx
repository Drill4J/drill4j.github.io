/* eslint-disable max-len */
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RellaxWrapper } from 'react-rellax-wrapper';

import styles from './styles.module.scss';
import '../css/index.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.parallax}>
        <div className="container">
          <div className="pt-52 space-y-4">
            <h1 className="text-center">
              Minimize Your Regression <br />
              Suite with Drill4J
            </h1>
            <p className="text-center text-monochrome-default">
              Drill4J is “feature-on-demand” tool for real-time application profiling that does not <br />
              affect codebase. It provides the ability to make white box functional testing, via <br />
              access to application instructions and memory.
            </p>
          </div>
          <RellaxWrapper speed={-1} className={styles.cube1} />
          <RellaxWrapper speed={-2} className={styles.cube2} />
          <RellaxWrapper speed={-2} className={styles.cube3} />
          <RellaxWrapper speed={-1} className={styles.cube4} />
          <RellaxWrapper speed={-3} className={styles.cube5} />
          <RellaxWrapper speed={1} className={styles.cube6} />
          <RellaxWrapper speed={-2} className={styles.cube7} />
          <RellaxWrapper speed={-1} className={styles.cube8} />
          <RellaxWrapper speed={-1} className={styles.cube9} />
          <RellaxWrapper speed={-2} className={styles.cube10} />
          <RellaxWrapper speed={-4} className={styles.cube11} />
          <RellaxWrapper speed={-4} className={styles.cube12} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
