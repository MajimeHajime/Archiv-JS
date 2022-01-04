import { faEnvelope, faFileAlt, faFileDownload, faFileUpload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions } from "easy-peasy";
import React from "react";
import '../assets/css/Dashboard.css'
import DashboardButton from "./DashboardButton";

const DashboardPage = () => {
    const setContent = useStoreActions((state) => state.setContent)
    const dashboardData = [
        {
            icon: faFileUpload,
            desc: "Surat keluar",
            link: "Halaman Surat",
            number: "4"
        },
        {
            icon: faFileDownload,
            desc: "Surat masuk",
            link: "Halaman Surat",
            number: "4"
        },
        {
            icon: faFileAlt,
            desc: "Rekap surat",
            link: "Rekap Surat",
            number: "2"
        }
    ]
    return(
        <div className="buttonContainer">
            {dashboardData.map((data, index)=>{
                console.log(data)
                return <DashboardButton onClick={() => {setContent(data.link)}} info={data}/>
            })}
        </div>
    )
}
export default DashboardPage