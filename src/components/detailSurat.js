import React, {useState} from "react";
import '../assets/css/Dashboard.css';
import {faDownload, faFilePdf, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreState } from "easy-peasy";
import { truncateString } from "../modules/modulesCustom";


const DetailSurat = () => {
    const detail = useStoreState((state) => state.detail)
    console.log(detail)
    return(
        <>
            <div className="detailContainer">
                <div className="detailTitleContainer">
                    
                    
                </div>
                <div className="detailBackground">
                    <h className="titleDetail">Detail</h>
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
                                    <div className="detailButton downloadButton">
                                        <FontAwesomeIcon icon={faDownload}/>
                                        <p>Download</p>
                                    </div>
                                    <div className="detailButton downloadButton">
                                        <FontAwesomeIcon icon={faPrint}/>
                                        <p>Print</p>
                                    </div>    
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
                                         "" : ""}
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