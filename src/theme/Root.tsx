import { type ReactNode, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

/**
 * Publishes the current route on <html> as data-route.
 *
 * Docusaurus's own per-doc classes (docs-doc-id-*) only appear in a production
 * build — the dev server ships a bare <html lang="en"> — so styling a single
 * page through them looks right when deployed and wrong while developing. This
 * gives one hook that behaves identically in both.
 */
export default function Root({ children }: { children: ReactNode }): ReactNode {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-route', pathname);
  }, [pathname]);

  return <>{children}</>;
}
