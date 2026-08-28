/**
 * Sections shown in the secondary nav.
 *
 * `href` must match a top-level category's generated-index slug in sidebars.ts —
 * that is how a section resolves to its sidebar subtree, and nothing checks it
 * at build time. An href matching no category still links, but its pages fall
 * back to the full sidebar; Training and Licensing do exactly that, being single
 * documents rather than trees.
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
  { name: 'Training', href: '/training' },
];

/** Right-aligned dropdown, mirroring Releases on docs.moderne.io. Reference
 *  material, looked up rather than browsed. */
export const moreSections: NavSection[] = [
  { name: 'Lists', href: '/lists' },
  { name: 'Changelog', href: '/changelog' },
  { name: 'Licensing', href: '/licensing/openrewrite-licensing' },
];
