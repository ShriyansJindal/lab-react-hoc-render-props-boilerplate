import React from 'react'
import CommonHoc from './CommonHoc'

const Likeimagehoc = ({handleCount,count}) => {
  return (
    // <div>Likeimagehoc</div>
    <button onClick={handleCount}>Like Image {count}</button>
  )
}

export default CommonHoc(Likeimagehoc)