import React, { useState } from "react";
import '../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import ListSurat from "./listSurat";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { getDetail, getPost, getRequest, getSurat } from "../peasy/api";
import Loading from "./Loading";

const HalamanSurat= ({dataSurat, halamanInfo, collumn, type, dataRekap}) =>{
    const [page, setPage] = useState(1)
    const [entry, setEntry] =useState(4)
    const content = useStoreState((state) => state.dashboardContent)
    const dataLoading = useStoreState((state) => state.dataLoading)
    const setContent = useStoreActions((state) => state.setContent)
    const setDataLoading = useStoreActions((state) => state.setDataLoading)
    const setDetail = useStoreActions((state) => state.setDetail)

    const setKm = useStoreActions((state) => state.setKm)
    const km = useStoreState((state) => state.km)
    const setSataSuratMasuk = useStoreActions((state) => state.setSataSuratMasuk)

    let navigate  = useNavigate();

    return(
        <>
        <div className="suratContainer">
            <div className="up">
                <p className="suratHeading">{halamanInfo.title}</p>
                {type === "surat" ?
                <select onChange={(value) => {
                    setKm(value.target.value)
                    setDataLoading(true)
                    getRequest(
                        value.target.value == "masuk" ? 2 : 1
                    ).then(
                        data => {
                            setSataSuratMasuk(data.data);
                            setDataLoading(false);}
                    )
                    }} className="masuk_keluar" name="type" id="type">
                    <option value="masuk">Masuk</option>
                    <option value="keluar">Keluar</option>
                </select>
                
                : <></>
                }
                
            </div>
            <div className="suratEntry">
                <p>Show </p>
                <input className="inputEntry" value={entry} onChange={(val) => setEntry(val.target.value)} type="text"/>
                <p>entries</p>
            </div>
            <div className="listHead">
                <div className="penerima">
                    <p>{collumn.penerima}</p>
                    <FontAwesomeIcon className="noMargin" icon={faSortAmountDown}/>
                </div>
                <div className="tanggal">
                    <p>{collumn.tanggal}</p>
                    <FontAwesomeIcon className="noMargin" icon={faSortAmountDown}/>
                </div>
                <div className="suratName">
                    <p>{collumn.suratNama}</p>
                    <FontAwesomeIcon className="noMargin" icon={faSortAmountDown}/>
                </div>
                <div className="securityGrade">
                    <p>{collumn.grade}</p>
                    <FontAwesomeIcon className="noMargin" icon={faSortAmountDown}/>
                </div>
            </div>
            {
                dataLoading 
                ? 
                <>
                <div className="line shine"></div>
                <div className="line shine"></div>
                <div className="line shine"></div>
                <div className="line shine"></div>
                </>
                :
                type === "surat" ?
                km === "keluar" ?
                dataSurat.masuk.length > 0 ?
                dataSurat.masuk.map((data, index)=>{
                    return <ListSurat onClick={
                        e => {
                            console.log(data.id)
                            getDetail(data.id).then(data=> setDetail(data.data)).then(() => navigate("../detail"))
                        }
                    } info={{
                    penerima: data.nomor_surat || "",
                    tanggal: data.updated_at || "",
                    document: data.nama_file || "",
                    link: "#",
                    grade: data.access_level || "Public"}}/>
                })
                :
                <></>
                :
                dataSurat.masuk.length > 0 ?
                dataSurat.masuk.map((data, index)=>{
                    return <ListSurat onClick={
                        e => {
                            console.log(data.id)
                            getDetail(data.id).then(data=> setDetail(data.data)).then(() => navigate("../detail"))
                        }
                    } info={{
                        penerima: data.nomor_surat || "",
                        tanggal: data.updated_at || "",
                        document: data.nama_file || "",
                        link: "#",
                        grade: data.access_level || "Public"}}/>
                }) 
                :
                <></>
                :
                dataRekap.map((data, index)=>{
                    return <ListSurat onClick={
                        () => {type === "user" ? navigate("../edit") : navigate("../detail")}
                    } info={data}/>
                })
            }
            <div className="footer">
                <p>Showing 1 to {entry} of {type === "surat" ? km === "keluar" ?dataSurat.keluar.length : dataSurat.masuk.length : dataRekap.length} entries</p>
                
                <div className="button" onClick={() =>{
                    setDataLoading(true)
                    getRequest(
                        km == "masuk" ? 2 : 1
                    ).then(
                        data => {
                            setSataSuratMasuk(data.data);
                            setDataLoading(false);}
                    )
                        
                    }}
                    >
                    Update
                </div>
                <div className="pagination">
                    <div onClick={
                        () => {
                            if (page >= 2) {
                                setPage(page - 1)
                            }
                        }
                    } className="buttonPage">
                        Previous
                    </div>
                    <div className="page">
                        {page}
                    </div>
                    <div onClick={
                        () => {
                            setPage(page + 1)
                        }
                    }
                    className="buttonPage">
                        Next
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default HalamanSurat