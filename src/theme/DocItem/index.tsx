import React from 'react';
import clsx from 'clsx';
import {DocProvider, useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocPaginator from '@theme/DocPaginator';
import MDXContent from '@theme/MDXContent';
import {TOC} from '../../components';
import {useBreakpoint} from '../../hooks/use-breakpoint';
import './styles.scss';

function DocItemLayout({children}: {children: React.ReactNode}): JSX.Element {
  const {metadata, frontMatter, toc} = useDoc();
  const {title} = metadata;
  const {
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const isWindowLg = useBreakpoint('lg');
  const isLaptopWindow = useBreakpoint('laptop');

  return (
    <>
      <DocItemMetadata />
      <main className="grid grid-cols-12 gap-x-5 mb-22 bg-monochrome-white">
        <article
          className={clsx('col-span-12 lg:col-start-2 lg:col-span-8', {
            'lg:col-span-12 pr-16': isLaptopWindow,
          })}
          style={{maxWidth: '100%'}}
        >
          {!hideTitle && (
            <header>
              <h1 className="mt-8 mb-4 text-32 leading-48 text-monochrome-default">{title}</h1>
            </header>
          )}
          <div className="markdown">
            {children}
          </div>
          <br />
          <DocPaginator previous={metadata.previous} next={metadata.next} />
        </article>
        {!hideTableOfContents && toc && toc.length > 0 && isWindowLg && !isLaptopWindow && (
          <aside className="col-span-3">
            <TOC toc={toc} />
          </aside>
        )}
      </main>
      {!hideTableOfContents && toc && toc.length > 0 && isWindowLg && isLaptopWindow && (
        <aside>
          <TOC toc={toc} />
        </aside>
      )}
    </>
  );
}

export default function DocItem(props: {content: any}): JSX.Element {
  const MDXComponent = props.content;
  return (
    <DocProvider content={props.content}>
      <DocItemLayout>
        <MDXContent>
          <MDXComponent />
        </MDXContent>
      </DocItemLayout>
    </DocProvider>
  );
}
