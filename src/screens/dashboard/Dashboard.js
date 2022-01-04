import React, { useState } from "react";
import '../../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faBars, faEnvelope, faFileAlt, faFilePdf, faQrcode, faQuestion } from "@fortawesome/free-solid-svg-icons";

import SideButton from "../../components/sidebarButtons";
import ArchV from "../../assets/img/ArchV.png"
import HalamanSurat from "../../components/halamanSurat";
import DashboardPage from "../../components/DashboardPage";
import { Link } from "react-router-dom";
import DetailSurat from "../../components/detailSurat";
import RekapSurat from "./RekapSurat";
import {DocumentForm, UserForm} from "../../components/Form";

const Dashboard = () => {
    const halamanInfo1 = {
        title: "Halaman Surat"
    }
    const collumn1 = {
        penerima: "Penerima",
        tanggal: "Tanggal",
        suratNama: "Surat",
        grade: "Grade",
    }
    const dataSurat1 = [
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 1,
            status: "Keluar",
            penerima: "Orang tua siswa",
            tanggal: "2021-06-08 13:10:14",
            document: "Surat pemberitahuan pembagian rapot.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 2,
            status: "Keluar",
            penerima: "PT Inovindo Digital Media",
            tanggal: "2021-03-21 15:16:11",
            document: "Pengajuan peserta prakerin 2021.PDF",
            link: "#",
            grade: "Non Public"
        },
        {
            id: 3,
            status: "Keluar",
            penerima: "Universitas ITB",
            tanggal: "2021-03-13 17:14:13",
            document: "Pengumuman penerimaan PPL.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 4,
            status: "Keluar",
            penerima: "Polrestabes Bandung",
            tanggal: "2021-08-30 09:01:10",
            document: "Daftar siswa peserta prakerin 2021.PDF",
            link: "#",
            grade: "Classified"
        }
    ]
    const halamanInfo2 = {
        title: "Rekap Surat"
    }
    const collumn2 = {
        penerima: "Pemegang Hak",
        tanggal: "Jumlah surat",
        suratNama: "Surat masuk",
        grade: "Surat keluar",
    }
    const dataSurat2 = [
        {
            id: 1,
            status: "Keluar",
            penerima: "Guru",
            tanggal: "10",
            document: "6",
            link: "#",
            grade: "4"
        }
    ]

    const buttons = [
        {
            desc: "Dashboard",
            icon: faColumns,
            active: false
        },
        {
            desc: "Halaman Surat",
            icon: faEnvelope,
            active: false
        },
        {
            desc: "Rekap Surat",
            icon: faFileAlt,
            active: false
        },
        {
            desc: "Debug Detail",
            icon: faFilePdf,
            active: false
        },
        {
            desc: "Debug Rekap",
            icon: faQuestion,
            active: false
        },
        {
            desc: "Debug Form Upload",
            icon: faQuestion,
            active: false
        },
        {
            desc: "Debug User",
            icon: faQuestion,
            active: false
        }
    ]
    const [content, setContent] = useState("Dashboard")

    return(
        <div className="main">
            <div className="header">
                <div>
                    <img className="arch" src={ArchV}/>
                </div>
                <Link to="/">
                    <div className="buttonLogin">
                        <p>
                            Log In
                        </p>
                    </div>
                </Link>

            </div>
            <div className="body"> 
                <div className="sidebar">
                    <div className="mainMenu">
                        <div className="sideMainIcon">
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                        <p>
                            Main Menu
                        </p>
                    </div>
                    {
                        buttons.map((button,index)=>{
                            console.log(button)
                            return <SideButton info={button} onClick={()=>{setContent(button.desc)}}/>
                        })
                    }                    
                </div>
                <div className="content">
                    <p className="pageName">{content}</p>
                    {content == "Dashboard" ? <DashboardPage/> : 
                    content == "Halaman Surat" ? <HalamanSurat dataSurat={dataSurat1} halamanInfo={halamanInfo1} collumn={collumn1}/>:
                    content == "Rekap Surat" ? <>
                        <HalamanSurat dataSurat={dataSurat2} halamanInfo={halamanInfo2} collumn={collumn2}/>
                    </> : 
                    content == "Debug Detail" ? <DetailSurat/> : 
                    content == "Debug Rekap" ? <RekapSurat/>: 
                    content == "Debug Form Upload" ? <DocumentForm type={{
                        title: "Upload"
                    }} />:
                    content == "Debug User" ? <UserForm type={{
                        title: "Upload"
                    }} />: <div></div>}
                    <div className="emptySpace"></div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard