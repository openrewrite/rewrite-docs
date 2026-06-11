import React, {useCallback, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

// Kept in sync with the inline head script in docusaurus.config.ts, which sets
// the matching <html> attribute before hydration so the event bar doesn't flash
// for visitors who have already dismissed it.
const EVENT_BAR_STORAGE_KEY = 'code-remix-summer-announcement-dismissed';
const EVENT_BAR_DISMISSED_ATTRIBUTE = 'data-event-bar-dismissed';

export default function AnnouncementBar(): JSX.Element | null {
  const {pathname} = useLocation();
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();

  // The recipe-catalog bar only belongs on /recipes pages; everywhere else we
  // promote the Code Remix Summer event instead.
  if (!pathname.startsWith('/recipes')) {
    return <EventAnnouncementBar />;
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
function EventAnnouncementBar(): JSX.Element | null {
  const [closed, setClosed] = useState(false);

  const handleClose = useCallback(() => {
    try {
      localStorage.setItem(EVENT_BAR_STORAGE_KEY, 'true');
      document.documentElement.setAttribute(
        EVENT_BAR_DISMISSED_ATTRIBUTE,
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
    <div className={styles.eventBar} role="banner">
      <div className={styles.announcementBarPlaceholder} />
      <div className={styles.eventBarContent}>
        <strong>Code Remix Summer</strong> is here — 10 live sessions,
        Jun&nbsp;12–Aug&nbsp;21.{' '}
        <a
          href="https://www.moderne.ai/events/code-remix-summer"
          target="_blank"
          rel="noopener">
          Register for the broadcasts →
        </a>
      </div>
      <AnnouncementBarCloseButton
        onClick={handleClose}
        className={styles.announcementBarClose}
      />
    </div>
  );
}
