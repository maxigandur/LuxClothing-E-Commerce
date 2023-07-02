import React from 'react'

function Select({handleColor}) {
  return (
    <select name="navColor" id="navColor" onChange={handleColor}>
        <option value="#fff">Default</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>

    </select>
   
  )
}

export default Select