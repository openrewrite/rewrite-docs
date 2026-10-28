import sidebars from '@site/sidebars';

/**
 * Sections shown in the secondary nav.
 *
 * `href` must match a top-level category's generated-index slug or linked doc in sidebars.ts —
 * that is how a section resolves to its sidebar subtree. An href matching no
 * category still links, but its pages fall back to the full sidebar, so
 * scripts/check-orphaned-pages.js fails CI on one.
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
];

/**
 * Route -> section href, derived from the sidebar tree.
 *
 * A section cannot be identified by URL prefix alone: Concepts & explanations is
 * served at /concepts-explanations but its documents live under
 * /concepts-and-explanations. Walking the tree is the only thing that knows
 * which section a document belongs to.
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
    const node = item as { type?: string; link?: { slug?: string; id?: string }; items?: unknown[] };
    const slug = node.link?.slug ?? (node.link?.id && `/${node.link.id}`);
    if (node.type !== 'category' || !slug || !Array.isArray(node.items)) {
      return;
    }
    if (node.link?.id) {
      owners.set(`/${node.link.id}`.toLowerCase(), slug.toLowerCase());
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

const ALL_RELEASES_HREF = '/changelog';

/** Right-aligned dropdown, mirroring Releases on docs.moderne.io. */
export const releaseSections: NavSection[] = [
  { name: 'Changelog', href: ALL_RELEASES_HREF },
  { name: 'Latest versions', href: '/reference/latest-versions-of-every-openrewrite-module' },
];

/** The drawer's sections, where the secondary nav is hidden: the same links, with
 *  the Releases dropdown flattened to its index page. */
export const mobileSections: NavSection[] = [
  ...primarySections,
  { name: 'Releases', href: ALL_RELEASES_HREF },
];

/** Sections the secondary nav can mark active. */
export const selectableSections: NavSection[] = [
  ...primarySections,
  { name: 'Changelog', href: ALL_RELEASES_HREF },
];
