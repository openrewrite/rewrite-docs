/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * EJECTED from @docusaurus/theme-classic.
 * Changes from the original: plain text links with an inline arrow, replacing
 * the default label/sublabel pair that this site had styled as pill buttons.
 */
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocPaginator';
import clsx from 'clsx';
import { type FunctionComponent } from 'react';
import styles from './styles.module.css';

const DocPaginator: FunctionComponent<Props> = ({ previous, next, className }) => (
  <nav
    className={clsx(styles.paginationNav, 'pagination-nav', className)}
    aria-label={translate({
      id: 'theme.docs.paginator.navAriaLabel',
      message: 'Docs pages',
      description: 'The ARIA label for the docs pagination',
    })}
  >
    {previous && (
      <Link className={clsx(styles.paginationLink, styles.prev)} to={previous.permalink}>
        <span className={styles.arrow}>←</span> {previous.title}
      </Link>
    )}
    {next && (
      <Link className={clsx(styles.paginationLink, styles.next)} to={next.permalink}>
        {next.title} <span className={styles.arrow}>→</span>
      </Link>
    )}
  </nav>
);

DocPaginator.displayName = 'DocPaginator';

export default DocPaginator;
