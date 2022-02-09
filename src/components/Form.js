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
    let [nomor, setNomor] = useState("")
    let [file, setFile] = useState(null)
    let [nama, setNama] = useState("")
    let [tipe, setTipe] = useState("")
    let [hak, setHak] = useState("")
    let [dis, setDis] = useState("")
    let [pen, setPen] = useState("")
    let [peng, setPeng] = useState("")
    let [ret, setRet] = useState("")
    let [tgl, setTgl] = useState("")
    let [aku, setAku] = useState("")
    let [tglAku, setTglAku] = useState("")

    const dataLoading = useStoreState((state) => state.dataLoading)
    const setDataLoading = useStoreActions((state) => state.setDataLoading)
    const [buttonString, setButton] = useState("Submit")
    const handleInput = () => {
        formData = new FormData()
        formData.append("file", file);
        formData.append("nama_file", "");
        formData.append("file_path", "");
        formData.append("nomor_surat", nomor);
        formData.append("nama_surat", nama);
        formData.append("disposisi", dis);
        formData.append("penerima", pen);
        formData.append("pengirim", peng);
        formData.append("jenis_retensi", ret);
        formData.append("tanggal_retensi", tgl);
        formData.append("nomor_akuisisi", aku);
        formData.append("tanggal_akusisi", tglAku);
        // setButton("Mengupload...")
        getPost(formData).then(status => {
            console.log(status)
            // setButton(status)
            // setTimeout(() => {
            //     setButton("Submit")
            //   }, 2000)
        })
        }
    return(
        <div className="suratContainer">
            <h className="titleForm">{type.title}</h>
            <hr/>
            <form
                className="formArchiv marginForm" onSubmit={(e)=>{
                    e.preventDefault()
                    }}
            >
                
                <div className="fileUpload">
                    {type.edit ?
                    <></>
                    :
                    <div>
                        <h className="formArchiv">File</h><br/>
                        <input className="" type="file"  onChange={
                    e => setFile(e.target.files[0])
                }></input>
                    </div>
                    }
                    <div className="uploadHere">
                        <h className="formArchiv">Nomor Surat</h><br/>
                        <input className="uploadForm " type="text" onChange={e => setNomor(e.target.value)}></input>
                    </div>
                </div>
                <label className="formArchiv">Nama Surat</label><br/>
                <input className="formArchiv" type="text" onChange={e => setNama(e.target.value)}></input><br/>
                <label className="formArchiv">Tipe Surat</label><br/>
                <select className="formArchiv" onChange={e => setTipe(e.target.value)}>
                    <option>
                        Keluar
                    </option>
                    <option>
                        Masuk
                    </option>
                </select><br/>
                <label className="formArchiv">Hak Akses</label><br/>
                <select className="formArchiv" onChange={e => setHak(e.target.value)}>
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
                <label className="formArchiv">Disposisi</label><br/>
                <textarea className="formArchiv" type="text" onChange={e => setDis(e.target.value)}></textarea><br/>
                <label className="formArchiv">Penerima</label><br/>
                <input className="formArchiv" type="text" onChange={e => setPen(e.target.value)}></input><br/>
                <label className="formArchiv">Pengirim</label><br/>
                <input className="formArchiv" type="text" onChange={e => setPeng(e.target.value)}></input><br/>
                <label className="formArchiv">Jenis Retensi</label><br/>
                <select className="formArchiv" onChange={e => setRet(e.target.value)}>
                    <option>
                        Musnah
                    </option>
                    <option>
                        Nilai Kembali
                    </option>
                    <option>
                        Permanen
                    </option>
                </select><br/>
                
                <label className="formArchiv">Tanggal Retennsi</label><br/>
                <input className="formArchiv" type="date" onChange={e => setTgl(e.target.value)}></input><br/>
                
                <label className="formArchiv">Sumber Akuisisi</label><br/>
                <input className="formArchiv" type="text" onChange={e => setAku(e.target.value)}></input><br/>
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