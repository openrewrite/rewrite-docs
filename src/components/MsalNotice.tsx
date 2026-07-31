import React from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import styles from './MsalNotice.module.css';

interface MsalNoticeProps {
  /** Full `groupId:artifactId` of the source-available module this guide depends on. */
  module: string;
}

/**
 * Flags that a guide depends on a Moderne Source Available License module, which the
 * Code Genome Project serves only to Moderne customers. Used by the popular recipe
 * guides that pull in rewrite-spring, rewrite-migrate-java, rewrite-static-analysis,
 * rewrite-testing-frameworks, or rewrite-logging-frameworks.
 */
export default function MsalNotice({module}: MsalNoticeProps): JSX.Element {
  return (
    <Admonition
      type="info"
      title={
        <span className={styles.title}>This module requires a Moderne subscription</span>
      }>
      <p>
        <code>{module}</code> is published under the{' '}
        <Link to="/licensing/openrewrite-licensing#moderne-source-available-license">
          Moderne Source Available License
        </Link>
        , not Apache 2.0. The Code Genome Project serves source-available modules to Moderne
        customers only, so a build authenticating with a personal token gets{' '}
        <code>403 Forbidden</code> for this module. That license does still grant you the right to
        use and modify the recipes, so if you aren't a Moderne customer you can build the module
        from source and publish it to your own artifact repository.
      </p>
    </Admonition>
  );
}
