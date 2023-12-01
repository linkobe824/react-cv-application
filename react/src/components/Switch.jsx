import Academic from '../pages/Academic.jsx'
import Personal from '../pages/Personal.jsx'
import Home from '../pages/Home.jsx'
import Resume from '../pages/Resume.jsx'
import Experience from '../pages/Experience.jsx'
import { useState } from 'react'

function Switch({ component }) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  })
  const [academicInfo, setAcademicInfo] = useState([])
  const [experience, setExperience] = useState([])

  let Component
  let componentProps
  switch (component) {
    case '/academic':
      Component = Academic
      break
    case '/personal-info':
      Component = Personal
      componentProps = { personalInfo, setPersonalInfo }
      break
    case '/experience':
      Component = Experience
      break
    case '/resume':
      Component = Resume
      componentProps = { personalInfo }
      break
    default:
      Component = Home
      break
  }

  function handleStateUpdate(e, attribute = null, page) {
    switch (page) {
      case 'personal':
        setPersonalInfo((prevPeresonalInfo) => ({
          ...prevPeresonalInfo,
          [attribute]: e.target.value,
        }))
        break
    }
  }

  return (
    <div>
      <Component
        {...componentProps}
        handleInputChange={handleStateUpdate}
      />
    </div>
  )
}

export default Switch
