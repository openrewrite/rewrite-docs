import { type FunctionComponent } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * Footer.
 *
 * One row: legal and reference links left, social right, over a hairline.
 * Replaces the default Infima footer, which stacked its links above a centred
 * copyright — matching the treatment on docs.moderne.io.
 *
 * Icons are inline rather than from an icon package: three glyphs used once
 * each do not justify a dependency, and inline SVG inherits currentColor.
 */

const XIcon: FunctionComponent = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon: FunctionComponent = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const YouTubeIcon: FunctionComponent = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

const SOCIAL = [
  { label: 'X', href: 'https://x.com/moderneinc', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/moderneinc', Icon: LinkedInIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@moderne-and-openrewrite', Icon: YouTubeIcon },
];

const LINKS = [
  { label: 'Contact us', href: 'mailto:support@moderne.io' },
  { label: 'Licensing', to: '/licensing/openrewrite-licensing' },
];

const Footer: FunctionComponent = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.links}>
        <span>© Moderne, {new Date().getFullYear()}</span>
        {LINKS.map(({ label, href, to }) =>
          to ? (
            <Link key={label} to={to}>
              {label}
            </Link>
          ) : (
            <Link key={label} href={href}>
              {label}
            </Link>
          ),
        )}
      </div>

      <div className={styles.social}>
        {SOCIAL.map(({ label, href, Icon }) => (
          <Link key={label} href={href} aria-label={label}>
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;
