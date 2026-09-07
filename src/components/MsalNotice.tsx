import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './MsalNotice.module.css';

interface MsalNoticeProps {
  /** Full `groupId:artifactId` of each source-available module this guide depends on. */
  module: string | string[];
}

/**
 * Flags that a guide depends on source-available modules, which the Code Genome
 * Project serves to Moderne customers only.
 */
export default function MsalNotice({module}: MsalNoticeProps): JSX.Element {
  const modules = Array.isArray(module) ? module : [module];
  const plural = modules.length > 1;
  const noun = plural ? 'modules' : 'module';
  return (
    <Admonition
      type="info"
      title={
        <span className={styles.title}>Source available recipe {noun}</span>
      }>
      <p>
        This guide uses
        {modules.map((name, i) => (
          <React.Fragment key={name}>
            {i === 0 ? ' ' : i === modules.length - 1 ? ' and ' : ', '}
            <code>{name}</code>
          </React.Fragment>
        ))}
        {plural ? ', Moderne ' : ', a Moderne '}
        <a href="https://docs.moderne.io/licensing/moderne-source-available-license/">
          source-available
        </a>{' '}
        recipe {noun}. Compiled binaries are only available to Moderne customers, hosted at the{' '}
        <a href="https://codegenomeproject.org/recipes">Code Genome Project</a>. For non-commercial
        use you can compile and publish the recipe {noun} locally to use the recipes.
      </p>
    </Admonition>
  );
}
