import React from 'react';
import Layout from '@theme/Layout';
import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';
import clsx from 'clsx';

import {ContactUsViaTelegramBanner} from './contact-us-via-telegram-banner';
import {Banner} from '../../components';
import styles from './styles.module.scss';

export default function MDXPage(props: any): JSX.Element {
  const {content: MDXPageContent} = props;
  const {frontMatter, metadata} = MDXPageContent;

  const {
    title,
    description,
    wrapperClassName,
  } = frontMatter;
  const {permalink} = metadata;

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName={wrapperClassName}
    >
      <main>
        <Banner backgroundSrc="imgs/banner-background.png">
          <h1 className="text-monochrome-white text-32">{title}</h1>
        </Banner>
        <div className="container pt-12 pb-24">
          <div className={clsx(styles.mdx, 'markdown w-auto mx-auto')}>
            <MDXProvider components={MDXComponents}>
              <MDXPageContent />
            </MDXProvider>
          </div>
        </div>
        {title === '3 Easy steps to integrate Drill4J' && <ContactUsViaTelegramBanner />}
      </main>
    </Layout>
  );
}
