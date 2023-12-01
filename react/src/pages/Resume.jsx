import '../css/Pages.css'
import ParagraphInfo from '../components/ParagraphInfo'

function Resume() {
  const personalInfo = JSON.parse(localStorage.getItem('personalInfo'))
  const fullName = `${personalInfo['firstName']} ${personalInfo['lastName']}`

  return (
    <>
      <ParagraphInfo label='Name'>{fullName}</ParagraphInfo>
      <ParagraphInfo label='Email'>{personalInfo['email']}</ParagraphInfo>
      <ParagraphInfo label='Phone'>{personalInfo['phoneNumber']}</ParagraphInfo>
      <ParagraphInfo label='Address'>{personalInfo['address']}</ParagraphInfo>
    </>
  )
}

export default Resume
