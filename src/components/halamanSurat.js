import React, { useState } from "react";
import '../assets/css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import ListSurat from "./listSurat";
import { useStoreActions, useStoreState } from "easy-peasy";

const HalamanSurat= ({dataSurat, halamanInfo, collumn}) =>{
    const [page, setPage] = useState(1)
    const [entry, setEntry] =useState(4)
    const content = useStoreState((state) => state.dashboardContent)
    const setContent = useStoreActions((state) => state.setContent)
    return(
        <>
        <div className="suratContainer">
            <div className="up">
                <p className="suratHeading">{halamanInfo.title}</p>
                <select className="masuk_keluar" name="type" id="type">
                    <option value="keluar">Keluar</option>
                    <option value="masuk">Masuk</option>
                </select>
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
                dataSurat.map((data, index)=>{
                    console.log(data)
                    return <ListSurat onClick={
                        () => {
                        content === "Halaman Surat" || content == "Detail Rekap" ?
                        setContent("Detail Surat")
                        : setContent("Detail Rekap")}
                    } info={data}/>
                })
            }
            <div className="footer">
                <p>Showing 1 to {entry} of {dataSurat.length} entries</p>
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