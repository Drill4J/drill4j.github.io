/* eslint-disable max-len */
import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { RellaxWrapper } from 'react-rellax-wrapper';

import styles from './styles.module.scss';

const Figure: React.FC = ({ children }) => (
  <figure
    className={clsx(styles.figure,
      'grid grid-cols-8 lg:grid-cols-12 items-center justify-items-start gap-x-5 py-12 md:py-0')}
  >
    {children}
  </figure>
);

function Home() {
  const { navbar: { items } } = useThemeConfig();
  const { label, to }: any = items[items.length - 1];

  return (
    <Layout
      description="Minimize Your Regression Suite with Drill4J"
    >
      <main className={styles.mainPageWrapper}>
        <div className={clsx(styles.parallax)}>
          <div className="relative container pt-24 md:pt-54 pb:12 md:pb-58 md:h-full">
            <div className="md:px-14 lg:px-44">
              <h1 className="text-32 leading-48 md:leading-56 mb-4 md:text-40 text-center">
                Minimize Your Regression
                Suite with Drill4J
              </h1>
              <p className="mb-6 md:mb-0 text-center text-monochrome-default">
                Drill4J is “feature-on-demand” tool for real-time application profiling that does not
                affect codebase. It provides the ability to make white box functional testing, via
                access to application instructions and memory.
              </p>
              <Link
                style={{ textDecoration: 'none' }}
                className="button-primary w-44 mx-auto mb-12 visible md:invisible md:absolute"
                to={useBaseUrl(to)}
              >
                {label}
              </Link>
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
            <RellaxWrapper speed={1} className={`${styles.cube11} hidden md:block`} />
            <RellaxWrapper speed={0} className={`${styles.cube12} hidden md:block`} />
          </div>
        </div>
        <section className="container pb-12 md:pb-24">
          <Figure>
            <div className="relative order-1 col-span-full md:col-span-4 lg:col-span-6 mb-10 md:mb-0 w-full md:w-11/12">
              <div
                className={clsx(styles.imgWrapper, 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full')}
                style={{ borderRadius: '14px' }}
              >
                <img
                  className="w-full"
                  style={{ borderRadius: '14px' }}
                  src={useBaseUrl('img/coverage.png')}
                  alt="coverage"
                />
              </div>
              <img
                className={clsx(styles.shadowImg, 'w-5/6 mx-auto')}
                src={useBaseUrl('img/coverage-background.png')}
                alt="coverage background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2">
              <h3 className="mb-4">Measure Code Coverage</h3>
              <p className="text-monochrome-shade">
                Code coverage is a tricky metric, but Drill4J provides it with actionable feedback. It allows map tests
                to code and vice versa.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 md:order-2 lg:col-start-7 col-span-full md:col-span-4 lg:col-span-6 z-10 mb-10 md:mb-0 w-full">
              <div className={clsx(styles.imgWrapper, 'absolute -top-8 right-0 rounded-full w-1/2 md:w-1/2 ')}>
                <img
                  className="rounded-full w-full"
                  src={useBaseUrl('img/risks-and-t2r.png')}
                  alt="risks and tests to run"
                />
              </div>
              <img
                className={clsx(styles.shadowImg, 'w-5/6')}
                src={useBaseUrl('img/risks-and-t2r-background.png')}
                alt="risks and tests to run background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2 md:order-1">
              <h3 className="mb-4">Risk and Tests to Run</h3>
              <p className="text-monochrome-shade">Risk is a new or modified uncovered method.
                Drill4J advises which test you need to run to cover these Risk methods.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 col-span-full md:col-span-4 lg:col-span-6 mb-10 md:mb-0 w-full md:w-11/12">
              <div
                className={clsx(styles.imgWrapper, 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full')}
                style={{ borderRadius: '14px' }}
              >
                <img
                  className="w-full"
                  style={{ borderRadius: '14px' }}
                  src={useBaseUrl('img/time-savings.png')}
                  alt="time savings"
                />
              </div>
              <img
                className={clsx(styles.shadowImg, 'w-5/6 mx-auto')}
                src={useBaseUrl('img/time-savings-background.png')}
                alt="time savings background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2">
              <h3 className="mb-4">Time Savings</h3>
              <p className="text-monochrome-shade">
                It provides visualization of the Test Impact Analysis. You can check how much time Drill4J saves in each build of your application.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 md:order-2 lg:col-start-7 col-span-full md:col-span-4 lg:col-span-6 z-10 mb-10 md:mb-0 w-full">
              <div
                className={clsx(styles.imgWrapper, 'absolute -top-6 sm:-top-9 md:-top-9 lg:-top-11 right-5 rounded-full w-1/2 md:w-1/2')}
              >
                <img className="rounded-full w-full" src={useBaseUrl('img/quality-gate.png')} alt="quality gate" />
              </div>
              <img
                className={clsx(styles.shadowImg, 'w-5/6')}
                src={useBaseUrl('img/quality-gate-background.png')}
                alt="quality gate background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2 md:order-1">
              <h3 className="mb-4">Quality Gate</h3>
              <p className="text-monochrome-shade">
                You can configure 3 key metrics: Code Coverage, Risks and Tests to Run
                and use Drill4J Quality Gate status (passed, failed) in a CI/CD pipelines.
              </p>
            </figcaption>
          </Figure>
          <Figure>
            <div className="relative order-1 col-span-full md:col-span-4 lg:col-span-6 w-full md:w-11/12 mb-10 md:mb-0">
              <img
                className={clsx(styles.shadowImg, 'w-5/6 invisible')}
                src={useBaseUrl('img/browser-extension-background.png')}
                alt="browser extension"
              />
              <div className="absolute left-0 bottom-0 z-10 w-5/6">
                <img
                  className={clsx(styles.shadowImg)}
                  style={{ width: '80%' }}
                  src={useBaseUrl('img/browser-extension.png')}
                  alt="browser extension"
                />
                <img
                  className={clsx(styles.drillLogoShadow, 'absolute top-0 -right-1 z-10 rounded-full')}
                  style={{ width: '17%' }}
                  src={useBaseUrl('img/drill-rounded-logo.svg')}
                  alt="drill logo"
                />
              </div>
              <img
                className={clsx(styles.shadowImg, 'absolute w-8/12 top-0 right-0 ')}
                src={useBaseUrl('img/browser-extension-background.png')}
                alt="browser extension background"
              />
            </div>
            <figcaption className="flex flex-col justify-center col-span-full md:col-span-4 lg:col-span-5 order-2">
              <h3 className="mb-4">Chrome Extension</h3>
              <p className="text-monochrome-shade">
                Browser extension allows gather manual Code Coverage for several users
                on the one test environment at the same time.
              </p>
            </figcaption>
          </Figure>
        </section>
        <section className={clsx(styles.integrateStepsWrapper, 'py-18 mb-18 lg:mb-24 text-left md:text-center')}>
          <div className="container flex flex-col justify-center">
            <h2 className="mb-12">Easy to integrate</h2>
            <ol className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 md:gap-x-5 gap-y-8 p-0 mb-14 md:mb-20">
              <li className="relative pl-20 md:pl-0 md:pt-20 lg:col-span-3">
                <h3 className="md:mb-2 text-20">Run Drill4J</h3>
                <p className="h-12 xs:h-auto">Deploy Drill4J Admin</p>
              </li>
              <li className="relative pl-20 md:pl-0 md:pt-20 lg:col-span-3">
                <h3 className="md:mb-2 text-20">Deploy App</h3>
                <p>Start your application with Drill4J Agent</p>
              </li>
              <li className="relative pl-20 md:pl-0 md:pt-20 lg:col-span-3">
                <h3 className="md:mb-2">Register Agent</h3>
                <p>Open Drill4J and register the Agent</p>
              </li>
              <li className="relative pl-20 md:pl-0 md:pt-20 lg:col-span-3">
                <h3 className="md:mb-2 text-20">Done</h3>
                <p>Drill4J is ready to use</p>
              </li>
            </ol>
            <a href="/how-to-start" className="button-primary md:mx-auto" style={{ padding: '12px 24px' }}>Full instruction</a>
          </div>
        </section>
        <section className={clsx(styles.features, 'mb-24 lg:mb-32 xs:container')}>
          <h2 className="mb-8 md:mb-12 lg:mb-18 px-4 md:px-0 text-left md:text-center">Commercial Services</h2>
          <div className="relative grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-x-5 mx-auto">
            <div className="relative md:col-span-4 lg:col-start-2 lg:col-span-4 pt-4 px-6 lg:px-0">
              <h3 className="mb-6 md:mb-10">Basic</h3>
              <p className="mb-6">Functionality and features:</p>
              <ul className="mb-9 pl-8">
                <li className={styles.basicFeature}>Test Impact Analytics</li>
                <li className={styles.basicFeature}>Test Gap Analysis</li>
                <li className={styles.basicFeature}>Microservices Support</li>
                <li className={styles.basicFeature}>Chrome Extension</li>
              </ul>
              <a href="/how-to-start" className="button-ghost md:absolute bottom-8 left-6 lg:left-0 right-4 md:right-12 lg:right-0 mb-20 md:mb-0">For free</a>
            </div>
            <div className={clsx(styles.individualFeatures, 'md:col-span-4 lg:col-start-7 lg:col-span-5 pb-9')}>
              <h3 className="py-4 px-4 md:px-8 border-b border-monochrome-medium-tint">Individual</h3>
              <p className="py-6 pl-4 md:pl-8">Basic features, plus:</p>
              <div className="mb-8 px-4">
                <ul className="pl-8 md:pl-12">
                  <li className={styles.basicFeature}>Test Impact Analytics</li>
                  <li className={styles.basicFeature}>Test Gap Analysis</li>
                  <li className={styles.basicFeature}>Microservices Support</li>
                  <li className={styles.basicFeature}>Chrome Extension</li>
                </ul>
                <ul className="pl-8 md:pl-12">
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
              </div>
              <a href="mailto:Drill4j@gmail.com" className="button-primary mx-4 md:mx-8">Mail us</a>
            </div>
          </div>
        </section>
        <section className={clsx(styles.quickStart, 'pt-16 pb-16 md:pb-14')}>
          <div className="container flex flex-col justify-center text-center">
            <h2 className="mb-2 leading-48">Start with Drill4J today</h2>
            <p className="mb-9 md:mb-8 leading-32">Try easy installation of demo examples for Java and JS agents.</p>
            <a href="/install-demo" className="button-secondary mx-auto">Install demo</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
