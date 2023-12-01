import paragraphClass from '../css/ParagraphInfo.module.css'

function ParagraphInfo({ children, label }) {
  return (
    <div className={paragraphClass.container}>
      <p>
        {label}: <span>{children}</span>{' '}
      </p>
    </div>
  )
}

export default ParagraphInfo
