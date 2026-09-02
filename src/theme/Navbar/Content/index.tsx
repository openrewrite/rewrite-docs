/**
 * Navbar content.
 *
 * Three zones: logo left, search and colour-mode toggle centred, external links
 * right. Matches the layout of docs.moderne.io. Section navigation lives in
 * <SecondaryNav> (see Navbar/Layout), not here.
 */
import Link from '@docusaurus/Link';
import { type FunctionComponent, type ReactNode } from 'react';
import clsx from 'clsx';
import { useThemeConfig, useWindowSize, ThemeClassNames } from '@docusaurus/theme-common';
import { splitNavbarItems } from '@docusaurus/theme-common/internal';
import type { Props as NavbarItemConfig } from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import IconExternalLink from '@theme/Icon/ExternalLink';
import SearchBar from '@theme/SearchBar';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';

/**
 * External destinations, desktop only.
 *
 * Read from themeConfig.navbar.items rather than a second list: the mobile
 * drawer renders those same items through Docusaurus's own path, and two
 * hand-synced copies would let the two navs disagree silently.
 */
type ExternalItem = { href: string; label: string };

/** themeConfig items are a union of many shapes; only plain href+label links
 *  belong in this row. */
function isExternalItem(item: NavbarItemConfig): item is NavbarItemConfig & ExternalItem {
  const candidate = item as Partial<ExternalItem>;
  return typeof candidate.href === 'string' && typeof candidate.label === 'string';
}

const ExternalNavLinks: FunctionComponent<{ items: NavbarItemConfig[] }> = ({ items }) => (
  <div className={styles.externalLinks}>
    {items.filter(isExternalItem).map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={styles.externalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.label}
        <IconExternalLink width={10} height={10} />
      </Link>
    ))}
  </div>
);

ExternalNavLinks.displayName = 'ExternalNavLinks';

interface NavbarContentLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

const NavbarContentLayout: FunctionComponent<NavbarContentLayoutProps> = ({ left, center, right }) => (
  <div className={clsx('navbar__inner', styles.navbarInner)}>
    <div
      className={clsx(ThemeClassNames.layout.navbar.containerLeft, 'navbar__items', styles.navbarLeft)}
    >
      {left}
    </div>
    {center && <div className={styles.navbarCenter}>{center}</div>}
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.containerRight,
        'navbar__items navbar__items--right',
        styles.navbarRight,
      )}
    >
      {right}
    </div>
  </div>
);

NavbarContentLayout.displayName = 'NavbarContentLayout';

const NavbarContent: FunctionComponent = () => {
  // TODO from upstream theme-classic: temporary casting until ThemeConfig improves.
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];
  const [, rightItems] = splitNavbarItems(items);
  const windowSize = useWindowSize();

  // One instance, placed differently rather than rendered twice: each SearchBar
  // mounts its own Cmd+K listener, so a second makes the handler fire twice. No
  // <NavbarSearch> wrapper — its class pins the field over the toggle below 997px.
  const controls = (
    <>
      <SearchBar />
      <NavbarColorModeToggle className={styles.colorModeToggle} />
    </>
  );
  const isMobile = windowSize === 'mobile';

  return (
    <NavbarContentLayout
      left={
        <>
          <NavbarMobileSidebarToggle />
          <div className={styles.logoGroup}>
            <NavbarLogo />
          </div>
        </>
      }
      center={isMobile ? null : controls}
      right={
        <>
          <ExternalNavLinks items={rightItems} />
          {isMobile && controls}
        </>
      }
    />
  );
};

NavbarContent.displayName = 'NavbarContent';

export default NavbarContent;
