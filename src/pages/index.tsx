/* eslint-disable max-len */
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

import styles from './styles.module.scss';
import {
  MetricsInfographic,
  ProcessInfographic,
  OverviewMetricsDashboard,
  ImpactComparisonDashboard,
  PillarsInfographic,
} from '../components/landing/mockups';
import { useContactEmail, useMailtoHref } from '../hooks/use-contact-email';

const DOCS = '/docs/what-is-drill4j';
const GITHUB = 'https://github.com/Drill4J/drill4j';
const TELEGRAM = 'https://t.me/drill4j';

function Home() {
  const contactEmail = useContactEmail();
  const emailHref = useMailtoHref();
  const talkHref = useMailtoHref('Drill4J demo request');

  return (
    <Layout
      title="Testing intelligence for AI-driven delivery"
      description="Drill4J is the proof layer for agentic pipelines — live test gap and impact signals so AI agents build features and tests that actually cover risk."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroAtmosphere} aria-hidden="true">
            <div className={styles.heroGlowA} />
            <div className={styles.heroGlowB} />
            <div className={styles.heroGlowC} />
            <div className={styles.heroGrid} />
          </div>

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.brandLockup}>
                <span className={styles.brandWordmark}>DRILL4J</span>
                <span className={styles.brandTagline}>Built for agentic pipelines</span>
              </div>
              <h1 className={styles.heroTitle}>
                The proof layer
                <span className={styles.heroTitleAccent}> for AI that ships</span>
              </h1>
              <p className={styles.heroLead}>
                Agents invent features and tests at machine speed.
                Drill4J shows what actually executed — so they stop wasting cycles
                and stop overlooking under-tested risk.
              </p>
              <div className={styles.heroCtas}>
                <Link className={styles.ctaPrimary} to={useBaseUrl(DOCS)}>
                  See how it works
                </Link>
                <a className={styles.ctaGhost} href={talkHref}>
                  Talk to us
                </a>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true" />
          </div>
        </section>

        <section className={clsx(styles.block, styles.blockMetrics)}>
          <div className={styles.blockInner}>
            <div className={styles.blockIntro}>
              <p className={styles.eyebrow}>What Drill4J brings</p>
              <h2>Execution truth your agents can act on</h2>
              <p className={styles.sectionLead}>
                Not another coverage percentage. Live signals that tell an AI coding agent
                what changed, what is still under-tested, and which tests are worth running next.
              </p>
            </div>
            <MetricsInfographic />
          </div>
        </section>

        <section className={clsx(styles.block, styles.blockPillars)}>
          <div className={styles.blockInner}>
            <div className={styles.blockIntro}>
              <p className={styles.eyebrow}>Signals that steer agents</p>
              <h2>Gap, impact, and time well spent</h2>
              <p className={styles.sectionLead}>
                Three reads that turn raw coverage into action — for humans and for AI coding agents.
              </p>
            </div>
            <PillarsInfographic />
          </div>
        </section>

        <section className={clsx(styles.block, styles.blockProcess)}>
          <div className={styles.blockInner}>
            <div className={styles.blockIntro}>
              <p className={styles.eyebrow}>Where it integrates</p>
              <h2>Drop into the agentic loop — not beside it</h2>
              <p className={styles.sectionLead}>
                From PR to pipeline to release gate, Drill4J sits on the critical path:
                agents generate, CI runs, Drill4J scores reality, agents iterate.
              </p>
            </div>
            <ProcessInfographic />
          </div>
        </section>

        <section className={clsx(styles.block, styles.blockDash)}>
          <div className={styles.blockGrid}>
            <div className={styles.blockCopy}>
              <p className={styles.eyebrow}>Gap analysis</p>
              <h2>See what your tests never touched</h2>
              <p>
                Spot under-tested code at a glance — how much ran in this release, what was already
                covered earlier, and where real gaps still hide before you ship.
              </p>
            </div>
            <div className={styles.blockVisual}>
              <OverviewMetricsDashboard />
            </div>
          </div>
        </section>

        <section className={clsx(styles.block, styles.blockDashAlt)}>
          <div className={clsx(styles.blockGrid, styles.blockGridFlip)}>
            <div className={styles.blockCopy}>
              <p className={styles.eyebrow}>Comparative test impact</p>
              <h2>Run the tests that matter for this change</h2>
              <p>
                Compare builds, surface open risks on new and modified methods, and get the
                impacted test set — so AI and CI focus regression where the code actually moved.
              </p>
            </div>
            <div className={styles.blockVisual}>
              <ImpactComparisonDashboard />
            </div>
          </div>
        </section>

        <section className={clsx(styles.block, styles.blockOffer)}>
          <div className={styles.offerInner}>
            <p className={styles.eyebrow}>Open source · On-premises</p>
            <h2>Run it yourself. Extend it with us.</h2>
            <div className={styles.offerGrid}>
              <div className={styles.offerCol}>
                <h3>OSS, out of the box</h3>
                <p>
                  Apache 2.0. Deploy on your infrastructure — Docker, Kubernetes, or OpenShift.
                  Code and metrics stay inside your network, ready for private AI stacks.
                </p>
                <ul>
                  <li>Java / JVM applications supported today</li>
                  <li>Agents, CI quality gates, and full dashboards included</li>
                  <li>Self-hosted — no SaaS dependency</li>
                </ul>
                <Link className={styles.ctaPrimary} to={useBaseUrl(DOCS)}>
                  Start with the docs
                </Link>
              </div>
              <div className={styles.offerColAccent}>
                <h3>Commercial services</h3>
                <p>
                  When you need production-ready rollout or deeper fit, we install, provision,
                  and customize Drill4J for your stack and agentic workflows.
                </p>
                <ul>
                  <li>Installation, hardening, and environment provisioning</li>
                  <li>Customization and extensions for your project</li>
                  <li>.NET and frontend JavaScript available as paid configuration</li>
                </ul>
                <a className={styles.ctaOnDark} href={TELEGRAM}>
                  Request a services conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <h2>Give your AI agents a way to know they are right.</h2>
            <p>
              Instrument builds. Feed gap and impact signals back into the loop.
              Ship with evidence — not optimism.
            </p>
            <div className={styles.heroCtas}>
              <Link className={styles.ctaPrimary} to={useBaseUrl(DOCS)}>
                Explore documentation
              </Link>
              <a className={styles.ctaGhost} href={GITHUB}>
                Star on GitHub
              </a>
            </div>
            <div className={styles.contactRow}>
              <a href={TELEGRAM}>Telegram</a>
              {contactEmail ? <a href={emailHref}>Email</a> : null}
              <a href={GITHUB}>GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
