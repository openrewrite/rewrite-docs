import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import { type FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import type { NavSection } from '@site/src/config/navSections';
import { findSection } from '@site/src/theme/DocSidebarItems/filterUtils';
import styles from './SecondaryNav.module.css';

export type SecondaryNavProps = {
  /** Sections rendered as direct links, left-aligned. */
  sections: NavSection[];
  /** Label for the right-aligned dropdown. */
  menuLabel: string;
  /** Items inside that dropdown. */
  menuItems: NavSection[];
};

/** Chevron for the dropdown. Masked from --docs-chevron-down rather than
 *  inlined, so this glyph has one definition shared with the sidebar caret. The
 *  mask takes its colour from currentColor, as an inline SVG would. */
const Chevron: FunctionComponent<{ open: boolean }> = ({ open }) => (
  <span className={clsx(styles.chevron, open && styles.chevronOpen)} aria-hidden="true" />
);

/**
 * Section navigation, shown below the primary navbar on desktop.
 *
 * Picks the section; the sidebar then shows that section's contents (see
 * src/theme/DocSidebarItems, which scopes on desktop only). Hidden below 997px,
 * where the drawer keeps every section and this bar would duplicate it.
 */
export const SecondaryNav: FunctionComponent<SecondaryNavProps> = ({
  sections,
  menuLabel,
  menuItems,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Same matcher the sidebar filter uses, so the highlighted section and the
  // scoped sidebar can never disagree.
  const activeHref = findSection(location.pathname)?.href;
  const isMenuActive = menuItems.some((item) => item.href === activeHref);

  const close = useCallback(() => setOpen(false), []);

  // Close on outside click and on Escape, so the menu never outlives its context.
  useEffect(() => {
    if (!open) {
      return;
    }
    // mousedown + touchstart + focusin is the set theme-classic's own
    // DropdownNavbarItem listens on; mousedown alone leaves the menu open on a
    // touch tap and when focus moves away by keyboard.
    const onOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        close();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    const events = ['mousedown', 'touchstart', 'focusin'] as const;
    events.forEach((name) => document.addEventListener(name, onOutside));
    document.addEventListener('keydown', onKeyDown);
    return () => {
      events.forEach((name) => document.removeEventListener(name, onOutside));
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  // A route change means the menu's job is done.
  useEffect(close, [location.pathname, close]);

  return (
    <nav className={styles.secondaryNav} aria-label="Documentation sections">
      <div className={styles.sections}>
        {sections.map((section) => {
          const active = section.href === activeHref;
          return (
            <Link
              key={section.href}
              to={section.href}
              className={clsx(styles.section, active && styles.sectionActive)}
              aria-current={active ? 'page' : undefined}
            >
              {section.name}
            </Link>
          );
        })}
      </div>

      <div className={styles.menu} ref={menuRef}>
        <button
          type="button"
          className={clsx(styles.section, styles.menuButton, isMenuActive && styles.sectionActive)}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="true"
        >
          {menuLabel}
          <Chevron open={open} />
        </button>
        {open && (
          <div className={styles.dropdown} role="menu">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={clsx(styles.dropdownItem, item.href === activeHref && styles.dropdownItemActive)}
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

SecondaryNav.displayName = 'SecondaryNav';
