import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import { type FunctionComponent } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import type { Props as NavbarItemConfig } from '@theme/NavbarItem';
import { mobileSections } from '@site/src/config/navSections';
import { findSection } from '@site/src/theme/DocSidebarItems/filterUtils';
import styles from './styles.module.css';

/** Sections above the navbar items: the section nav is hidden below 997px, and the
 *  drawer's second level only exists on pages that have a sidebar. */
const NavbarMobilePrimaryMenu: FunctionComponent = () => {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO from upstream theme-classic: temporary casting until ThemeConfig improves.
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];
  const location = useLocation();
  // Same matcher as the secondary nav and the sidebar filter, so they can't disagree.
  const activeHref = findSection(location.pathname)?.href;
  const close = () => mobileSidebar.toggle();

  return (
    <>
      <ul className="menu__list">
        {mobileSections.map((section) => {
          const active = section.href === activeHref;
          return (
            <li className="menu__list-item" key={section.href}>
              <Link
                to={section.href}
                className={clsx('menu__link', styles.sectionLink, active && styles.sectionLinkActive)}
                aria-current={active ? 'page' : undefined}
                onClick={close}
              >
                {section.name}
                <span className={styles.chevron} aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className={clsx('menu__list', styles.offSiteLinks)}>
        {items.map((item, i) => (
          <NavbarItem mobile {...item} onClick={close} key={i} />
        ))}
      </ul>
    </>
  );
};

NavbarMobilePrimaryMenu.displayName = 'NavbarMobilePrimaryMenu';

export default NavbarMobilePrimaryMenu;
