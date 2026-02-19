export interface HelpFile {
  title: string
  filePath: string
  type: 'pdf' | 'md' | 'external'
}

export interface HelpMapping {
  [slug: string]: HelpFile
}

export const helpConfig: HelpMapping = {
  default: {
    title: 'General Admin Tutorial',
    filePath: '/help-files/Admin Tutorial - v2.pdf',
    type: 'pdf',
  },
  admissions: {
    title: 'Admissions System Guide',
    filePath: '/help-files/admission-system-tutorial.md',
    type: 'md',
  },
  pages: {
    title: 'Pages & Layout Management',
    filePath: 'https://docs.google.com/document/d/1gOLvy0FygO6kSTcLOamRs0aGEWRLVXpu4MeopP4PA_c/edit?usp=sharing',
    type: 'md',
  },
  posts: {
    title: 'Bulletin Board Management',
    filePath: 'https://docs.google.com/document/d/1JGFmWN3NiOu3h5gY34S3whUzwrVYJyyzye5SzJH59YY/edit?usp=sharing',
    type: 'md',
  },
  media: {
    title: 'Media Library Guide',
    filePath: 'https://docs.google.com/document/d/1Q19ymB62kdWIVfKL9HlV1XI3Zr8BfZRvWbvWpy09wo0/edit?usp=sharing',
    type: 'pdf',
  },
  users: {
    title: 'User Management',
    filePath: 'https://docs.google.com/document/d/1fX0gX7xcS9mcqeDNUaGnkC2vLWOEpGq_ZI0soKVS19g/edit?usp=sharing',
    type: 'pdf',
  },
  header: {
    title: 'Header Configuration',
    filePath: 'https://docs.google.com/document/d/1N16ENChjKJ46slOnKljqOawKDRhXbyXHTTphvU-k0Zo/edit?usp=sharing',
    type: 'pdf',
  },
  footer: {
    title: 'Footer Configuration',
    filePath: 'https://docs.google.com/document/d/1ieeT0VmvfCBw_BoML4qXtmyyPlB4IsgJt9kHUq6pTm8/edit?usp=sharing',
    type: 'pdf',
  },
  mahabodhiResidentialSchoolLeh: {
    title: 'School Information Settings',
    filePath: '',
    type: 'pdf',
  },
  sidebarTop: {
    title: 'Sidebar Top Configuration',
    filePath: '',
    type: 'pdf',
  },
  sidebarBottom: {
    title: 'Sidebar Bottom Configuration',
    filePath: '',
    type: 'pdf',
  },
  redirects: {
    title: 'Ridirects ',
    filePath: 'https://docs.google.com/document/d/1fNwQpuWBQbM7DV5S0guo2qZt1WvPjSP4qRjC5N4oSaI/edit?usp=sharing',
    type: 'pdf',
  },
  forms: {
    title: 'Forms',
    filePath: 'https://docs.google.com/document/d/1eSIoSzXM0yR9REi4eEawMvPRsnBE0Cp_n61fTrOfJ0o/edit?usp=sharing',
    type: 'pdf',
  },
  formSubmissions: {
    title: 'Form Submissions',
    filePath: 'https://docs.google.com/document/d/1d9KybcLSb5eewCddsI24FxFQ9TDMCS26U2DRDAUlKeI/edit?usp=sharing',
    type: 'pdf',
  },
  search: {
    title: 'Search Results',
    filePath: 'https://docs.google.com/document/d/10LyjCtx-Z79s2B4D8LgQNMQUL94o5_GA6JPlrSZ8BKM/edit?usp=sharing',
    type: 'pdf',
  },
}

/**
 * Helper to get help file based on admin path
 * Path format usually: /admin/collections/admissions or /admin/globals/header
 */
export const getHelpFile = (pathname: string): HelpFile => {
  const parts = pathname.split('/').filter(Boolean)
  // Look for the slug which is usually the last part or second to last
  // e.g., /admin/collections/admissions -> admissions
  // e.g., /admin/globals/header -> header
  
  const slug = parts[parts.length - 1]
  const parent = parts[parts.length - 2]
  
  // Specific match for slug
  if (helpConfig[slug]) {
    return helpConfig[slug]
  }
  
  // Match for parent (edit view)
  if (helpConfig[parent]) {
    return helpConfig[parent]
  }

  return helpConfig.default
}
