import React from "react";
import HalamanSurat from "./halamanSurat";

const UserList = () => {
    const halamanInfo2 = {
        title: "List User"
    }
    const collumn2 = {
        penerima: "ID",
        tanggal: "Username",
        suratNama: "Email",
        grade: "Akses",
        
    }
    const dataRekap = [
        {
            id: 1,
            status: "Keluar",
            penerima: "01",
            tanggal: "admin",
            document: "emailadmin@gmail.com",
            link: "#",
            grade: "4"
        }
    ]
    return(
        <>
            <HalamanSurat type={"user"} dataRekap={dataRekap} halamanInfo={halamanInfo2} collumn={collumn2}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default UserList;