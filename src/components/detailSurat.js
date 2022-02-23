import React, {useState} from "react";
import '../assets/css/Dashboard.css';
import {faDownload, faEdit, faFilePdf, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "easy-peasy";
import { truncateString } from "../modules/modulesCustom";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getDetail } from "../peasy/api";


const DetailSurat = () => {
    const detail = useStoreState((state) => state.detail)
    const setEditUser = useStoreActions((state) => state.setEditUser)
    let navigate  = useNavigate();
    const authorized = useStoreState((state) => state.authorized)
    const userData = useStoreState((state) => state.userData)

    console.log(detail)

    let today = new Date();
    

    let date = today.toISOString().split('T')[0] ;
    console.log(detail.tanggal_retensi == date)
    return(
        <>
            <div className="detailContainer">
                <div className="detailTitleContainer">
                    
                    
                </div>
                <div className="suratContainer">
                    <div className="vert">
                    <h className="titleDetail">Detail</h>
                    {authorized ? userData.access_levels >=  1 ? detail.tanggal_retensi <= date ? 
                    <div onClick={
                                e => {
                                    setEditUser(true)
                                    navigate("../../upload");                             
                                    setEditUser(true)

                                }
                            
                        } className='pointerCursor editButton2'>
                            <FontAwesomeIcon icon={faEdit}/>
                        </div> : <></> : <></> : <></>}
                        </div>
                    <div className="detailContainer2">          
                        <div className="disposisi">
                            <p>{detail.disposisi ? detail.disposisi : ""}</p>
                        </div>
                        <div className="leftSideContainer">
                        <div className="informationDetail">
                                <div className="detailTitle">
                                    <div className="iconDetail">
                                        <FontAwesomeIcon icon={faFilePdf}/>
                                    </div>
                                    <div>
                                        <h>{detail.nama_surat}</h>
                                        <p className="fileSize">{detail.nama_file}</p>
                                    </div>
                                </div>
                                <div className="detailButtonContainer">
                                    <div className="detailButton downloadButton" onClick={() => {
                                        window.location.href = "http://127.0.0.1:8000/api/download/" + detail.id;
                                    }}>
                                        <FontAwesomeIcon icon={faDownload}/>
                                        <p>Download</p>
                                    </div>
                                    {/* <div className="detailButton downloadButton">
                                        <FontAwesomeIcon icon={faPrint}/>
                                        <p>Print</p>
                                    </div>     */}
                                </div>
                            </div>
                            <div className="informationDetail">
                                <div className="infoStyle">
                                    <h>
                                        Access Level
                                    </h>
                                    <p>
                                        {detail.access_level ? 
                                            detail.access_level == 2 ? "Rahasia" :
                                            detail.access_level == 1 ? "Terbatas" :
                                            detail.access_level == 0 ? "Publik" :
                                         "Publik" : "Publik"}
                                    </p>
                                </div>
                                <div className="infoStyle">
                                    <h>
                                        Retensi
                                    </h>
                                    <p>
                                        {detail.jenis_retensi ? 
                                            detail.jenis_retensi == 2 ? "Nilai Kembail" :
                                            detail.jenis_retensi == 1 ? "Musnah" :
                                            detail.jenis_retensi == 3 ? "Permanen" :
                                         "" : ""}
                                    </p>
                                    <p>
                                        {detail.jenis_retensi == 3 ? "" :detail.tanggal_retensi || ""}
                                    </p>

                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <div className="fuckPMargin bottomDetail">
                        <p>Dikirim oleh {detail.pengirim} dan diterima pada pada {detail.tanggal_akuisisi || detail.created_at} oleh {detail.penerima}</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailSurat;