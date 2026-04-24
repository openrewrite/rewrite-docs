import React from 'react';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

export default function AnnouncementBar(): JSX.Element | null {
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();
  const {pathname} = useLocation();
  if (!isActive || !pathname.startsWith('/recipes')) {
    return null;
  }
  const {isCloseable} = announcementBar!;
  return (
    <div
      className={styles.announcementBar}
      role="banner">
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
