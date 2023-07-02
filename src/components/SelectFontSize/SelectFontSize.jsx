import React from 'react'

function SelectFontSize({handleFontSize}) {
  return (
    <select name="SelectFontSize" id="SelectFontSize" onChange={handleFontSize}>
        <option value="10px">10 Pixels</option>
        <option value="20px">20 Pixels</option>
        <option value="30px">30 Pixels</option>
    </select>
  )
}

export default SelectFontSize