import { faEnvelope, faFileAlt, faFileDownload, faFileUpload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions } from "easy-peasy";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Dashboard.css'
import DashboardButton from "./DashboardButton";

const DashboardPage = () => {
    const setContent = useStoreActions((state) => state.setContent)
    let navigate = useNavigate()
    const dashboardData = [
        {
            icon: faFileUpload,
            desc: "Surat keluar",
            link: "Halaman Surat",
            number: "4",
            go: "../surat/list"
        },
        {
            icon: faFileDownload,
            desc: "Surat masuk",
            link: "Halaman Surat",
            number: "4",
            go: "../surat/list"
        },
        {
            icon: faFileAlt,
            desc: "Rekap surat",
            link: "Rekap Surat",
            number: "2",
            go: "../rekap/list"
        },
        {
            icon: faFileAlt,
            desc: "Rekap surat",
            link: "Rekap Surat",
            number: "2",
            go: "../rekap/list"
        }
    ]
    return(
        <>
            <div className="bannerNotification">
            </div>    
            <div className="buttonContainer">
                {dashboardData.map((data, index)=>{
                    console.log(data)
                    return <DashboardButton onClick={() => {
                        setContent(data.link) 
                        navigate(data.go)}} info={data}/>
                })}
            </div>
            <div className="dashboardSplit">
                <div className="suratContainer">
                    a
                </div>
                <div className="suratContainer">
                    a
                </div>
            </div>
        </>
    )
}
export default DashboardPage