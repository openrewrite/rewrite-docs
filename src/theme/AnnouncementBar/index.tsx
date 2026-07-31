import React, {useCallback, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

// Kept in sync with the inline head script in docusaurus.config.ts, which sets
// the matching <html> attribute before hydration so the notice bar doesn't flash
// for visitors who have already dismissed it. The storage key is specific to the
// current notice, so replacing the message re-shows the bar to everyone.
const NOTICE_BAR_STORAGE_KEY = 'code-genome-project-announcement-dismissed';
const NOTICE_BAR_DISMISSED_ATTRIBUTE = 'data-notice-bar-dismissed';

export default function AnnouncementBar(): JSX.Element | null {
  const {pathname} = useLocation();
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();

  // The recipe-catalog bar only belongs on /recipes pages; everywhere else we
  // surface the Code Genome Project notice instead. Recipe pages already carry
  // the same guidance inline in each usage snippet (see components/RunRecipe).
  if (!pathname.startsWith('/recipes')) {
    return <NoticeAnnouncementBar />;
  }

  if (!isActive) {
    return null;
  }

  const {isCloseable} = announcementBar!;
  return (
    <div className={styles.announcementBar} role="banner">
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <AnnouncementBarContent className={styles.announcementBarContent} />
      {isCloseable && (
        <AnnouncementBarCloseButton
          onClick={close}
          className={styles.announcementBarClose}
        />
      )}
    </div>
  );
}

// Independent of Docusaurus's single-bar dismissal state so closing it never
// hides the recipe-catalog bar (and vice versa). Dismissal is persisted to
// localStorage; the inline head script reads it on the next load for no flash.
function NoticeAnnouncementBar(): JSX.Element | null {
  const [closed, setClosed] = useState(false);

  const handleClose = useCallback(() => {
    try {
      localStorage.setItem(NOTICE_BAR_STORAGE_KEY, 'true');
      document.documentElement.setAttribute(
        NOTICE_BAR_DISMISSED_ATTRIBUTE,
        'true',
      );
    } catch {
      // localStorage may be unavailable (e.g. private mode); ignore.
    }
    setClosed(true);
  }, []);

  if (closed) {
    return null;
  }

  return (
    <div className={styles.noticeBar} role="banner">
      <div className={styles.announcementBarPlaceholder} />
      <div className={styles.noticeBarContent}>
        <strong>Recipes are moving from Maven Central to the Code Genome
        Project.</strong>{' '}
        <Link to="/running-recipes/getting-started#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project">
          Configure access
        </Link>{' '}
        to keep releases resolving.
      </div>
      <AnnouncementBarCloseButton
        onClick={handleClose}
        className={styles.announcementBarClose}
      />
    </div>
  );
}
