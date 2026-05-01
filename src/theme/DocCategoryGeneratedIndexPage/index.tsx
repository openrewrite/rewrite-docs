import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {PageMetadata} from '@docusaurus/theme-common';
import {useCurrentSidebarCategory} from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCard from '@theme/DocCard';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import TOC from '@theme/TOC';
import type {Props} from '@theme/DocCategoryGeneratedIndexPage';

import styles from './styles.module.css';

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function DocCategoryGeneratedIndexPageMetadata({
  categoryGeneratedIndex,
}: Props): ReactNode {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({
  categoryGeneratedIndex,
}: Props): ReactNode {
  const category = useCurrentSidebarCategory();
  const items = category.items;

  const toc = items
    .filter((item: any) => Boolean(item.label))
    .map((item: any) => ({
      value: item.label,
      id: slugify(item.label),
      level: 2,
    }));

  const showTOC = toc.length > 0;

  return (
    <div className="row">
      <div className={clsx('col', showTOC && styles.docItemCol)}>
        <div className={styles.generatedIndexPage}>
          <DocVersionBanner />
          <DocBreadcrumbs />
          <DocVersionBadge />
          <header>
            <Heading as="h1" className={styles.title}>
              {categoryGeneratedIndex.title}
            </Heading>
            {categoryGeneratedIndex.description && (
              <p>{categoryGeneratedIndex.description}</p>
            )}
          </header>
          <article className="margin-top--lg">
            <section className={clsx('row', styles.list)}>
              {items.map((item: any, index: number) => {
                const id = item.label ? slugify(item.label) : undefined;
                return (
                  <article
                    key={index}
                    id={id}
                    className="col col--6 margin-bottom--lg">
                    <DocCard item={item} />
                  </article>
                );
              })}
            </section>
          </article>
          <footer className="margin-top--md">
            <DocPaginator
              previous={categoryGeneratedIndex.navigation.previous}
              next={categoryGeneratedIndex.navigation.next}
            />
          </footer>
        </div>
      </div>
      {showTOC && (
        <div className="col col--3">
          <div className={styles.tocWrapper}>
            <div className={styles.tocLabel}>On this page</div>
            <TOC
              toc={toc}
              minHeadingLevel={2}
              maxHeadingLevel={3}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props: Props): ReactNode {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
