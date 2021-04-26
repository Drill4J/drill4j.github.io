/* eslint-disable max-len */
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { RellaxWrapper } from 'react-rellax-wrapper';

import styles from './styles.module.scss';
import '../css/index.css';

const Figure: React.FC = ({ children }) => (
  <figure
    className={clsx(styles.figure,
      'grid grid-cols-12 items-center justify-items-center lg:justify-items-start gap-x-5',
      'py-12 md:py-0')}
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
      <main className={styles.mainPageWrapper}>
        <div className={clsx(styles.parallax)}>
          <div className="relative container pt-24 md:pt-54 pb:12 md:pb-58 md:h-full">
            <div className="space-y-4 md:px-16 lg:px-44">
              <h1 className="text-32 md:text-40 text-center">
                Minimize Your Regression
                Suite with Drill4J
              </h1>
              <p className="text-center text-monochrome-default">
                Drill4J is “feature-on-demand” tool for real-time application profiling that does not
                affect codebase. It provides the ability to make white box functional testing, via
                access to application instructions and memory.
              </p>
            </div>
            <RellaxWrapper speed={0} className={`${styles.cube1} hidden md:block`} />
            <RellaxWrapper speed={4} className={`${styles.cube2} hidden md:block`} />
            <RellaxWrapper speed={4} className={`${styles.cube3} hidden lg:block`} />
            <RellaxWrapper speed={-1} className={`${styles.cube4} hidden md:block`} />
            <RellaxWrapper speed={1} className={`${styles.cube5} hidden lg:block`} />
            <RellaxWrapper speed={0} className={`${styles.cube6} hidden md:block`} />
            <RellaxWrapper speed={3} className={`${styles.cube7} hidden lg:block`} />
            <RellaxWrapper speed={0} className={`${styles.cube8} hidden md:block`} />
            <RellaxWrapper speed={0} className={`${styles.cube9} hidden md:block`} />
            <RellaxWrapper speed={3} className={`${styles.cube10} hidden lg:block`} />
            <RellaxWrapper speed={1} className={`${styles.cube11} hidden lg:block`} />
            <RellaxWrapper speed={0} className={`${styles.cube12} hidden md:block`} />
          </div>
        </div>
        <section className="container pb-12 md:pb-24 ">
          <Figure>
            <img
              className={clsx(styles.shadowImg, 'order-1 col-span-full md:col-span-6 mb-10 md:mb-0')}
              src={useBaseUrl('img/time-savings.png')}
              alt="time savings"
            />
            <figcaption className="flex flex-col justify-center md:col-start-7 md:col-end-12 col-span-full order-2">
              <h3 className="mb-4">Time Savings</h3>
              <p className="text-monochrome-shade">
                It provides visualization of the Test Impact Analysis. You can check how much time Drill4J saves in each build of your application.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 md:order-2 col-span-full md:col-start-7 z-10 mb-10 md:mb-0">
              <div className={clsx(styles.borderedImgWrapper, 'absolute -top-4 right-0 rounded-full w-1/2 lg:w-auto')}>
                <img
                  className="rounded-full"
                  src={useBaseUrl('img/risks-and-t2r.png')}
                  alt="risks and tests to run"
                />
              </div>
              <img
                className={clsx(styles.shadowImg)}
                src={useBaseUrl('img/risks-and-t2r-background.png')}
                alt="risks and tests to run background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-5 order-2 md:order-1">
              <h3 className="mb-4">Risk and Test to Run</h3>
              <p className="text-monochrome-shade">Risk is a new or modified uncovered method.
                Drill4J advises which test you need to run to cover theese Risk methods.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 col-span-full md:col-span-6 mx-8 xl:mx-0 mb-10 md:mb-0">
              <div
                className={clsx(styles.borderedImgWrapper, 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10')}
                style={{ borderRadius: '14px', width: '117%' }}
              >
                <img
                  className="w-full"
                  style={{ borderRadius: '14px' }}
                  src={useBaseUrl('img/coverage.png')}
                  alt="coverage"
                />
              </div>
              <img
                className={styles.shadowImg}
                src={useBaseUrl('img/coverage-background.png')}
                alt="coverage background"
              />
            </div>
            <figcaption className="flex flex-col justify-center md:col-start-7  col-span-full order-2">
              <h3 className="mb-4">Measure Code Coverage</h3>
              <p className="text-monochrome-shade">
                Code coverage is a tricky metric, but Drill4J provides it with actionable feedback. It allows map tests
                to code and vice versa.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 md:order-2 col-span-full md:col-start-7 z-10  mb-10 md:mb-0">
              <div
                className={clsx(styles.borderedImgWrapper, 'absolute -top-6 md:-top-7 lg:-top-9 right-5 rounded-full w-1/2 lg:w-auto')}
              >
                <img className="rounded-full" src={useBaseUrl('img/quality-gate.png')} alt="quality gate" />
              </div>
              <img
                className={clsx(styles.shadowImg)}
                src={useBaseUrl('img/quality-gate-background.png')}
                alt="quality gate background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-5 order-2 md:order-1">
              <h3 className="mb-4">Quality Gate</h3>
              <p className="text-monochrome-shade">
                You can configure 3 key metrics: Code Coverage, Risks and Tests to Run
                and use Drill4J Quality Gate status (passed, failed) in a CI/CD pipelines.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 col-span-full md:col-span-6 w-full md:w-11/12 h-48 lg:h-62 mb-10 md:mb-0">
              <img
                className={clsx(styles.shadowImg, 'absolute left-0 bottom-0 z-10 w-60 md:w-3/4 lg:w-auto')}
                src={useBaseUrl('img/browser-extension.png')}
                alt="browser extension"
              />
              <img
                className={clsx(styles.shadowImg, 'absolute top-0 right-0 w-54 lg:w-3/4 lg:w-auto')}
                src={useBaseUrl('img/browser-extension-background.png')}
                alt="browser extension background"
              />
              <img
                className={clsx(styles.drillLogoShadow, 'absolute top-7 right-7 lg:right-12 z-10 rounded-full w-11 lg:w-auto')}
                src={useBaseUrl('img/drill-rounded-logo.svg')}
                alt="drill logo"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-start-7 order-2">
              <h3 className="mb-4">Chrome Browser Extension</h3>
              <p className="text-monochrome-shade">
                Browser extension allows gather manual Code Coverage for several users
                on the one test environment at the same time.
              </p>
            </figcaption>
          </Figure>
        </section>
        <section className={clsx(styles.integrateStepsWrapper, 'py-18 text-left md:text-center')}>
          <div className="container flex flex-col justify-center">
            <h2 className="mb-12">Easy to integrate</h2>
            <ol className="grid grid-cols-1 md:grid-cols-4 md:gap-x-5 lg:gap-x-12 gap-y-8 p-0 mb-14 md:mb-20">
              <li className="relative pl-20 md:pl-0 md:pt-20">
                <h3 className="md:mb-2">Run Drill4J</h3>
                <p className="h-12">Deploy Drill4J Admin</p>
              </li>
              <li className="relative pl-20 md:pl-0 md:pt-20">
                <h3 className="md:mb-2">Run Application</h3>
                <p>Start your application with Drill4J Agent</p>
              </li>
              <li className="relative pl-20 md:pl-0 md:pt-20">
                <h3 className="md:mb-2">Register Agent</h3>
                <p>Open Drill4J and register the Agent</p>
              </li>
              <li className="relative pl-20 md:pl-0 md:pt-20">
                <h3 className="md:mb-2">Done</h3>
                <p>Drill4J is ready to use</p>
              </li>
            </ol>
            <a href="#" className="button-primary md:mx-auto" style={{ padding: '12px 24px' }}>Full instruction</a>
          </div>
        </section>
        <section className={clsx(styles.features, 'md:container')}>
          <div className="pt-24 pb-32">
            <h2 className="mb-8 md:mb-12 lg:mb-18 text-left px-4 md:px-0 md:text-center">Commercial Services</h2>
            <div className="grid grid-cols-12 gap-x-5 mx-auto">
              <div className="mt-4 col-span-full md:col-span-5 px-4">
                <h3 className="mb-6 md:mb-10">Basic</h3>
                <p className="mb-6">Functionality and features:</p>
                <ul className="mb-9 md:mb-66 lg:mb-66 pl-8">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Browser Extension</li>
                </ul>
                <a href="#" className="button-ghost justify-center mb-20 md:mb-4">For free</a>
              </div>
              <div className={clsx(styles.individualFeatures, 'pt-4 pb-8 md:col-start-7 col-span-full')}>
                <h3 className="mb-4 mx-8">Individual</h3>
                <p className="h-12 mb-6 pt-6 px-8 border-t border-monochrome-medium-tint">Basic features, plus:</p>
                <ul className="mx-4 md:mx-8 pl-8">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Browser Extension</li>
                </ul>
                <ul className="mb-9 mx-4 md:mx-8 pl-8">
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
        <section className={clsx(styles.quickStart, 'pt-16 pb-16 md:pb-14')}>
          <div className="container flex flex-col justify-center text-center">
            <h2 className="mb-2 leading-48">Get a quick start with Drill4J today</h2>
            <p className="mb-9 md:mb-8 leading-32">Try easy to install demo examples for JAVA and JS agents. ***</p>
            <a href="#" className="button-secondary mx-auto">Try demo</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
