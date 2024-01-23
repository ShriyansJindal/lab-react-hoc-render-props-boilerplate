import React, {useState} from 'react'

const CommonRenderProp = ({children}) => {
    let [count,setCount]=useState(0)

    let handleCount =()=>{
        setCount(prev => prev+1)
    }
  return children({count,handleCount})
}

export default CommonRenderProp