export default function Input({ label, ...props }) {
  return (
    <p>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </p>
  )
}
