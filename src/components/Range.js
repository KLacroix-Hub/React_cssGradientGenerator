import React from 'react'

function Range() {

    const reloadNone = e => {
        e.preventDefault();
    }

  return (
    <input type='range'></input>
  )
}

export default Range;