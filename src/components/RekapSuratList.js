import React from "react";
import HalamanSurat from "./halamanSurat";

const RekapSuratList = () => {
    const halamanInfo2 = {
        title: "Rekap Surat"
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
            tanggal: "30-05-2004",
            document: "Catcher In the Rye.pdf",
            link: "#",
            grade: "Public"
        }
    ]
    return(
        <>
            <HalamanSurat dataRekap={dataRekap} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default RekapSuratList;