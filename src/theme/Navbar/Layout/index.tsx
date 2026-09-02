/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * EJECTED from @docusaurus/theme-classic.
 * Changes from the original:
 * - Wrapped the nav in a fixed .navbarWrapper holding the announcement bar,
 *   the navbar and the section nav as one block
 * - Rendered <SecondaryNav> below the primary navbar (desktop only)
 */
import { type ComponentProps, type FunctionComponent, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { ThemeClassNames, useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';
// Imported by path, not via @theme: the alias resolves to Docusaurus's own
// module declaration, which only knows about the default export.
import { AnnouncementBarInline } from '@site/src/theme/AnnouncementBar';
import { SecondaryNav } from '@site/src/components/SecondaryNav';
import { primarySections, releaseSections } from '@site/src/config/navSections';
import styles from './styles.module.css';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div role="presentation" {...props} className={clsx('navbar-sidebar__backdrop', props.className)} />
  );
}

export interface NavbarLayoutProps extends Props {
  readonly className?: string;
}

/**
 * Publishes the header's real height as --docs-header-height.
 *
 * The header is position:fixed, so everything below it is offset by that
 * variable (see the header offsets in custom.css). Its height is not a constant
 * we can write down: the announcement bar has no fixed height on mobile, where
 * its copy wraps to two or three lines depending on width and font loading. A
 * hardcoded reserve is wrong for exactly the viewports hardest to check, so
 * measure instead — this is correct at any width, any copy length, and any
 * number of rows.
 */
function useHeaderHeight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const publish = () =>
      document.documentElement.style.setProperty('--docs-header-height', `${el.offsetHeight}px`);

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

const NavbarLayout: FunctionComponent<NavbarLayoutProps> = ({ children, className }) => {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const wrapperRef = useHeaderHeight();

  return (
    <div className={styles.navbarWrapper} ref={wrapperRef}>
      <AnnouncementBarInline />
      <nav
        ref={navbarRef}
        aria-label={translate({
          id: 'theme.NavBar.navAriaLabel',
          message: 'Main',
          description: 'The ARIA label for the main navigation',
        })}
        className={clsx(
          ThemeClassNames.layout.navbar.container,
          'navbar',
          'navbar--fixed-top',
          hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
          {
            'navbar--dark': style === 'dark',
            'navbar--primary': style === 'primary',
            'navbar-sidebar--show': mobileSidebar.shown,
          },
          className,
        )}
      >
        {children}
        <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <NavbarMobileSidebar />
      </nav>
      <SecondaryNav sections={primarySections} menuLabel="Releases" menuItems={releaseSections} />
    </div>
  );
};

NavbarLayout.displayName = 'NavbarLayout';

export default NavbarLayout;
