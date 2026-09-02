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

/**
 * Route -> section href, derived from the sidebar tree.
 *
 * A section cannot be identified by URL prefix alone. Two cases break it:
 * Concepts & explanations is served at /concepts-explanations but its documents
 * live under /concepts-and-explanations, and Lists owns seven documents under
 * /reference — the same prefix Reference uses for its own thirteen. Walking the
 * tree is the only thing that knows which section a document belongs to.
 *
 * Safe to build from doc ids because routeBasePath is "/" and no document in a
 * section overrides its slug, so the route is always "/" + id.
 */
function buildRouteOwners(): Map<string, string> {
  const owners = new Map<string, string>();

  const collect = (items: unknown[], sectionHref: string): void => {
    items.forEach((item) => {
      if (typeof item === 'string') {
        owners.set(`/${item}`.toLowerCase(), sectionHref);
        return;
      }
      if (typeof item !== 'object' || item === null) {
        return;
      }
      const node = item as { type?: string; id?: string; items?: unknown[] };
      if (node.type === 'doc' && node.id) {
        owners.set(`/${node.id}`.toLowerCase(), sectionHref);
      }
      if (Array.isArray(node.items)) {
        collect(node.items, sectionHref);
      }
    });
  };

  ((sidebars.docs ?? []) as unknown[]).forEach((item) => {
    if (typeof item !== 'object' || item === null) {
      return;
    }
    const node = item as { type?: string; link?: { slug?: string }; items?: unknown[] };
    const slug = node.link?.slug;
    if (node.type !== 'category' || !slug || !Array.isArray(node.items)) {
      return;
    }
    collect(node.items, slug.toLowerCase());
  });

  return owners;
}

const routeOwners = buildRouteOwners();

/** The section href owning this exact route, if the tree claims one. */
export function ownerOf(pathname: string): string | undefined {
  return routeOwners.get(pathname.toLowerCase().replace(/\/$/, ''));
}

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

/** The section the release entries belong to. */
const ALL_RELEASES_HREF = '/changelog';

/** Right-aligned dropdown, mirroring Releases on docs.moderne.io. */
export const releaseSections: NavSection[] = [
  ...recentReleases(),
  { name: 'All releases', href: ALL_RELEASES_HREF },
];

/** The drawer's sections, where the secondary nav is hidden: the same links, with
 *  the Releases dropdown flattened to its index page. */
export const mobileSections: NavSection[] = [
  ...primarySections,
  { name: 'Releases', href: ALL_RELEASES_HREF },
];

/** Sections the secondary nav can mark active. The release entries are
 *  individual documents rather than sections, so they are excluded — only
 *  /changelog itself scopes a sidebar. */
export const selectableSections: NavSection[] = [
  ...primarySections,
  { name: 'Changelog', href: ALL_RELEASES_HREF },
  { name: 'Licensing', href: '/licensing/openrewrite-licensing' },
];
