import React, { useState } from "react";
import '../../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faBars, faEnvelope, faFileAlt, faFilePdf, faQrcode, faQuestion, faUpload, faUserFriends, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import SideButton from "../../components/sidebarButtons";
import ArchV from "../../assets/img/ArchV.png"
import HalamanSurat from "../../components/halamanSurat";
import DashboardPage from "../../components/DashboardPage";
import { Link, Outlet, Routes } from "react-router-dom";
import DetailSurat from "../../components/detailSurat";
import RekapSurat from "./RekapSurat";
import {DocumentForm, UserForm} from "../../components/Form";
import { useStoreActions, useStoreState } from "easy-peasy";
import UserButton from "../../components/UserButton";
import UserProfile from "../../components/UserProfile";

const Dashboard = () => {

    const buttonsAdmin = [
        {
            desc: "List User",
            icon: faUserFriends,
            active: false,
            link: "user/list"
        },
        {
            desc: "Tambah User",
            icon: faUserPlus,
            active: false,
            link: "adduser"
        }
    ]

    const buttons = [
        {
            desc: "Dashboard",
            icon: faColumns,
            active: false,
            link: "dashboard"
        },
        {
            desc: "Halaman Surat",
            icon: faEnvelope,
            active: false,
            link: "surat/list"
        },
        {
            desc: "Rekap Surat",
            icon: faFileAlt,
            active: false,
            link: "rekap/list"
        }
    ]

    const content = useStoreState((state) => state.dashboardContent)
    const sidebar = useStoreState((state) => state.sidebar)
    const setContent = useStoreActions((state) => state.setContent)
    const authorized = useStoreState((state) => state.authorized)
    const userData = useStoreState((state) => state.userData)

    const setSidebar = useStoreActions((state) => state.setSidebar)
    authorized ? 
        buttons.push(
                
            {
                desc: "Input Surat",
                icon: faUpload,
                active: false,
                link: "upload"
            }
        ) : console.log("")
    return(
        <div className="main ">
            <div className="header">
                    <div>
                        <img className="arch" src={ArchV}/>
                    </div>
                    { authorized ?
                    // console.log("") 
                    <UserButton/>
                    :
                    <Link to="/login">
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
                        <div className="sideMainIcon" onClick={() => {
                            console.log(sidebar)
                            setSidebar()}}>
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                        <p>
                            Main Menu
                        </p>
                    </div>
                    {
                        buttons.map((button,index)=>{
                            console.log(button)
                            return <SideButton link={button.link} info={button} onClick={()=>{setContent(button.desc)}}/>
                        })
                    }
                    { userData.username == "admin" ? 
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
                                return <SideButton link={button.link} info={button} onClick={()=>{
                                    setContent(button.desc);
                                }}/>
                            })
                        }               
                    </>
                    : console.log("")}
            </div>
                <div className="content">
                    {/* <p className="pageName">{content}</p> */}
                    <Outlet/>
                    {/* {content == "Dashboard" ? <DashboardPage/> : 
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
                    <div className="emptySpace"></div> */}

                </div>
            </div>
        </div>
    )
}

export default Dashboard