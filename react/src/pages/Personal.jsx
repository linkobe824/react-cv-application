import Input from '../components/Input'
import inputClasses from '../css/Inputs.module.css'
import Button from '../components/Button'
import { useEffect } from 'react'

// import '../css/Pages.css'

function Personal({ handleInputChange, ...props }) {
  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'))
    if (personalInfo) {
      props.setPersonalInfo(personalInfo)
    }
  }, [])

  function saveToLocal() {
    localStorage.setItem('personalInfo', JSON.stringify(props.personalInfo))
  }

  return (
    <form
      action=''
      onSubmit={saveToLocal}
    >
      <div className={inputClasses.pairInputContainer}>
        <Input
          id='first-name'
          label='First Name'
          type='text'
          name='firstName'
          value={props.personalInfo.firstName}
          page='personal'
          handleChange={handleInputChange}
        />
        <Input
          id='last-name'
          label='Last Name'
          type='text'
          name='lastName'
          value={props.personalInfo.lastName}
          page='personal'
          handleChange={handleInputChange}
        />
      </div>
      <div className={inputClasses.pairInputContainer}>
        <Input
          id='email'
          label='Email'
          type='email'
          name='email'
          value={props.personalInfo.email}
          page='personal'
          handleChange={handleInputChange}
        />
        <Input
          id='phone-number'
          label='Phone Number'
          type='text'
          name='phoneNumber'
          value={props.personalInfo.phoneNumber}
          page='personal'
          handleChange={handleInputChange}
        />
      </div>
      <Input
        id='address'
        label='Address'
        type='text'
        name='address'
        value={props.personalInfo.address}
        page='personal'
        handleChange={handleInputChange}
      />
      <Button type='submit'>Save</Button>
    </form>
  )
}

export default Personal
