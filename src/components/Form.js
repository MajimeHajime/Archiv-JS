import { useStoreActions, useStoreState } from "easy-peasy";
import React, {useState} from "react";
import '../assets/css/Dashboard.css'
import { getPost } from "../peasy/api";
import Loading from "./Loading";

const UserForm= ({type}) => {
   
    return(
        <div className="suratContainer">
            <h className="titleForm">{type.title}</h>
            <hr/>
            <form
                className="formArchiv marginForm" onSubmit={(e)=>{
                    e.preventDefault()
                    }}
            >
                                    
                <h className="formArchiv">Nama User</h><br/>
                <input className="uploadForm " type="text"></input><br/>
                <label className="formArchiv">Password</label><br/>
                <input className="formArchiv" type="password"></input><br/>
                <label className="formArchiv">Email</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Hak Akses</label><br/>
                <select className="formArchiv">
                    <option>
                        Publik
                    </option>
                    <option>
                        Terbatas
                    </option>
                    <option>
                        Rahasia
                    </option>
                </select><br/>
                
            </form>
        </div>
        
    )
}
const DocumentForm= ({type}) => {
    let formData = new FormData()
    const [nomor, setNomor] = useState("")
    const [file, setFile] = useState("")
    const [nama, setNama] = useState("")
    const [tipe, setTipe] = useState("")
    const [hak, setHak] = useState("")
    const [dis, setDis] = useState("")
    const [pen, setPen] = useState("")
    const [peng, setPeng] = useState("")
    const [ret, setRet] = useState("")
    const [tgl, setTgl] = useState("")
    const [aku, setAku] = useState("")
    const [tglAku, setTglAku] = useState("")
    const [error, setError] = useState({})

    const dataLoading = useStoreState((state) => state.dataLoading)
    const setDataLoading = useStoreActions((state) => state.setDataLoading)
    const [buttonString, setButton] = useState("Submit")
    const handleInput = () => {
        formData = new FormData()
        tipe ? formData.append("tipe", tipe) :console.log("");
        file ? formData.append("file", file) : console.log("");
        nomor ? formData.append("nomor_surat", nomor) : console.log("");
        nama ? formData.append("nama_surat", nama) :console.log("");
        dis ? formData.append("disposisi", dis): console.log("");
        pen ?  formData.append("penerima", pen) :console.log("");
        peng ? formData.append("pengirim", peng) : console.log("");
        ret ? formData.append("jenis_retensi", ret) :console.log("");
        tgl ? formData.append("tanggal_retensi", tgl) : console.log("");
        aku ? formData.append("nomor_akuisisi", aku) : console.log("");
        tglAku ? formData.append("tanggal_akusisi", tglAku) : console.log("");
        setButton("Mengupload...")

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/create", requestOptions)
        .then(response => response.json())
        .then(result => {if (result.error) {
                                setError(result.error)
                                console.log(result)
                        }else{
                            console.log("")
                        }
                        }).
                        then(() => {setButton("Submit")})
        .catch(error => console.log('error', error));

        // getPost(formData).then(status => {
        //     setError(status.error)
        //     setButton("Submit")
        //     console.log(error.nomor_surat)
        //     // setTimeout(() => {
        //     //     setButton("Submit")
        //     //   }, 2000)
        // })
        }
    return(
        <div className="suratContainer">
            <h className="titleForm">{type.title}</h>
            <hr/>
            <form
                className="formArchiv marginForm fuckPMargin" onSubmit={(e)=>{
                    e.preventDefault()
                    }}
            >
                
                <div className="fileUpload">
                    {type.edit ?
                    <></>
                    :
                    <div>
                        <h className="formArchiv">File</h><br/>
                        {error.file ? <p className="errorText">{error.file}</p> : <></>}
                        <input className="" type="file"  onChange={
                    e => setFile(e.target.files[0])
                }></input>
                    </div>
                    }
                    <div className="uploadHere fuckPMargin ">
                        <h className="formArchiv">Nomor Surat</h><br/>
                        {error.nomor_surat ? <p className="errorText">{error.nomor_surat}</p> : <></>}
                        <input className={"uploadForm " + (error.nomor_surat ?  " error" : "")} type="text" onChange={e => setNomor(e.target.value)}></input>
                    </div>
                </div>
                <label className="formArchiv">Nama Surat</label><br/>
                {error.nama_surat ? <p className="errorText">{error.nama_surat}</p> : <></>}
                <input className={"formArchiv" + (error.nama_surat ?  " error" : "")} type="text" onChange={e => setNama(e.target.value)}></input><br/>
                <label className={"formArchiv" }>Tipe Surat</label><br/>
                {error.tipe ? <p className="errorText">{error.tipe}</p> : <></>}
                <select className={"formArchiv" + (error.tipe ?  " error" : "")} onChange={e => setTipe(e.target.value)}>
                    <option value={1}>
                        Keluar
                    </option>
                    <option value={2}>
                        Masuk
                    </option>
                </select><br/>
                <label className="formArchiv">Hak Akses</label><br/>
                <select className="formArchiv" onChange={e => setHak(e.target.value)}>
                    <option value={1}>
                        Publik
                    </option>
                    <option value={2}>
                        Terbatas
                    </option>
                    <option value={3}>
                        Rahasia
                    </option>
                </select><br/>
                <label className="formArchiv">Disposisi</label><br/>
                <textarea className="formArchiv" type="text" onChange={e => setDis(e.target.value)}></textarea><br/>
                <label className="formArchiv">Penerima</label><br/>
                {error.penerima ? <p className="errorText">{error.penerima}</p> : <></>}
                <input className={"formArchiv " + (error.penerima ?  " error" : "")} type="text" onChange={e => setPen(e.target.value)}></input><br/>
                <label className="formArchiv">Pengirim</label><br/>
                {error.pengirim ? <p className="errorText">{error.pengirim}</p> : <></>}
                <input className={"formArchiv " + (error.pengirim ?  " error" : "")} type="text" onChange={e => setPeng(e.target.value)}></input><br/>
                <label className="formArchiv">Jenis Retensi</label><br/>
                {error.jenis_retensi ? <p className="errorText">{error.jenis_retensi}</p> : <></>}
                <select className={"formArchiv " + (error.jenis_retensi ?  " error" : "")} onChange={e => setRet(e.target.value)}>
                    <option value={1}>
                        Musnah
                    </option>
                    <option value={2}>
                        Nilai Kembali
                    </option>
                    <option value={3}>
                        Permanen
                    </option>
                </select><br/>
                
                <label className="formArchiv">Tanggal Retennsi</label><br/>
                <input className="formArchiv" type="date" onChange={e => setTgl(e.target.value)}></input><br/>
                
                <label className="formArchiv">Nomor Akuisisi</label><br/>
                {error.nomor_akuisisi ? <p className="errorText">{error.nomor_akuisisi}</p> : <></>}
                <input className={"formArchiv " + (error.nomor_akuisisi ?  " error" : "")} type="text" onChange={e => setAku(e.target.value)}></input><br/>
                <label className="formArchiv">Tanggal Akuisisi</label><br/>
                <input className="formArchiv" type="date" onChange={e => setTglAku(e.target.value)}></input><br/>
            </form>
            <div className="toTheLeft mb10">
                <div className="button" onClick={() => {
                    handleInput()}
                    }>
                    {buttonString}
                </div>
            </div>
            
        </div>
        
    )
}

export {
    UserForm,
    DocumentForm
};