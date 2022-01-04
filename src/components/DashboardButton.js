import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/css/Dashboard.css"

const DashboardButton = (props) => {
    const info = props.info
    return(
        <div className="cardOut">
            <div className="cardInside">
                <div className="cardInfo">
                    <p className="cardNumber">
                        {info.number}
                    </p>
                    <p>
                        {info.desc}
                    </p>
                </div>
                <FontAwesomeIcon className="cardIcon" icon={info.icon}/>
            </div>
            <div className="classBottom">
                <p>
                    More Info
                </p>
            </div>
        </div>
    )
}

export default DashboardButton