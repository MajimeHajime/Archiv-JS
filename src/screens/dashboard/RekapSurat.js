import React from "react";
import HalamanSurat from "../../components/halamanSurat";

const RekapSurat = () => {
    const halamanInfo2 = {
        title: "Surat Masuk"
    }
    const collumn2 = {
        penerima: "Penerima",
        tanggal: "Tanggal",
        suratNama: "Surat",
        grade: "Grade",
    }
    const dataRekap2 = [
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
            <HalamanSurat dataRekap={dataRekap2} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <HalamanSurat dataRekap={dataRekap2} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default RekapSurat;