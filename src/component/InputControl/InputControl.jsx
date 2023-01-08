import React from 'react'
import "./InputControl.scss"

const InputControl = ({label, ...props}) => {
  return (
    <div className="input_control">
        {label && <label>{label}</label>}
        <input type="text" {...props} />
    </div>
  )
}

export default InputControl