import React from "react";
import HalamanSurat from "./halamanSurat";

const RekapSurat = () => {
    const halamanInfo2 = {
        title: "Rekap Masuk Keluar"
    }
    const collumn2 = {
        penerima: "Pemegang Hak",
        tanggal: "Jumlah",
        suratNama: "Keluar",
        grade: "Masuk",
    }
    const dataRekap = [
        {
            id: 1,
            status: "Masuk",
            penerima: "Guru",
            tanggal: "10",
            document: "3",
            link: "#",
            grade: "7"
        }
    ]
    return(
        <>
            <HalamanSurat type={"rekap"} dataRekap={dataRekap} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <div className="emptySpace"></div>
            
        </>
    )
}
export default RekapSurat;