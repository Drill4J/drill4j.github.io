/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import type { Props } from '@theme/MDXPage';

import { ContactUsViaTelegramBanner } from './contact-us-via-telegram-banner';
import { Banner } from '../../components';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function MDXPage(props: Props): JSX.Element {
  const { content: MDXPageContent } = props;
  const { frontMatter, metadata } = MDXPageContent;

  const {
    title,
    description,
    wrapperClassName,
  } = frontMatter;
  const { permalink } = metadata;

  return (
    <Layout
      title={title}
      description={description}
      permalink={permalink}
      wrapperClassName={wrapperClassName}
    >
      <main>
        <Banner backgroundSrc="img/banner-background.png">
          <h1 className="text-monochrome-white text-32">{title}</h1>
        </Banner>
        <div className="container pt-12 pb-24">
          <div className="markdown sm:mx-10 md:mx-22">
            <MDXProvider components={MDXComponents}>
              <MDXPageContent />
            </MDXProvider>
          </div>
        </div>
        <ContactUsViaTelegramBanner />
      </main>
    </Layout>
  );
}

export default MDXPage;
