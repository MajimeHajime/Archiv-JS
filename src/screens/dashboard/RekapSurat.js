import React from "react";
import HalamanSurat from "../../components/halamanSurat";

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
            tanggal: "10",
            document: "3",
            link: "#",
            grade: "7"
        }
    ]
    return(
        <>
            <HalamanSurat dataRekap={dataRekap} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <div className="emptySpace"></div>
            
        </>
    )
}
