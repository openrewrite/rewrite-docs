import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './MsalNotice.module.css';

interface MsalNoticeProps {
  /** Full `groupId:artifactId` of the source-available module this guide depends on. */
  module: string;
}

/**
 * Flags that a guide depends on a source-available module, which the Code Genome
 * Project serves to Moderne customers only.
 */
export default function MsalNotice({module}: MsalNoticeProps): JSX.Element {
  return (
    <Admonition
      type="info"
      title={
        <span className={styles.title}>Source available recipe module</span>
      }>
      <p>
        This guide uses <code>{module}</code>, a Moderne{' '}
        <a href="https://docs.moderne.io/licensing/moderne-source-available-license/">
          source-available
        </a>{' '}
        recipe module. Compiled binaries are only available to Moderne customers, hosted at the{' '}
        <a href="https://codegenomeproject.org/recipes">Code Genome Project</a>. For non-commercial
        use you can compile and publish the recipe module locally to use the recipes.
      </p>
    </Admonition>
  );
}
