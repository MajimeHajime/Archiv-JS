import { useStoreState } from "easy-peasy";
import React from "react";
import HalamanSurat from "./halamanSurat";

const HalamanSurat2 = () => {
    const halamanInfo2 = {
        title: "Daftar Surat"
    }
    const collumn2 = {
        penerima: "No. Surat",
        tanggal: "Tanggal",
        suratNama: "Surat",
        grade: "Grade",
    }
    const dataSurat = useStoreState((state) => state.dataSurat)

    return(
        <>
            <div>

            </div>
            <HalamanSurat type={"surat"} dataSurat={dataSurat} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default HalamanSurat2;