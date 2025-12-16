import React from 'react'

const Button = ({ index, value, handleSelection }) => {
  return (
    <button onClick={() => handleSelection(index)}>{ value } </button>
  )
}

export default Button