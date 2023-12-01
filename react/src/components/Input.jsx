import classes from '../css/Inputs.module.css'

export default function Input({ label, handleChange, ...props }) {
  return (
    <p className={classes.inputContainer}>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...props}
        onChange={(e) => handleChange(e, props.name, props.page)}
      />
    </p>
  )
}
