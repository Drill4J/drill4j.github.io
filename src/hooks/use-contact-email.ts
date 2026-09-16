import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/** Public contact email from `customFields.contactEmail` in docusaurus.config.js */
export function useContactEmail(): string {
  const { siteConfig } = useDocusaurusContext();
  return String(siteConfig.customFields?.contactEmail ?? '');
}

/** Build a mailto href; optional subject is URI-encoded. */
export function useMailtoHref(subject?: string): string {
  const email = useContactEmail();
  if (!email) {
    return '#';
  }
  if (!subject) {
    return `mailto:${email}`;
  }
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
