/* eslint-disable max-len */
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { RellaxWrapper } from 'react-rellax-wrapper';

import { Icon } from '../components';

import styles from './styles.module.scss';
import '../css/index.css';

const Figure: React.FC = ({ children }) => (
  <figure
    className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center gap-x-16"
    style={{ minHeight: '400px' }}
  >
    {children}
  </figure>
);

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
      <main className={styles.mainPageWrapper}>
        <section className="container">
          <Figure>
            <img className="lg:order-1 bg-contain" src={useBaseUrl('img/time-savings.png')} alt="time savings" />
            <figcaption className="flex flex-col justify-center lg:order-2">
              <h3>Time Savings</h3>
              <p>
                Drill is “feature-on-demand” tool for real-time application profiling that does not affect codebase.
                It provides the ability to make white box functional.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <img className="md:order-1 lg:order-2" src={useBaseUrl('img/risks-and-t2r.png')} alt="risks and tests to run" />
            <figcaption className="flex flex-col justify-center md:order-2 lg:order-1">
              <h3>Risk and Test to Run</h3>
              <p>Risk is a new or modified uncovered method.
                Drill4J advises which test you need to run to cover theese Risk methods.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <img className="lg:order-1" src={useBaseUrl('img/coverage.png')} alt="coverage" />
            <figcaption className="flex flex-col justify-center lg:order-2">
              <h3>Measure Code Coverage</h3>
              <p>
                Code coverage is a tricky metric, but Drill4J provides it with actionable feedback. It allows map tests
                to code and vice versa.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <img className="md:order-1 lg:order-2" src={useBaseUrl('img/quality-gate.png')} alt="quality gate" />
            <figcaption className="flex flex-col justify-center md:order-2 lg:order-1">
              <h3>Quality Gate</h3>
              <p>
                You can configure 3 key metrics: Code Coverage, Risks and Tests to Run
                and use Drill4J Quality Gate status (passed, failed) in a CI/CD pipelines.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <img className="lg:order-1" src={useBaseUrl('img/browser-extension.png')} alt="browser extension" />
            <figcaption className="flex flex-col justify-center lg:order-2">
              <h3>Chrome Browser Extension</h3>
              <p className="mb-8 lg:mb-0">
                Browser extension allows gather manual Code Coverage for several users
                on the one test environment at the same time.
              </p>
            </figcaption>
          </Figure>
        </section>
        <section className={clsx(styles.integrateStepsWrapper, 'py-18 text-center')}>
          <div className="container flex flex-col justify-center">
            <h2 className="mb-12">Easy to integrate</h2>
            <ol className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-12 gap-y-8 p-0 mb-8 md:mb-20">
              <li>
                <span className={clsx(styles.integrateStepNumber, styles.bgBlueGradient)}>1</span>
                <h4 className="mb-2">Run Drill4J</h4>
                <p>Deploy Drill4J Admin</p>
              </li>
              <li>
                <span className={clsx(styles.integrateStepNumber, styles.bgBlueGradient)}>2</span>
                <h4 className="mb-2">Run Application</h4>
                <p>Start your application with Drill4J Agent</p>
              </li>
              <li>
                <span className={clsx(styles.integrateStepNumber, styles.bgBlueGradient)}>3</span>
                <h4 className="mb-2">Register Agent</h4>
                <p>Open Drill4J and register the Agent</p>
              </li>
              <li>
                <span className={clsx(styles.integrateStepNumber, 'bg-green-success')}>
                  <Icon src={useBaseUrl('img/done.svg')} width={21} height={16} />
                </span>
                <h4 className="mb-2">Done</h4>
                <p>Drill4J is ready to use</p>
              </li>
            </ol>
            <a href="#" className="button-primary mx-auto">Full instruction</a>
          </div>
        </section>
        <section className={clsx(styles.features, 'container')}>
          <div className="pt-24 pb-32">
            <h2 className="mb-18 mxs:mb-6 text-center">Commercial Services</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-26">
              <div className="py-4 px-8 mb-6 lg:mb-0">
                <h3 className="mb-10">Basic</h3>
                <p className="mb-6">Functionality and features:</p>
                <ul className="lg:mb-66 md:mb-9 pl-8">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Browser Extension</li>
                </ul>
                <a href="#" className="button-ghost justify-center">For free</a>
              </div>
              <div className={clsx(styles.individualFeatures, 'pt-4 pb-8')}>
                <h3 className="mb-4 mx-8">Individual</h3>
                <p className="h-12 mb-6 pt-6 px-8 border-t border-monochrome-medium-tint">Basic features, plus:</p>
                <ul className="mx-8 pl-8">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Browser Extension</li>
                </ul>
                <ul className="mb-9 mx-8 pl-8">
                  <li className={styles.individualFeature}>
                    <strong>Support</strong>
                    <span>Q&A sessions</span>
                  </li>
                  <li className={styles.individualFeature}>
                    <strong>Plugins customizing</strong>
                    <span>Setting up ready-made plugins for a project needs</span>
                  </li>
                  <li className={styles.individualFeature}>
                    <strong>Integration</strong>
                    <span>Connection of agents to a project</span>
                  </li>
                </ul>
                <a href="#" className="button-primary mx-8 justify-center">Mail us</a>
              </div>
            </div>
          </div>
        </section>
        <section className={clsx(styles.quickStart, 'pt-16 pb-14')}>
          <div className="container flex flex-col justify-center text-center">
            <h2 className="mb-2">Get a quick start with Drill4J today</h2>
            <p className="mb-8">Try easy to install demo examples for JAVA and JS agents. ***</p>
            <a href="#" className="button-secondary mx-auto">Try demo</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
