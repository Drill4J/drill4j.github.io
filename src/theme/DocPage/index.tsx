/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  ReactNode, useState, useCallback, useEffect,
} from 'react';
import { MDXProvider } from '@mdx-js/react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs-types';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import type { DocumentRoute } from '@theme/DocItem';
import type { Props } from '@theme/DocPage';
import { matchPath } from '@docusaurus/router';
import { docVersionSearchTag } from '@docusaurus/theme-common';
import clsx from 'clsx';

import styles from './styled.module.scss';

type DocPageContentProps = {
  readonly currentDocRoute: DocumentRoute;
  readonly versionMetadata: PropVersionMetadata;
  readonly children: ReactNode;
};

function DocPageContent({
  currentDocRoute,
  versionMetadata,
  children,
}: DocPageContentProps): JSX.Element {
  const { siteConfig, isClient } = useDocusaurusContext();
  const {
    pluginId, permalinkToSidebar, docsSidebars, version,
  } = versionMetadata;
  const sidebarName = permalinkToSidebar[currentDocRoute.path];
  const sidebar = docsSidebars[sidebarName];

  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer(!hiddenSidebarContainer);
  }, [hiddenSidebar]);

  return (
    <Layout
      key={isClient}
      searchMetadatas={{
        version,
        tag: docVersionSearchTag(pluginId, version),
      }}
    >
      <div className={clsx(styles.docPageContainer)}>
        <DocSidebar
          key={sidebarName}
          sidebar={sidebar}
          path={currentDocRoute.path}
          sidebarCollapsible={
            siteConfig.themeConfig?.sidebarCollapsible ?? true
          }
          onCollapse={toggleSidebar}
          isHidden={hiddenSidebar}
        />
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>
    </Layout>
  );
}

function DocPage(props: Props): JSX.Element {
  const {
    route: { routes: docRoutes },
    versionMetadata,
    location,
  } = props;
  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute));
  if (!currentDocRoute) {
    return <NotFound {...props} />;
  }
  useEffect(() => {
    if (navigator.userAgent.indexOf('Mac') > 0) {
      document.querySelector('body')?.classList.add('mac-os');
    }
  }, []);
  return (
    <DocPageContent
      currentDocRoute={currentDocRoute}
      versionMetadata={versionMetadata}
    >
      {renderRoutes(docRoutes)}
    </DocPageContent>
  );
}

export default DocPage;
