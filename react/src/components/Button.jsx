import buttonClasses from '../css/Button.module.css'

export default function Button({ children, ...props }) {
  return (
    <p className={buttonClasses.container}>
      <button {...props}>{children}</button>
    </p>
  )
}
