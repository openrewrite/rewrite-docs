import React, {useCallback, useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import styles from './styles.module.css';

// Mirrored by the head script in docusaurus.config.ts, which sets these attributes before
// hydration so nothing flashes. The key is specific to this notice, so new copy re-shows
// the bar to everyone.
const NOTICE_BAR_STORAGE_KEY = 'code-genome-project-announcement-dismissed';
const NOTICE_BAR_DISMISSED_ATTRIBUTE = 'data-notice-bar-dismissed';

/**
 * Renders nothing in Docusaurus's default slot.
 *
 * Note that `themeConfig.announcementBar` is not rendered either: the only bar is
 * NoticeAnnouncementBar below. To announce something else, change its copy and
 * NOTICE_BAR_STORAGE_KEY so people who dismissed the old notice see the new one.
 *
 * The header — bar, navbar, section nav — is one fixed block built in
 * Navbar/Layout, and the bar is rendered there by AnnouncementBarInline. If
 * this also rendered, two bars would mount: they would overlap at the top of
 * the page while the default one still occupied its height in the document
 * flow, leaving a gap the height of the bar below the header.
 */
export default function AnnouncementBar(): JSX.Element | null {
  return null;
}

/** The bar itself, mounted inside the fixed header stack by Navbar/Layout. */
export function AnnouncementBarInline(): JSX.Element | null {
  const [noticeClosed, setNoticeClosed] = useState(false);

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

  const closeNotice = useCallback(() => {
    try {
      localStorage.setItem(NOTICE_BAR_STORAGE_KEY, 'true');
      document.documentElement.setAttribute(NOTICE_BAR_DISMISSED_ATTRIBUTE, 'true');
    } catch {
      // localStorage may be unavailable (e.g. private mode); ignore.
    }
    setNoticeClosed(true);
  }, []);

  return noticeClosed ? null : <NoticeAnnouncementBar onClose={closeNotice} />;
}

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
