import Academic from '../pages/Academic.jsx'
import Personal from '../pages/Personal.jsx'
import Home from '../pages/Home.jsx'
import Resume from '../pages/Resume.jsx'
import Experience from '../pages/Experience.jsx'
import { useState } from 'react'

function Switch({ component }) {
  const [personalInfo, setPersonalInfo] = useState({})
  const [academicInfo, setAcademicInfo] = useState([])
  const [experience, setExperience] = useState([])

  let Component
  switch (component) {
    case '/academic':
      Component = Academic
      break
    case '/personal-info':
      Component = Personal
      break
    case '/experience':
      Component = Experience
      break
    case '/resume':
      Component = Resume
      break
    default:
      Component = Home
      break
  }

  return (
    <div>
      <Component />
    </div>
  )
}

export default Switch
