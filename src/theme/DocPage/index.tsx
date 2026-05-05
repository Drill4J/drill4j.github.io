import React, {useEffect} from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
  docVersionSearchTag,
  DocsContext,
} from '@docusaurus/theme-common';
import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from '@docusaurus/plugin-content-docs/client';
import DocPageLayout from '@theme/DocPage/Layout';
import NotFound from '@theme/NotFound';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/DocPage';

import styles from './styled.module.scss';

export default function DocPage(props: Props): JSX.Element {
  const {versionMetadata} = props;
  const currentDocRouteMetadata = useDocRootMetadata(props);

  if (!currentDocRouteMetadata) {
    return <NotFound />;
  }

  const {docElement, sidebarName, sidebarItems} = currentDocRouteMetadata;

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Mac') > 0) {
      document.querySelector('body')?.classList.add('mac-os');
    }
  }, []);

  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsContext.Provider value={versionMetadata}>
        <SearchMetadata
          version={versionMetadata.version}
          tag={docVersionSearchTag(
            versionMetadata.pluginId,
            versionMetadata.version,
          )}
        />
        <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
          <DocPageLayout>{docElement}</DocPageLayout>
        </DocsSidebarProvider>
      </DocsContext.Provider>
    </HtmlClassNameProvider>
  );
}
