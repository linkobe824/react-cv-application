// import PersonIcon from '@mui/icons-material/Person'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import ArticleIcon from '@mui/icons-material/Article'

export const SidebarList = [
  {
    title: 'Resume',
    icon: <ArticleIcon />,
    ref: '/resume',
  },
  {
    title: 'Personal Information',
    icon: <ContactMailIcon />,
    ref: '/personal-info',
  },
  {
    title: 'Academic',
    icon: <SchoolIcon />,
    ref: '/academic',
  },
  {
    title: 'Experience',
    icon: <WorkIcon />,
    ref: '/experience',
  },
]
