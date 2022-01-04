import React, { useState } from "react";
import '../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideButton= (props) =>{
    console.log(props)
    const info = props.info
    return(
        <div className="sideButton" onClick={props.onClick}>
            <div className="sideIcon">
                <FontAwesomeIcon icon={info.icon}/>
            </div>
            <p>{info.desc}</p>
        </div>
    )
    
}

export default SideButton