import { type FunctionComponent } from 'react';
import Admonition from '@theme-original/Admonition';
import type AdmonitionType from '@theme/Admonition';
import type { WrapperProps } from '@docusaurus/types';
import { processAdmonitionProps } from '@docusaurus/theme-common';

type Props = WrapperProps<typeof AdmonitionType>;

/**
 * Capitalises the generic admonition label — ":::info" renders "Info", not
 * "info" — while leaving an author's own title exactly as written.
 *
 * Done here rather than the two more obvious ways, both of which fail:
 *
 * - A translation override in i18n/en/code.json is the documented route, but
 *   creating an i18n directory turns on Docusaurus's translation machinery for
 *   the whole site, and the generated recipe-catalog sidebar has duplicate
 *   category labels (Camel x3, Upgrade x2) that then fail the build.
 * - `text-transform: capitalize` cannot be scoped to the generic label. In this
 *   version a custom title renders as a bare text node in the heading, exactly
 *   like the default one, so CSS cannot tell them apart and would re-case
 *   ":::info[Which filters require symbol data]" word by word.
 *
 * Only the props decide it: a title supplied by the author, whether as
 * ":::info[Title]" or the legacy mdxAdmonitionTitle child, is passed through
 * untouched. The label is injected only when there is none.
 */
const LABELS: Record<string, string> = {
  note: 'Note',
  tip: 'Tip',
  info: 'Info',
  warning: 'Warning',
  danger: 'Danger',
  caution: 'Caution',
  // Legacy aliases, which the theme titles with hardcoded lowercase strings.
  secondary: 'Secondary',
  important: 'Important',
  success: 'Success',
};

const AdmonitionWrapper: FunctionComponent<Props> = (props) => {
  // Same extraction the theme runs, so a legacy title in children is seen too.
  const { title, type } = processAdmonitionProps(props);
  if (title) {
    return <Admonition {...props} />;
  }

  const label = LABELS[type as string];
  return label ? <Admonition {...props} title={label} /> : <Admonition {...props} />;
};

AdmonitionWrapper.displayName = 'AdmonitionWrapper';

export default AdmonitionWrapper;
