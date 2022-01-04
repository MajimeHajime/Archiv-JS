import React, { useState } from "react";
import '../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStoreState } from "easy-peasy";

const SideButton= (props) =>{
    const content = useStoreState((state) => state.dashboardContent)
    const info = props.info
    return(
        <div className={content === info.desc? "sideButton activeButton" :"sideButton"} onClick={props.onClick}>
            <div className="sideIcon">
                <FontAwesomeIcon icon={info.icon}/>
            </div>
            <p>{info.desc}</p>
        </div>
    )
    
}

export default SideButton