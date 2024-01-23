import React from 'react'
import CommonHoc from './CommonHoc'

const LikePostHoc = ({handleCount,count}) => {
  return (
    <button onClick={handleCount}>Like Post {count}</button>
  )
}

export default CommonHoc(LikePostHoc)