import { type FunctionComponent, useMemo } from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import { useWindowSize } from '@docusaurus/theme-common';
import { filterSidebarItemsBySection } from './filterUtils';

type Props = WrapperProps<typeof DocSidebarItemsType>;

/**
 * Scopes the sidebar to the section selected in the secondary nav.
 *
 * Desktop only: the section nav is hidden below 997px, so scoping there would
 * strand a reader in one section with no way out. Both sidebars render through
 * this component at level 1, so the viewport is the only thing separating them —
 * useWindowSize is what Docusaurus itself uses to pick between them.
 *
 * Only the top level is filtered; nested items arrive at level 2+ already inside
 * the chosen section.
 */
const DocSidebarItemsWrapper: FunctionComponent<Props> = (props) => {
  const location = useLocation();
  const windowSize = useWindowSize();

  const isTopLevel = (props.level ?? 0) <= 1;
  const shouldScope = isTopLevel && windowSize !== 'mobile';

  // Memoized: DocSidebarItems is memo()'d on items identity, so a fresh array
  // each render would defeat it for every top-level category.
  const items = useMemo(
    () => (shouldScope ? filterSidebarItemsBySection(props.items, location.pathname) : props.items),
    [shouldScope, props.items, location.pathname],
  );

  return <DocSidebarItems {...props} items={items} />;
};

DocSidebarItemsWrapper.displayName = 'DocSidebarItemsWrapper';

export default DocSidebarItemsWrapper;
