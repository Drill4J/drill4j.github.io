/* eslint-disable max-len */
import React from 'react';
import clsx from 'clsx';
import styles from '../../pages/styles.module.scss';

type MockChromeProps = {
  title: string;
  path?: string;
  children: React.ReactNode;
  className?: string;
};

const MockChrome: React.FC<MockChromeProps> = ({
  title, path, children, className,
}) => (
  <div className={clsx(styles.mockChrome, className)} aria-hidden="true">
    <div className={styles.mockTitlebar}>
      <span className={styles.mockDots}>
        <i /><i /><i />
      </span>
      <span className={styles.mockWindowTitle}>{title}</span>
      <span className={styles.mockPath}>{path}</span>
    </div>
    {children}
  </div>
);

/** Metrics-centric infographic — WHAT Drill4J brings. */
export const MetricsInfographic: React.FC = () => (
  <div className={styles.metricsGraphic} aria-hidden="true">
    <div className={styles.metricsGlow} />
    <div className={styles.metricsBoard}>
      <div className={styles.metricsCol}>
        <div className={styles.metricsLabel}>Before Drill4J</div>
        <div className={styles.metricsStack}>
          <div className={styles.metricsBarBlind} style={{ height: '72%' }}>
            <span>Full suite every time</span>
          </div>
          <div className={styles.metricsBarGap} style={{ height: '28%' }}>
            <span>Unknown gaps</span>
          </div>
        </div>
        <p>Agents and CI burn hours on the full suite — and still miss under-tested methods.</p>
      </div>

      <div className={styles.metricsArrow}>
        <svg viewBox="0 0 80 40" width="80" height="40">
          <defs>
            <linearGradient id="mArrow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2f8eea" />
              <stop offset="100%" stopColor="#1bbf9a" />
            </linearGradient>
          </defs>
          <path d="M8 20 H58" stroke="url(#mArrow)" strokeWidth="3" strokeLinecap="round" />
          <path d="M52 10 L68 20 L52 30" fill="none" stroke="url(#mArrow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className={styles.metricsCol}>
        <div className={styles.metricsLabel}>With Drill4J</div>
        <div className={styles.metricsStack}>
          <div className={styles.metricsBarOwn} style={{ height: '46%' }}>
            <span>Proven coverage</span>
          </div>
          <div className={styles.metricsBarOther} style={{ height: '22%' }}>
            <span>Impacted tests</span>
          </div>
          <div className={styles.metricsBarFocus} style={{ height: '18%' }}>
            <span>Open risks</span>
          </div>
          <div className={styles.metricsBarIdle} style={{ height: '14%' }}>
            <span>Unchanged / irrelevant</span>
          </div>
        </div>
        <p>Every cycle lands on real risk — agents iterate where coverage still lags.</p>
      </div>

      <div className={styles.metricsSignal}>
        <div className={styles.metricsSignalTitle}>Live agent signals</div>
        <ul>
          <li><em>12</em> untested risks on this change</li>
          <li><em>47</em> tests worth running — not 1,842</li>
          <li><em>4h 12m</em> regression time reclaimed</li>
        </ul>
      </div>
    </div>
  </div>
);

/** Three capability pillars with dedicated visuals. */
export const PillarsInfographic: React.FC = () => (
  <div className={styles.pillarsGrid} aria-hidden="true">
    <article className={styles.pillarCard}>
      <div className={styles.pillarArt}>
        <svg viewBox="0 0 200 120" className={styles.pillarSvg}>
          <defs>
            <linearGradient id="gapSweep" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f8eea" />
              <stop offset="100%" stopColor="#90caf9" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="62" r="44" fill="none" stroke="#e8edf2" strokeWidth="10" />
          <circle cx="100" cy="62" r="44" fill="none" stroke="url(#gapSweep)" strokeWidth="10" strokeDasharray="180 277" strokeLinecap="round" transform="rotate(-90 100 62)" />
          <circle cx="100" cy="62" r="44" fill="none" stroke="#f0a04b" strokeWidth="10" strokeDasharray="55 277" strokeDashoffset="-180" strokeLinecap="round" transform="rotate(-90 100 62)" />
          <circle cx="148" cy="38" r="7" fill="#f0a04b" />
          <circle cx="148" cy="38" r="12" fill="none" stroke="#f0a04b" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>
      <h3>Gap radar</h3>
      <p>Pinpoint new and changed methods that never ran under any test.</p>
    </article>

    <article className={styles.pillarCard}>
      <div className={styles.pillarArt}>
        <svg viewBox="0 0 200 120" className={styles.pillarSvg}>
          <rect x="28" y="28" width="18" height="64" rx="6" fill="#c5d0db" opacity="0.55" />
          <rect x="54" y="40" width="18" height="52" rx="6" fill="#c5d0db" opacity="0.55" />
          <rect x="80" y="22" width="18" height="70" rx="6" fill="#2f8eea" />
          <rect x="106" y="48" width="18" height="44" rx="6" fill="#90caf9" />
          <rect x="132" y="34" width="18" height="58" rx="6" fill="#2f8eea" />
          <rect x="158" y="56" width="18" height="36" rx="6" fill="#c5d0db" opacity="0.4" />
          <path d="M24 98 H176" stroke="#d3dee8" strokeWidth="2" />
        </svg>
      </div>
      <h3>Impact focus</h3>
      <p>Recommend the smallest regression set proven to touch this change.</p>
    </article>

    <article className={styles.pillarCard}>
      <div className={styles.pillarArt}>
        <svg viewBox="0 0 200 120" className={styles.pillarSvg}>
          <path d="M30 78 C60 78, 70 42, 100 42 C130 42, 140 78, 170 78" fill="none" stroke="#c5d0db" strokeWidth="8" strokeLinecap="round" />
          <path d="M30 78 C55 78, 72 58, 100 52 C128 46, 145 38, 170 34" fill="none" stroke="#1bbf9a" strokeWidth="8" strokeLinecap="round" />
          <circle cx="170" cy="34" r="6" fill="#1bbf9a" />
        </svg>
        <div className={styles.pillarArtCaption}>
          <span>hours</span>
          <strong>reclaimed</strong>
        </div>
      </div>
      <h3>Less wasted work</h3>
      <p>Cut blind full-suite churn; spend agent and CI time where risk lives.</p>
    </article>
  </div>
);

/** Process-centric infographic — WHERE Drill4J integrates. */
export const ProcessInfographic: React.FC = () => (
  <div className={styles.processGraphic} aria-hidden="true">
    <div className={styles.processTrack}>
      <div className={styles.processRail} />
      {[
        { key: 'pr', title: 'Change', sub: 'Human · Agent · PR', tone: styles.processNodeSky },
        { key: 'agent', title: 'AI agent', sub: 'Generate · Select', tone: styles.processNodeBlue },
        { key: 'drill', title: 'Drill4J', sub: 'Gaps · Impact · Proof', tone: styles.processNodeCore },
        { key: 'ci', title: 'CI / CD', sub: 'Run · Gate', tone: styles.processNodeMint },
        { key: 'ship', title: 'Release', sub: 'Evidence · Ship', tone: styles.processNodeMint },
      ].map((step, i) => (
        <div key={step.key} className={styles.processStep} style={{ animationDelay: `${i * 0.12}s` }}>
          <div className={`${styles.processNode} ${step.tone}`}>
            <strong>{step.title}</strong>
            <span>{step.sub}</span>
          </div>
          {i < 4 ? <div className={styles.processConnector} /> : null}
        </div>
      ))}
    </div>
    <div className={styles.processFoot}>
      <div>
        <strong>Feedback in</strong>
        <span>Coverage deltas and open risks stream back to the agent after every run.</span>
      </div>
      <div>
        <strong>Ship with confidence</strong>
        <span>Changed code earns a green light only after tests have exercised it.</span>
      </div>
      <div>
        <strong>On-prem ready</strong>
        <span>Private models and private metrics — same closed loop.</span>
      </div>
    </div>
  </div>
);

/** Build overview mockup — pies + stacked coverage bar (current UI palette). */
export const OverviewMetricsDashboard: React.FC = () => (
  <MockChrome
    title="Drill4J · ecommerce / backend"
    path="/metrics/ecommerce/apps/backend/builds/0.1.5"
  >
    <div className={styles.overviewMock}>
      <div className={styles.overviewHeader}>
        <div>
          <div className={styles.kicker}>Build 0.1.5 · main · a3f91c2</div>
          <div className={styles.mockH1}>Total coverage</div>
        </div>
        <div className={styles.gateBadge}>Quality gate · PASS</div>
      </div>

      <div className={styles.overviewMeta}>
        <div><span>Version</span><strong>0.1.5</strong></div>
        <div><span>Methods</span><strong>1,284</strong></div>
        <div><span>Probes</span><strong>18.4k</strong></div>
        <div><span>Sessions</span><strong>24</strong></div>
      </div>

      <div className={styles.coverageBarLabel}>Probe coverage</div>
      <div className={styles.coverageTrack}>
        <div className={styles.coverageFillOther} style={{ width: '78%' }} />
        <div className={styles.coverageFillOwn} style={{ width: '61%' }} />
      </div>
      <div className={styles.coverageLegend}>
        <span><i className={styles.swatchOwn} />This build 61%</span>
        <span><i className={styles.swatchOther} />Other builds +17%</span>
        <span><i className={styles.swatchGap} />Gaps 22%</span>
      </div>

      <div className={styles.pieRow}>
        <div className={styles.pieCard}>
          <div className={styles.panelLabel}>Code coverage (probes)</div>
          <div className={styles.pieWrap}>
            <svg viewBox="0 0 36 36" className={styles.pieSvg}>
              <circle className={styles.pieGap} cx="18" cy="18" r="15.5" />
              <circle className={styles.pieOther} cx="18" cy="18" r="15.5" strokeDasharray="78 100" strokeDashoffset="0" />
              <circle className={styles.pieOwn} cx="18" cy="18" r="15.5" strokeDasharray="61 100" strokeDashoffset="0" />
            </svg>
            <div className={styles.pieCenter}><strong>78%</strong><em>covered</em></div>
          </div>
        </div>
        <div className={styles.pieCard}>
          <div className={styles.panelLabel}>Methods coverage</div>
          <div className={styles.pieWrap}>
            <svg viewBox="0 0 36 36" className={styles.pieSvg}>
              <circle className={styles.pieGap} cx="18" cy="18" r="15.5" />
              <circle className={styles.pieOther} cx="18" cy="18" r="15.5" strokeDasharray="71 100" />
              <circle className={styles.pieOwn} cx="18" cy="18" r="15.5" strokeDasharray="54 100" />
            </svg>
            <div className={styles.pieCenter}><strong>71%</strong><em>covered</em></div>
          </div>
        </div>
      </div>
    </div>
  </MockChrome>
);

/** Comparison / test impact mockup. */
export const ImpactComparisonDashboard: React.FC = () => (
  <MockChrome
    title="Drill4J · Compare builds"
    path="/metrics/ecommerce/apps/backend/builds/0.1.5/comparison"
  >
    <div className={styles.impactMock}>
      <div className={styles.overviewHeader}>
        <div>
          <div className={styles.kicker}>0.1.5 vs 0.1.2 · baseline</div>
          <div className={styles.mockH1}>Test impact</div>
        </div>
        <div className={styles.gateBadgeWarn}>12 open risks</div>
      </div>

      <div className={styles.impactStrip}>
        <div className={styles.metricTile}>
          <span>Changed methods</span>
          <strong>86</strong>
        </div>
        <div className={styles.metricTile}>
          <span>Covered risks</span>
          <strong>74</strong>
          <em className={styles.up}>86%</em>
        </div>
        <div className={styles.metricTile}>
          <span>Impacted tests</span>
          <strong>47</strong>
          <em>of 1,842</em>
        </div>
        <div className={styles.metricTile}>
          <span>Time saved</span>
          <strong>4h 12m</strong>
        </div>
      </div>

      <div className={styles.impactTable}>
        <div className={styles.impactTableHead}>
          <span>Method</span>
          <span>Change</span>
          <span>Cov.</span>
          <span>Tests</span>
        </div>
        {[
          ['CheckoutService.placeOrder', 'modified', 92, 11],
          ['PaymentClient.authorize', 'new', 0, 0],
          ['CartController.merge', 'modified', 78, 6],
          ['InventoryPort.reserve', 'modified', 100, 4],
          ['PromoEngine.apply', 'new', 41, 2],
        ].map(([name, change, cov, tests]) => (
          <div key={String(name)} className={styles.impactTableRow}>
            <span className={styles.mono}>{name}</span>
            <span className={change === 'new' ? styles.tagNew : styles.tagMod}>{change}</span>
            <span className={styles.miniBarWrap}>
              <span className={styles.miniBarTrack}>
                <span
                  className={Number(cov) === 0 ? styles.miniBarGap : styles.miniBarOwn}
                  style={{ width: `${Math.max(Number(cov), Number(cov) === 0 ? 100 : 4)}%` }}
                />
              </span>
              <em>{cov}%</em>
            </span>
            <span>{tests}</span>
          </div>
        ))}
      </div>
    </div>
  </MockChrome>
);
