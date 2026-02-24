import highcodeLogo from 'assets/images/highcode.jpg'
import equisoftLogo from 'assets/images/equisoft.png'
import googleLogo from 'assets/images/google.png'
import concordiaLogo from 'assets/images/concordia-logo.png'
import { ExperienceInfo } from 'types'

export const experiences: ExperienceInfo[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Highcode Tech',
    logo: highcodeLogo,
    date: 'Dec 2022 - Present',
    description: `
- Develop and maintain scalable software solutions in a remote, collaborative environment.
- Contribute to architecture decisions and performance optimization initiatives.
- Build reliable systems designed to support growing business needs.
`,
  },
  {
    title: 'Software Engineer',
    company: 'Equisoft',
    logo: equisoftLogo,
    date: 'Nov 2021 - Nov 2022',
    description: `
- Designed and implemented enterprise-grade applications for financial services clients.
- Improved system efficiency and maintainability through clean architecture practices.
- Collaborated with cross-functional teams in agile development cycles.
`,
  },
  {
    title: 'Software Engineer',
    company: 'Google',
    logo: googleLogo,
    date: 'Jun 2020 - Nov 2021',
    description: `
- Worked on complex distributed systems operating at large scale.
- Contributed to infrastructure-level improvements focused on reliability and performance.
- Supported high-availability systems handling significant production workloads.
`,
  },
]

export const educations: ExperienceInfo[] = [
  {
    title: 'B.S. in Computer Science',
    company: 'Concordia University',
    logo: concordiaLogo,
    logoClass: 'w-8 h-8',
    date: '2017 - 2020',
    description: `
- First Class Honors, Gold Medal, 3.97 GPA
- Full scholarship with a monthly allowance
- Achieved a Certificate of Academic Excellence in every academic year.
- Volunteered as a staff member for the Tech Global Summit event.
`,
  },
]
