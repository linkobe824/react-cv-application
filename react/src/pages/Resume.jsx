import '../css/Pages.css'
import ParagraphInfo from '../components/ParagraphInfo'
import Button from '../components/Button'

function Resume() {
  function clear() {
    localStorage.clear()
    location.reload()
  }

  if (window.localStorage.length > 0) {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'))
    const fullName = `${personalInfo['firstName']} ${personalInfo['lastName']}`

    return (
      <>
        <ParagraphInfo label='Name'>{fullName}</ParagraphInfo>
        <ParagraphInfo label='Email'>{personalInfo['email']}</ParagraphInfo>
        <ParagraphInfo label='Phone'>
          {personalInfo['phoneNumber']}
        </ParagraphInfo>
        <ParagraphInfo label='Address'>{personalInfo['address']}</ParagraphInfo>

        <Button onClick={clear}>Clear</Button>
      </>
    )
  } else {
    return <p>There is no information to show.</p>
  }
}

export default Resume
