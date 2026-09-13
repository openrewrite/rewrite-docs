/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * EJECTED from @docusaurus/theme-classic.
 *
 * Changes from the original: renders a grouped description list instead of
 * <DocCardList>.
 *
 * Why: on an index whose only job is routing, the card grid restated the
 * section sidebar at roughly four times the height — /authoring-recipes ran to
 * 19 cards over 2544px while the same 19 links sat in the sidebar, unscrolled,
 * the whole way down. The grid's one addition over the sidebar was a
 * description, and a two-line clamp was hiding the end of 12 of them.
 *
 * Grouping and the entry point come from `customProps` on the sidebar items,
 * so sidebars.ts stays the single source of truth. A section that sets neither
 * renders as one flat list, which is the right default.
 */
import { type FunctionComponent, type ReactNode, useEffect } from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useCurrentSidebarCategory, useDocById } from '@docusaurus/plugin-content-docs/client';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/DocCategoryGeneratedIndexPage';
import styles from './styles.module.css';

type IndexCustomProps = {
  /** H2 this item is listed under. Items sharing a value group together, in
   *  order of first appearance. */
  group?: string;
  /** Marks the section's entry point, lifted above the list. One per section. */
  startHere?: boolean;
};

type IndexItem = PropSidebarItem & {
  label?: string;
  href?: string;
  docId?: string;
  description?: string;
  items?: unknown[];
  customProps?: IndexCustomProps;
};

function isExternal(href?: string): boolean {
  return !!href && /^https?:\/\//.test(href);
}

/**
 * One row: title link over its full description.
 *
 * A doc's description lives on the doc, not the sidebar item, so it is looked
 * up by id — the same route DocCard took. A category carries its own, provided
 * sidebars.ts sets `description` on the category and not only inside `link`:
 * the plugin drops `link` when building client props, which is why these cards
 * used to read "18 items".
 */
const Row: FunctionComponent<{ item: IndexItem }> = ({ item }) => {
  const doc = useDocById(item.docId);
  const description = item.description ?? doc?.description;
  const external = isExternal(item.href);
  const count = item.items?.length;

  return (
    <li className={styles.row}>
      <Link
        className={styles.rowLink}
        href={item.href}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        <span className={styles.rowTitle}>
          {item.label}
          {external && <IconExternalLink width={12} height={12} />}
        </span>
        {description && <span className={styles.rowDescription}>{description}</span>}
        {/* A category leads to another index, not an article. Saying so stops
            it reading as a peer of the docs around it. */}
        {count !== undefined && (
          <span className={styles.rowMeta}>
            Section · {count} {count === 1 ? 'page' : 'pages'}
          </span>
        )}
      </Link>
    </li>
  );
};

Row.displayName = 'Row';

const List: FunctionComponent<{ items: IndexItem[] }> = ({ items }) => (
  <ul className={styles.list}>
    {items.map((item, i) => (
      <Row key={item.href ?? i} item={item} />
    ))}
  </ul>
);

List.displayName = 'List';

/** Groups in order of first appearance, so sidebars.ts order is the page order
 *  and no separate ordering key can drift out of sync with it. */
function groupItems(items: IndexItem[]): { name?: string; items: IndexItem[] }[] {
  const groups: { name?: string; items: IndexItem[] }[] = [];

  items.forEach((item) => {
    const name = item.customProps?.group;
    const existing = groups.find((g) => g.name === name);
    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ name, items: [item] });
    }
  });

  return groups;
}

/**
 * Hides the section sidebar for as long as an index page is mounted.
 *
 * This page *is* the section's table of contents — grouped, described, with an
 * entry point — so the sidebar beside it would list the same destinations a
 * second time in the same viewport. It comes back the moment a doc opens.
 *
 * The attribute is removed on unmount rather than keyed to a route list: a
 * client-side navigation to a doc must restore the sidebar, and this component
 * only mounts on index pages.
 */
function useHiddenSidebar() {
  useEffect(() => {
    document.documentElement.setAttribute('data-index-page', 'true');
    return () => document.documentElement.removeAttribute('data-index-page');
  }, []);
}

const DocCategoryGeneratedIndexPageContent: FunctionComponent<Props> = ({
  categoryGeneratedIndex,
}) => {
  const category = useCurrentSidebarCategory();
  useHiddenSidebar();
  const all = category.items as IndexItem[];

  const startHere = all.find((item) => item.customProps?.startHere);
  const rest = all.filter((item) => item !== startHere);
  const groups = groupItems(rest);

  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />

      <header>
        <Heading as="h1" className={styles.title}>
          {categoryGeneratedIndex.title}
        </Heading>
        {categoryGeneratedIndex.description && (
          <p className={styles.description}>{categoryGeneratedIndex.description}</p>
        )}
      </header>

      <article className={styles.body}>
        {startHere && (
          <div className={styles.startHere}>
            <p className={styles.startHereLabel}>Start here</p>
            <List items={[startHere]} />
          </div>
        )}

        {groups.map((group, i) => (
          <section key={group.name ?? `ungrouped-${i}`} className={styles.group}>
            {group.name && (
              <Heading as="h2" className={styles.groupHeading}>
                {group.name}
              </Heading>
            )}
            <List items={group.items} />
          </section>
        ))}
      </article>

      <footer className={styles.footer}>
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  );
};

DocCategoryGeneratedIndexPageContent.displayName = 'DocCategoryGeneratedIndexPageContent';

const DocCategoryGeneratedIndexPage: FunctionComponent<Props> = (props): ReactNode => (
  <>
    <PageMetadata
      title={props.categoryGeneratedIndex.title}
      description={props.categoryGeneratedIndex.description}
      keywords={props.categoryGeneratedIndex.keywords}
      image={useBaseUrl(props.categoryGeneratedIndex.image)}
    />
    <DocCategoryGeneratedIndexPageContent {...props} />
  </>
);

DocCategoryGeneratedIndexPage.displayName = 'DocCategoryGeneratedIndexPage';

export default DocCategoryGeneratedIndexPage;
