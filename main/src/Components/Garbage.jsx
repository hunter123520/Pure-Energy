import React,{useEffect} from 'react'
import garbageimg from "../Images/garbage.png"
const Garbage = ({x,y}) => {
 
  return (
    <div className='position-relative'>
    <img className='position-absolute drone' src={garbageimg} alt="" style={{
      transform: `translate(${x}px, ${y}px)`,
      // top:position.y+"px",left:position.x+"px",
      width:"35px",height:"35px"}}
      />
       
    </div>
  )
}

export default Garbage