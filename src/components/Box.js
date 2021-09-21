import React from 'react'

function Box({ item, pos, handleClick }) {
  return (
    <div className="fs-1 btn btn-outline-secondary col-4 h-100"
      onClick={e => handleClick(pos)}>
      {item}
    </div>
  )
}

export default Box
