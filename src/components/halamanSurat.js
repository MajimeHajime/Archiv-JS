import React, { useState } from "react";
import '../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import ListSurat from "./listSurat";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";

const HalamanSurat= ({dataSurat, halamanInfo, collumn, type, dataRekap}) =>{
    const [page, setPage] = useState(1)
    const [entry, setEntry] =useState(4)
    const content = useStoreState((state) => state.dashboardContent)
    const dataLoading = useStoreState((state) => state.dataLoading)
    const setContent = useStoreActions((state) => state.setContent)
    const setKm = useStoreActions((state) => state.setKm)
    const km = useStoreState((state) => state.km)
    let navigate  = useNavigate();

    return(
        <>
        <div className="suratContainer">
            <div className="up">
                <p className="suratHeading">{halamanInfo.title}</p>
                {type === "surat" ?
                <select onChange={(value) => setKm(value.target.value)} className="masuk_keluar" name="type" id="type">
                    <option value="keluar">Keluar</option>
                    <option value="masuk">Masuk</option>
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
                dataSurat.keluar.map((data, index)=>{
                    return <ListSurat onClick={
                        () => navigate("../detail")
                    } info={data}/>
                })
                :
                dataSurat.masuk.map((data, index)=>{
                    return <ListSurat onClick={
                        () => navigate("../detail")
                    } info={data}/>
                }) :
                dataRekap.map((data, index)=>{
                    return <ListSurat onClick={
                        () => {type === "user" ? navigate("../edit") : navigate("../detail")}
                    } info={data}/>
                })
            }
            <div className="footer">
                <p>Showing 1 to {entry} of {type === "surat" ? km === "keluar" ?dataSurat.keluar.length : dataSurat.masuk.length : dataRekap.length} entries</p>
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