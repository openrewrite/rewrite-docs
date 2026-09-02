import type { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import { ownerOf, selectableSections, type NavSection } from '@site/src/config/navSections';

/** Every section that can scope a sidebar, with hrefs normalised once. */
const allSections: NavSection[] = selectableSections.map((section) => ({
  ...section,
  href: section.href.toLowerCase().replace(/\/$/, ''),
}));

/**
 * The section the current path belongs to, or null at the root. Shared with
 * SecondaryNav so the highlight and the scoped sidebar cannot disagree.
 *
 * The sidebar tree is asked first, because a prefix cannot answer this: Lists
 * and Reference both serve documents from /reference, and Concepts is served at
 * /concepts-explanations while its documents live at /concepts-and-explanations.
 * The prefix pass that follows is what matches the index pages themselves.
 */
export function findSection(pathname: string): NavSection | null {
  const owner = ownerOf(pathname);
  if (owner) {
    const owned = allSections.find((section) => section.href === owner);
    if (owned) {
      return owned;
    }
  }

  const path = pathname.toLowerCase();
  return allSections.find((section) => path.startsWith(section.href)) ?? null;
}

/** The top-level category whose generated-index permalink is this section.
 *  Matched on href rather than label, so renaming a section in sidebars.ts
 *  cannot silently break the match. */
function findCategoryForSection(
  items: readonly PropSidebarItem[],
  section: NavSection,
): PropSidebarItemCategory | null {
  return (
    items
      .filter((item): item is PropSidebarItemCategory => item.type === 'category')
      .find((item) => (item.href ?? '').toLowerCase().replace(/\/$/, '') === section.href) ?? null
  );
}

/**
 * Scope the sidebar to the section the reader is in — the secondary nav already
 * lists every section, so repeating them here would show each link twice.
 *
 * Falls back to the full list where scoping would not help: at the root, and for
 * single-document sections, where the scoped view would be empty.
 */
export function filterSidebarItemsBySection(
  items: readonly PropSidebarItem[],
  pathname: string,
): PropSidebarItem[] {
  const section = findSection(pathname);
  if (!section) {
    return items as PropSidebarItem[];
  }

  const category = findCategoryForSection(items, section);
  if (!category?.items?.length) {
    return items as PropSidebarItem[];
  }

  // Label comes from the category, not from navSections, so the heading always
  // matches what sidebars.ts calls the section.
  const header: PropSidebarItem = {
    type: 'html',
    value: `<strong>${category.label}</strong>`,
    defaultStyle: true,
  };

  return [header, ...category.items];
}
