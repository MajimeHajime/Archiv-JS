import { faBookmark, faEnvelope, faFileAlt, faFileDownload, faFileUpload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import '../assets/css/Dashboard.css'
import DashboardButton from "./DashboardButton";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
import { getDashboard, getDetail } from "../peasy/api";
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

const DashboardPage = () => {

    const setDashboard = useStoreActions((state) => state.setDashboard)
    const dashboard = useStoreActions((state) => state.dashboard)
    const [masuk, setMasuk] = useState("0")
    const [keluar, setKeluar] = useState("0")
    const [masukData, setMasukData] = useState("")
    const [keluarData, setKeluarData] = useState("")
    const [newData, setNewData] = useState([])
    const setDetail = useStoreActions((state) => state.setDetail)
    const userData = useStoreState((state) => state.userData)
    const [init, setInit] = useState(false)

    const [retensi, setRetensi] = useState([])
    useEffect(()=>{
        console.log("test")
        init ? 
        console.log("")
         :  getDashboard("http://127.0.0.1:8000/api/dashboard", userData.access_levels ? userData.access_levels : "0").then(data => {
             console.log(data.data)
             setMasuk(data.data.masuk)
             setKeluar(data.data.keluar) 
             setMasukData(data.data.masuk_stat)
             setKeluarData(data.data.keluar_stat)
             setNewData(data.data.new)
             setRetensi(data.data.retensi)
             setInit(true)
         console.log(data.data)})
    }, [])

    const setContent = useStoreActions((state) => state.setContent)
    let navigate = useNavigate()
    const dashboardData = [
        {
            icon: faFileUpload,
            desc: "Surat keluar",
            link: "Halaman Surat",
            number: keluar,
            go: "../surat/list"
        },
        {
            icon: faFileDownload,
            desc: "Surat masuk",
            link: "Halaman Surat",
            number: masuk,
            go: "../surat/list"
        },
        {
            icon: faFileAlt,
            desc: "Rekap surat",
            link: "Rekap Surat",
            number: "",
            go: "../rekap/list"
        },
        {
            icon: faFileAlt,
            desc: "About us",
            link: "About us",
            number: "",
            go: "../about"
        }
    ]
    return(
        <>
            <div className="bannerNotification fuckPMargin" onClick={() => (navigate("../about"))}>
                <div className="board2 notific fuckPMargin">
                    <FontAwesomeIcon icon={faBookmark}/>
                    <p className="notif">Hello! Wellcome to Dashboard{userData.name ? ", " +userData.name + "!" : ""} | A R C H V</p>
                </div>

                    <p>Untuk mengenal lebih jauh tentang kami klik disini</p>
            </div>    
            <div className="buttonContainer">
                {dashboardData.map((data, index)=>{
                    console.log(data)
                    return <DashboardButton onClick={() => {
                        setContent(data.link) 
                        navigate(data.go)}} info={data}/>
                })}
            </div>
            <div className="dashboardSplit ">
                <div className="suratContainer stat">
                    <h>
                        Statistik Surat Masuk & Keluar
                    </h>
                    <Line
                    datasetIdKey='id'
                    options={
                        {
                            responsive: true
                        
                        }
                    }
                    data={{
                        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'October', 'November', 'Desember'],
                        datasets: [
                        {
                            label: 'Masuk',
                            data: masukData,
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.4
                        },
                        {
                            label: 'keluar',
                            data: keluarData,
                            fill: false,
                            borderColor: 'rgb(55, 193, 40)',
                            tension: 0.4
                        },
                        ],
                    }}
                    />

                </div>
                <div className="suratContainer">
                    <h>
                        Papan pengumuman
                    </h>
                    <hr/>
                    {
                        retensi.map((data, index) => {
                            console.log(data)
                            return (
                                <div className="board fuckPMargin" onClick={
                                    e => {
                                        console.log(data.id)
                                        getDetail("http://127.0.0.1:8000/api/surats/", data.id).then(data=> {
                                            console.log(data)
                                            setDetail(data.data)}).then(() => navigate("../surat/detail"))
                                    }} >
                                    <p className="yello">(NILAI KEMBALI) </p>
                                    <p>
                                        {data.nama_surat} | {data.tipe == 2 ? "surat masuk" : "surat keluar" } 
                                    </p>
                                </div>
                            )
                            }
                        )
                    }
                    {
                        newData.map((data, index) => {
                            console.log(data)
                            return (
                                <div className="board fuckPMargin" onClick={
                                    e => {
                                        console.log(data.id)
                                        getDetail("http://127.0.0.1:8000/api/surats/", data.id).then(data=> {
                                            console.log(data)
                                            setDetail(data.data)}).then(() => navigate("../surat/detail"))
                                    }} >
                                    <p className="green">(NEW) </p>
                                    <p>
                                        {data.nama_surat} | {data.tipe == 2 ? "surat masuk" : "surat keluar" } 
                                    </p>
                                </div>
                            )
                            }
                        )
                    }
                    
                
                </div>
            </div>
        </>
    )
}
const Links = (title) => {
    return(
        <p>
            {title}
        </p>
    )
}
export default DashboardPage