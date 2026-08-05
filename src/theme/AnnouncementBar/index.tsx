import React, {useCallback, useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

// Mirrored by the head script in docusaurus.config.ts, which sets these attributes before
// hydration so nothing flashes. The key is specific to this notice, so new copy re-shows
// the bar to everyone.
const NOTICE_BAR_STORAGE_KEY = 'code-genome-project-announcement-dismissed';
const NOTICE_BAR_DISMISSED_ATTRIBUTE = 'data-notice-bar-dismissed';
// Read by custom.css to offset the sticky navbar while a bar is showing.
const BAR_VISIBLE_ATTRIBUTE = 'data-bar-visible';

export default function AnnouncementBar(): JSX.Element | null {
  const {pathname} = useLocation();
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();
  const [noticeClosed, setNoticeClosed] = useState(false);

  // The recipe-catalog bar only belongs on /recipes; elsewhere we show the Code Genome
  // Project notice. Recipe pages already carry that guidance inline (see RunRecipe).
  const onRecipes = pathname.startsWith('/recipes');
  const barVisible = onRecipes ? isActive : !noticeClosed;

  // The server can't read localStorage, so a previous dismissal is picked up after
  // mount. Until then the head script's attribute keeps the first paint correct.
  useEffect(() => {
    try {
      if (localStorage.getItem(NOTICE_BAR_STORAGE_KEY) === 'true') {
        setNoticeClosed(true);
      }
    } catch {
      // localStorage may be unavailable (e.g. private mode); ignore.
    }
  }, []);

  // Client-side navigation doesn't re-run the head script, and the two bars live on
  // different routes, so the navbar offset has to be re-evaluated on every route change.
  useEffect(() => {
    const html = document.documentElement;
    if (barVisible) {
      html.setAttribute(BAR_VISIBLE_ATTRIBUTE, 'true');
    } else {
      html.removeAttribute(BAR_VISIBLE_ATTRIBUTE);
    }
  }, [barVisible]);

  const closeNotice = useCallback(() => {
    try {
      localStorage.setItem(NOTICE_BAR_STORAGE_KEY, 'true');
      document.documentElement.setAttribute(NOTICE_BAR_DISMISSED_ATTRIBUTE, 'true');
    } catch {
      // localStorage may be unavailable (e.g. private mode); ignore.
    }
    setNoticeClosed(true);
  }, []);

  if (!onRecipes) {
    return noticeClosed ? null : <NoticeAnnouncementBar onClose={closeNotice} />;
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

// Dismissal is tracked separately from Docusaurus's single-bar state so closing this
// never hides the recipe-catalog bar (and vice versa).
function NoticeAnnouncementBar({onClose}: {onClose: () => void}): JSX.Element {
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
        onClick={onClose}
        className={styles.announcementBarClose}
      />
    </div>
  );
}
