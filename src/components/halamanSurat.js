import React, { useEffect, useState } from "react";
import '../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import ListSurat from "./listSurat";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { getDetail, getPost, getRequest, getSurat } from "../peasy/api";
import Loading from "./Loading";

const HalamanSurat= ({dataSurat, halamanInfo, collumn, type}) =>{
    const [page, setPage] = useState(1)
    const [entry, setEntry] =useState(4)
    const content = useStoreState((state) => state.dashboardContent)
    const dataLoading = useStoreState((state) => state.dataLoading)
    const setContent = useStoreActions((state) => state.setContent)
    const setDataLoading = useStoreActions((state) => state.setDataLoading)
    const setDetail = useStoreActions((state) => state.setDetail)
    const dataUser = useStoreState((state) => state.dataUser)
    const setKm = useStoreActions((state) => state.setKm)
    const km = useStoreState((state) => state.km)
    const setSataSuratMasuk = useStoreActions((state) => state.setSataSuratMasuk)
    const setDataUser = useStoreActions((state) => state.setDataUser)
    const userData = useStoreState((state) => state.userData)
    const dataRekap = useStoreState((state) => state.dataRekap)
    const setDataRekap = useStoreActions((state) => state.setdataRekap)
    const [init, setInit] = useState(true)
    const [where, setWhere] = useState("")

    const setEditUser = useStoreActions((state) => state.setEditUser)

    useEffect(() => {
        
        init ?
        
        getRequest( type == "surat" ? 'http://127.0.0.1:8000/api/surats/' : type == "user" ? 'http://127.0.0.1:8000/api/user-list/' : 'http://127.0.0.1:8000/api/rekap/', {
            tipe: 2,
            entry: 4,
            access_level: userData.access_levels ? userData.access_levels : "0"
        }).then(

            data => {
                setKm('masuk')
                console.log(data.data)
                type ==  "surat" ? setSataSuratMasuk(data.data) : type == "user" ? setDataUser(data.data) :setDataRekap(data.data);
                setDataLoading(false);
                setInit(false)
            }, []
        )
        : console.log("a")
        
    })

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
                    getRequest('http://127.0.0.1:8000/api/surats/', {
                        tipe: value.target.value == "masuk" ? 2 : 1,
                        entry: entry,
                        access_level: userData ? userData.access_levels : 0
                    }).then(
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
            {type == "surat" ? <div className=" search ">
                <input className="" type="text" onChange={(e) => {setWhere(e.target.value)}}></input><br/>
                <div className="fuckPMargin searchButton"
                    onClick={() => {
                        setDataLoading(true)
                        getRequest('http://127.0.0.1:8000/api/surats/search/', {
                            tipe: km == "masuk" ? 2 : 1,
                            where: where,
                            access: userData ? userData.access_levels : 0
                        }).then(
                            data => {
                                setSataSuratMasuk(data);
                                setDataLoading(false);}
                        )
                        }}
                >
                    <p>
                        Search
                    </p>
                </div>
            </div> : <></>}
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
                dataSurat.masuk.data ?
                dataSurat.masuk.data.map((data, index)=>{
                    return <ListSurat onClick={
                        e => {
                            console.log(data.id)
                            getDetail("http://127.0.0.1:8000/api/surats/",data.id).then(data=> setDetail(data.data)).then(() => navigate("../detail"))
                        }
                    } info={{
                    penerima: data.nomor_surat || "",
                    tanggal: data.updated_at || "",
                    document: data.nama_surat || "",
                    link: "#",
                    grade: data.access_level || "0"}}/>
                })
                :
                <></>
                :
                dataSurat.masuk.data ?
                dataSurat.masuk.data.map((data, index)=>{
                    return <ListSurat onClick={
                        e => {
                            console.log(data.id)
                            getDetail("http://127.0.0.1:8000/api/surats/", data.id).then(data=> {
                                console.log(data)
                                setDetail(data.data)}).then(() => navigate("../detail"))
                        }
                    } info={{
                        penerima: data.nomor_surat || "",
                        tanggal: data.updated_at || "",
                        document: data.nama_surat || "",
                        link: "#",
                        grade: data.access_level || "0"}}/>
                }) 
                :
                <></>
                : type === "user" ? 
                dataUser.data ?
                dataUser.data.map((data, index)=>{
                    return <ListSurat onClick={
                        e => {
                            console.log(data.id)
                            getDetail("http://127.0.0.1:8000/api/detail-user/", data.id).then(data=> {
                                console.log(data)
                                setEditUser(true)
                                setDetail(data.data)}).then(() => navigate("../../adduser"))
                        }
                    } info={{
                        penerima: data.id || "",
                        tanggal: data.username || "",
                        document: data.email || "",
                        link: "#",
                        grade: data.access_levels || "0"}}/>
                }) 
                :
                <></>
                :
                // console.log(dataRekap)
                dataRekap.map((data, index)=>{
                    return <ListSurat onClick={
                        () => {
                            console.log(data.hak)}
                    } info={{
                        penerima: data.hak || "",
                        tanggal: data.jumlah || "0",
                        document: data.keluar || "0",
                        link: "#",
                        grade: data.masuk || "0"}}/>
                })
            }
            {
            
            type == "surat" ?
            <div className="footer">
                
                <p>Showing {dataSurat.masuk.from ? dataSurat.masuk.from : ""} to {dataSurat.masuk.to ? dataSurat.masuk.to : ""} of {dataSurat.masuk.total? dataSurat.masuk.total : ""} entries</p>
                
                <div className="button" onClick={() =>{
                    setDataLoading(true)
                    getRequest('http://127.0.0.1:8000/api/surats/', {
                        tipe: km == "masuk" ? 2 : 1,
                        entry: entry,
                        access_level: userData.access_levels ? userData.access_levels : "0"
                    }).then(
                        data => {
                            console.log(data.data)
                            setSataSuratMasuk(data.data);
                            setDataLoading(false);}
                    )
                        
                    }}
                    >
                    Update
                </div>

                <div className="pagination">
                    {dataSurat.masuk.links ? dataSurat.masuk.links.map((data, index) => {
                        return( data.url ?
                        <div 
                            className={"" + (data.active ? "page": "")}
                            onClick={() =>{
                            setDataLoading(true)
                            getRequest(data.url, {
                                access_level: userData.access_levels ? userData.access_levels : "0",
                                tipe: km == "masuk" ? 2 : 1,
                                entry: entry
                            }).then(
                                data => {
                                    console.log(data.data)
                                    setSataSuratMasuk(data.data);
                                    setDataLoading(false);}
                            )
                            }}>
                                {data.label == "Next &raquo;" ? "Next" :
                                data.label == "&laquo; Previous" ? "Previous" :
                                data.label}

                        </div> : <></>)
                    }) : <></>}
                    
                </div>
            </div> :
            <div className="footer">
                
            <p>Showing {dataUser.from ? dataUser.from : ""} to {dataUser.to ? dataUser.to : ""} of {dataUser.total? dataUser.total : ""} entries</p>
            
            <div className="button" onClick={() =>{
                setDataLoading(true)
                getRequest(type == "user" ? 'http://127.0.0.1:8000/api/user-list/' : 'http://127.0.0.1:8000/api/rekap/', {
                    entry: entry
                }).then(
                    data => {
                        console.log(data.data)
                        type == "user" ? setDataUser(data.data) :setDataRekap(data.data);
                        setDataLoading(false);}
                )
                    
                }}
                >
                Update
            </div>

            {type == "rekap" ? <></> :<div className="pagination">
                {dataUser.links ? dataUser.links.map((data, index) => {
                    return( data.url ?
                    <div 
                        className={"" + (data.active ? "page": "")}
                        onClick={() =>{
                        setDataLoading(true)
                        getRequest(data.url, {
                            entry: entry
                        }).then(
                            data => {
                                console.log(data.data)
                                setDataUser(data.data);
                                setDataLoading(false);}
                        )
                        }}>
                            {data.label}

                    </div> : <></>)
                }) : <></>}
                
            </div>}
        </div>
            }
        </div>
        </>
    )
    
}

export default HalamanSurat