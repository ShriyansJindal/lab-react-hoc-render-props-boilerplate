import React, { useState } from 'react'

const CommonHoc = (Child) => {
    let logic =()=>{
        let [count,setCount] = useState(0)
        let handleClick=()=>{
            setCount(count+1)
        }

        return <Child handleCount={handleClick} count={count}/>
    }
    return logic

}

export default CommonHoc