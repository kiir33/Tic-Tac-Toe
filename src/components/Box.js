import React from 'react'

function Box({ item, pos, handleClick }) {
  return (
    <div className="box"
      onClick={e => handleClick(pos)}>
      {item}
    </div>
  )
}

export default Box
