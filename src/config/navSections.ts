import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import sidebars from '@site/sidebars';

/**
 * Sections shown in the secondary nav.
 *
 * `href` must match a top-level category's generated-index slug in sidebars.ts —
 * that is how a section resolves to its sidebar subtree, and nothing checks it
 * at build time. An href matching no category still links, but its pages fall
 * back to the full sidebar.
 */

export type NavSection = {
  name: string;
  /** Route the section starts at, and the prefix that marks it active. */
  href: string;
};

/** Left-aligned, ordered as a reader meets them. Six is the practical ceiling
 *  before the bar wraps around 1200px. */
export const primarySections: NavSection[] = [
  { name: 'Running Recipes', href: '/running-recipes' },
  { name: 'Authoring Recipes', href: '/authoring-recipes' },
  { name: 'Recipe catalog', href: '/recipes' },
  { name: 'Reference', href: '/reference' },
  { name: 'Concepts & explanations', href: '/concepts-explanations' },
  { name: 'Lists', href: '/lists' },
];

/** How many releases the Releases dropdown lists before "More releases". */
const RECENT_RELEASE_COUNT = 3;

/**
 * The most recent releases, read from the Changelog category in sidebars.ts.
 *
 * Derived rather than listed: an automated job adds a changelog entry on every
 * release, so a hand-written list here would be stale within days. sidebars.ts
 * orders that category newest-first and imports only a type, which is why it is
 * safe to read from client code.
 */
function recentReleases(): NavSection[] {
  const top = (sidebars.docs ?? []) as PropSidebarItem[];
  const changelog = top.find(
    (item): item is PropSidebarItem & { items: unknown[] } =>
      typeof item === 'object' && 'label' in item && item.label === 'Changelog',
  );

  return (changelog?.items ?? [])
    .filter((id): id is string => typeof id === 'string')
    .slice(0, RECENT_RELEASE_COUNT)
    .map((id) => ({
      // 'changelog/8-91-0-Release' -> '8.91.0'
      name: `${id.replace(/^changelog\//, '').replace(/-Release$/i, '').replace(/-/g, '.')} release`,
      href: `/${id}`,
    }));
}

/** Right-aligned dropdown, mirroring Releases on docs.moderne.io. */
export const releaseSections: NavSection[] = [
  ...recentReleases(),
  { name: 'All releases', href: '/changelog' },
];

/** Sections the secondary nav can mark active. The release entries are
 *  individual documents rather than sections, so they are excluded — only
 *  /changelog itself scopes a sidebar. */
export const selectableSections: NavSection[] = [
  ...primarySections,
  { name: 'Changelog', href: '/changelog' },
  { name: 'Licensing', href: '/licensing/openrewrite-licensing' },
];
