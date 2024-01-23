import React from 'react'
import CommonRenderProp from './CommonRenderProp'
const LikeImageRender = () => {
  return (
    <CommonRenderProp>
           {
            ({count,handleCount})=>(
                <button onClick={handleCount}>Like Image {count}</button>
            )
        }
    </CommonRenderProp>
  )
}

export default LikeImageRender