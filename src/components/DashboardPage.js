import { faEnvelope, faFileAlt, faFileDownload, faFileUpload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../assets/css/Dashboard.css'
import DashboardButton from "./DashboardButton";

const DashboardPage = () => {
    const dashboardData = [
        {
            icon: faFileUpload,
            desc: "Surat keluar",
            number: "4"
        },
        {
            icon: faFileDownload,
            desc: "Surat masuk",
            number: "4"
        },
        {
            icon: faFileAlt,
            desc: "Rekap surat",
            number: "2"
        }
    ]
    return(
        <div className="buttonContainer">
            {dashboardData.map((data, index)=>{
                console.log(data)
                return <DashboardButton info={data}/>
            })}
        </div>
    )
}
export default DashboardPage