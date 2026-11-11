import React from 'react'

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={`input-group ${error ? 'has-error' : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-invalid={!!error}
      />
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}

export default Input