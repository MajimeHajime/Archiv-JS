import React, {useState} from "react";
import '../assets/css/Dashboard.css';
import {faDownload, faFilePdf, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DetailSurat = () => {
    return(
        <>
            <div className="detailContainer">
                <div className="detailTitleContainer">
                    
                    
                </div>
                <div className="detailBackground">
                    <h className="titleDetail">Detail</h>
                    <div className="detailContainer2">          
                        <div className="disposisi">
                            <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </div>
                        <div className="leftSideContainer">
                        <div className="informationDetail">
                                <div className="detailTitle">
                                    <div className="iconDetail">
                                        <FontAwesomeIcon icon={faFilePdf}/>
                                    </div>
                                    <div>
                                        <h>Iliad - The Epic of Homer.pdf</h>
                                        <p className="fileSize">35MB</p>
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
                                        Public
                                    </p>
                                </div>
                                <div className="infoStyle">
                                    <h>
                                        Retensi
                                    </h>
                                    <p>
                                        Nilai Kembali
                                    </p>
                                    <p>
                                        30 Mei 2022
                                    </p>

                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <div className="bottomDetail">
                        <p>Diterima pada 10 Mei 2003 oleh Hubin</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailSurat;