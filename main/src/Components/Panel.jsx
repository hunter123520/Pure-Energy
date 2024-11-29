import React from 'react'
import "../Styles/SolarField.css"
const Panel = ({top,left,included,fault}) => {
  return (
    <div className={"panel "+(fault?"fault":(included?"detected":""))} style={{top: top+"px", left: left+"px"}}></div>
  )
}

export default Panel