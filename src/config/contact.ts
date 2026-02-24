import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { Contact } from 'types'

export const resumeContact: Contact = {
  name: 'Resume',
  url: '',
  faIcon: faFileLines,
}

export const contacts: Contact[] = [
  {
    name: 'Github',
    url: 'https://github.com/svenne5',
    faIcon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/svenne-dot5/',
    faIcon: faLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:sebastienvenne5@gmail.com',
    faIcon: faEnvelope,
  },
  resumeContact,
]
