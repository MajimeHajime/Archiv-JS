import React, { useState } from "react";
import '../../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faBars, faEnvelope, faFileAlt, faFilePdf, faQrcode, faQuestion, faUpload, faUserFriends, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import SideButton from "../../components/sidebarButtons";
import ArchV from "../../assets/img/ArchV.png"
import HalamanSurat from "../../components/halamanSurat";
import DashboardPage from "../../components/DashboardPage";
import { Link } from "react-router-dom";
import DetailSurat from "../../components/detailSurat";
import RekapSurat from "./RekapSurat";
import {DocumentForm, UserForm} from "../../components/Form";
import { useStoreActions, useStoreState } from "easy-peasy";
import UserButton from "../../components/UserButton";
import UserProfile from "../../components/UserProfile";

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

    const halamanInfo3 = {
        title: "List User"
    }
    const collumn3 = {
        penerima: "ID",
        tanggal: "Username",
        suratNama: "Email",
        grade: "Akses",
        
    }
    const dataSurat3 = [
        {
            id: 1,
            status: "Keluar",
            penerima: "01",
            tanggal: "admin",
            document: "emailadmin@gmail.com",
            link: "#",
            grade: "4"
        }
    ]

    const buttonsAdmin = [
        {
            desc: "List User",
            icon: faUserFriends,
            active: false
        },
        {
            desc: "Tambah User",
            icon: faUserPlus,
            active: false
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
        }
    ]

    const content = useStoreState((state) => state.dashboardContent)
    const sidebar = useStoreState((state) => state.sidebar)
    const setContent = useStoreActions((state) => state.setContent)
    const authorized = useStoreState((state) => state.authorized)
    const setSidebar = useStoreActions((state) => state.setSidebar)
    authorized ? 
        buttons.push(
                
            {
                desc: "Upload Surat",
                icon: faUpload,
                active: false
            }
        ) : console.log("")
    return(
        <div className="main">
            <div className="header">
                <div>
                    <img className="arch" src={ArchV}/>
                </div>
                { authorized ? 
                <UserButton/>
                :
                <Link to="/">
                    <div className="buttonLogin">
                        <p>
                            Log In
                        </p>
                    </div>
                </Link>
                }

            </div>
            <div className="body"> 
                <div className={sidebar ? "sidebar" : "sidebarNO"}>
                    <div className="mainMenu">
                        <div className="sideMainIcon" onClick={() => {setSidebar()}}>
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
                    {authorized ? 
                    <>    
                        <div className="bottomMenu">
                            <p>
                                Opsi Admin
                            </p>
                            <hr/>
                        </div>    
                        {
                            buttonsAdmin.map((button,index)=>{
                                console.log(button)
                                return <SideButton info={button} onClick={()=>{setContent(button.desc)}}/>
                            })
                        }               
                    </>
                    : console.log("")}
                </div>
                <div className="content">
                    <p className="pageName">{content}</p>
                    {content == "Dashboard" ? <DashboardPage/> : 
                    content == "Halaman Surat" ? <HalamanSurat dataSurat={dataSurat1} halamanInfo={halamanInfo1} collumn={collumn1}/>:
                    content == "Rekap Surat" ? <>
                        <HalamanSurat dataSurat={dataSurat2} halamanInfo={halamanInfo2} collumn={collumn2}/>
                    </> : 
                    content == "Detail Surat" ? <DetailSurat/> : 
                    content == "Detail Rekap" ? <RekapSurat/>: 
                    content == "Upload Surat" ? <DocumentForm type={{
                        title: "Upload"
                    }} />:
                    content == "Tambah User" ? <UserForm type={{
                        title: "Tambah User"
                    }} />: 
                    content == "List User" ? <HalamanSurat dataSurat={dataSurat3} halamanInfo={halamanInfo3} collumn={collumn3}/> :
                    content == "User Profile" ? <UserProfile/> : 
                    content == "Edit User" ? <UserForm type={{
                        title: "Edit User"
                    }} /> :<div></div>}
                    <div className="emptySpace"></div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard