import React from 'react'
import CommonRenderProp from './CommonRenderProp'
const LikePostRender = () => {
  return (
    <CommonRenderProp>
                   {
            ({count,handleCount})=>(
                <button onClick={handleCount}>Like Post {count}</button>
            )
        }
    </CommonRenderProp>
  )
}

export default LikePostRender