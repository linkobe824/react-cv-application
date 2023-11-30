import Input from '../components/Input'
import inputClasses from '../css/Inputs.module.css'
import Button from '../components/Button'

// import '../css/Pages.css'

function Personal() {
  return (
    <form action=''>
      <div className={inputClasses.pairInputContainer}>
        <Input
          id='first-name'
          label='First Name'
          type='text'
        />
        <Input
          id='last-name'
          label='Last Name'
          type='text'
        />
      </div>
      <div className={inputClasses.pairInputContainer}>
        <Input
          id='email'
          label='Email'
          type='email'
        />
        <Input
          id='phone-number'
          label='Phone Number'
          type='tel'
        />
      </div>
      <div className={inputClasses.onlyInput}>
        <Input
          id='address'
          label='Address'
          type='text'
        />
      </div>
      <Button>Save</Button>
    </form>
  )
}

export default Personal
