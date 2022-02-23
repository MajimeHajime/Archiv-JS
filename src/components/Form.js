import { useStoreActions, useStoreState } from "easy-peasy";
import React, {useState} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Dashboard.css'
import { getDetail, getPost } from "../peasy/api";
import Loading from "./Loading";

const UserForm= ({type}) => {
    const editUser = useStoreState((state) => state.editUser)
    const detail = useStoreState((state) => state.detail)

   const [username, setUsername] = useState(editUser ? detail.username :"")
   const [name, setName] = useState(editUser ? detail.name :"")
   const [password, setPass] = useState( "")
   const [email, setEmail] = useState(editUser ? detail.email :"")
   const [access, setAccessLevel] = useState(editUser ? detail.access_levels : "0")
   const [buttonString, setButton] = useState("Submit")
   let formData = new FormData()
   const [error, setError] = useState({})
   const setEditUser = useStoreActions((state) => state.setEditUser)
   let navigate  = useNavigate();

   useEffect(() => {

    // returned function will be called on component unmount 
    return () => {
        setEditUser(false)
    }
  }, [])

   const handleSubmit = () => {
    formData = new FormData()
    username ? formData.append("username", username) :console.log("");
    name ? formData.append("name", name) : console.log("");
    editUser ? formData.append("id", detail.id) : password ? formData.append("password", password) : console.log("");
    email ? formData.append("email", email) :console.log("");
    access ? formData.append("access_levels", access): console.log("1");
    setButton("Menginput...")

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
    };

    var url = editUser ? "http://127.0.0.1:8000/api/update-user" : "http://127.0.0.1:8000/api/create-user"

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {if (result.error) {
                            setError(result.error)
                            console.log(result)
                    }else{
                        console.log("")
                    }
                    }).
                    then(() => {
                        setButton("Submit")
                        if(editUser){
                            setEditUser(false)
                        }
                        navigate("../user/list")
                    })
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

            <h className="titleForm">{editUser ? "Edit User" : "Add User"}</h>
            <hr/>
            <form
                className="formArchiv marginForm" onSubmit={(e)=>{
                    e.preventDefault()
                    }}
            >
                                    
                <h className="formArchiv">Nama</h><br/>
                {error.name ? <p className="errorText">{error.name}</p> : <></>}
                <input value={name} onChange={e => setName(e.target.value)} className={"uploadForm " + (error.name ? "error" : "")} type="text"></input><br/>
                <label className="formArchiv">Username</label><br/>
                {error.username ? <p className="errorText">{error.username}</p> : <></>}
                <input value={username} onChange={e => setUsername(e.target.value)} className={"uploadForm " + (error.username ? "error" : "")} type="text"></input><br/>
                <label className="formArchiv">Password</label><br/>
                {error.password ? <p className="errorText">{error.password}</p> : <></>}
                <input onChange={e => setPass(e.target.value)} className={"formArchiv " + (error.password ? "error" : "")} type="password"></input><br/>
                <label className="formArchiv">Email</label><br/>
                {error.email ? <p className="errorText">{error.email}</p> : <></>}
                <input value={email} onChange={e => setEmail(e.target.value)} className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Hak Akses</label><br/>
                {error.access_levels ? <p className="errorText">{error.access_levels}</p> : <></>}
                <select value={access} onChange={e => setAccessLevel(e.target.value)} className={"uploadForm " + (error.access_levels ? "error" : "")}>
                    <option value={0}>
                        Publik
                    </option>
                    <option value={1}>
                        Terbatas
                    </option>
                    <option value={2}>
                        Rahasia
                    </option>
                    <option value={3}>
                        Admin
                    </option>
                </select><br/>
                <div className="toTheLeft mb10">
                {editUser ? 
                <div className=" ml" onClick={() => {
                    getDetail("http://127.0.0.1:8000/api/delete-user/", detail.id).then(() => {
                        if(editUser){
                            setEditUser(false)
                            navigate("../user/list")
                        }
                    })    
                }
                    }>
                    Delete
                </div> : <></>}
                <div className="button" onClick={() => {
                    handleSubmit()}
                    }>
                    {buttonString}
                </div>
                
            </div>
            </form>
        </div>
        
    )
}
const DocumentForm= ({type}) => {
    let formData = new FormData()

    const editUser = useStoreState((state) => state.editUser)

    const detail = useStoreState((state) => state.detail)

    const [nomor, setNomor] = useState(editUser ? detail.nomor_surat : "")
    const [file, setFile] = useState("")
    const [nama, setNama] = useState(editUser ? detail.nama_surat : "")
    const [tipe, setTipe] = useState(editUser ? detail.tipe : "1")
    const [hak, setHak] = useState(editUser ? detail.access_level : "0")
    const [dis, setDis] = useState(editUser ? detail.disposisi : "")
    const [pen, setPen] = useState(editUser ? detail.penerima : "")
    const [peng, setPeng] = useState(editUser ? detail.pengirim : "")
    const [ret, setRet] = useState(editUser ? detail.jenis_retensi : "1")
    const [tgl, setTgl] = useState(editUser ? detail.tanggal_retensi: "")
    const [aku, setAku] = useState(editUser ? detail.nomor_akuisisi : "")
    const [tglAku, setTglAku] = useState(editUser ? detail.tanggal_akuisisi : "")
    const [pemegang, setPemegang] = useState(editUser ? detail.pemegang_hak : "")
    const [error, setError] = useState({})
    let navigate  = useNavigate();

   

   const setEditUser = useStoreActions((state) => state.setEditUser)


    useEffect(() => {

        // returned function will be called on component unmount 
        return () => {
            setEditUser(false)
        }
      }, [])
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
        hak ? formData.append("access_level", hak): console.log("");
        pen ?  formData.append("penerima", pen) :console.log("");
        peng ? formData.append("pengirim", peng) : console.log("");
        ret ? formData.append("jenis_retensi", ret) :console.log("");
        tgl ? formData.append("tanggal_retensi", tgl) : console.log("");
        aku ? formData.append("nomor_akuisisi", aku) : console.log("");
        tglAku ? formData.append("tanggal_akuisisi", tglAku) : console.log("");
        pemegang ? formData.append("pemegang_hak", pemegang) : console.log("");
        setButton("Mengupload...")

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
        };

        fetch(editUser ? "http://127.0.0.1:8000/api/surats/" + editUser.id : "http://127.0.0.1:8000/api/create", requestOptions)
        .then(response => response.json())
        .then(result => {if (result.error) {
                                setError(result.error)
                                console.log(result)
                        }else{
                            console.log("")
                        }
                        }).
                        then(() => {
                            setButton("Submit")
                            navigate("../surat/list")
                        })
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
            <h className="titleForm">{editUser ? "Edit" : "Upload Surat"}</h>

            <hr/>
            <form
                className="formArchiv marginForm fuckPMargin" onSubmit={(e)=>{
                    e.preventDefault()
                    }}
            >
                
                <div className="fileUpload">
                    {editUser ?
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
                        <input value={nomor} className={"uploadForm " + (error.nomor_surat ?  " error" : "")} type="text" onChange={e => setNomor(e.target.value)}></input>
                    </div>
                </div>
                <label className="formArchiv">Nama Surat</label><br/>
                {error.nama_surat ? <p className="errorText">{error.nama_surat}</p> : <></>}
                <input value={nama} className={"formArchiv" + (error.nama_surat ?  " error" : "")} type="text" onChange={e => setNama(e.target.value)}></input><br/>
                <label className={"formArchiv" }>Tipe Surat</label><br/>
                {error.tipe ? <p className="errorText">{error.tipe}</p> : <></>}
                <select  className={"formArchiv" + (error.tipe ?  " error" : "")} onChange={e => setTipe(e.target.value)}>
                    <option value={1}>
                        Keluar
                    </option>
                    <option value={2}>
                        Masuk
                    </option>
                </select><br/>
                <label className="formArchiv">Hak Akses</label><br/>
                {error.access_level ? <p className="errorText">{error.access_level}</p> : <></>}
                <select className={"formArchiv" + (error.access_level ? " error" : "")} onChange={e => setHak(e.target.value)}>
                    <option value={0}>
                        Publik
                    </option>
                    <option value={1}>
                        Terbatas
                    </option>
                    <option value={2}>
                        Rahasia
                    </option>
                </select><br/>
                <label className="formArchiv">Disposisi</label><br/>
                <textarea value={dis} className="formArchiv" type="text" onChange={e => setDis(e.target.value)}></textarea><br/>
                <label className="formArchiv">Penerima</label><br/>
                {error.penerima ? <p className="errorText">{error.penerima}</p> : <></>}
                <input value={pen} className={"formArchiv " + (error.penerima ?  " error" : "")} type="text" onChange={e => setPen(e.target.value)}></input><br/>
                <label className="formArchiv">Pengirim</label><br/>
                {error.pengirim ? <p className="errorText">{error.pengirim}</p> : <></>}
                <input value={peng} className={"formArchiv " + (error.pengirim ?  " error" : "")} type="text" onChange={e => setPeng(e.target.value)}></input><br/>
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
                {
                    ret == 3 ? 
                    <></>
                    : 
                    <>
                <label className="formArchiv">Tanggal Retennsi</label><br/>
                <input value={tgl} className="formArchiv" type="date" onChange={e => setTgl(e.target.value)}></input><br/>
                </>
                    }
                <label className="formArchiv">Nomor Akuisisi</label><br/>
                {error.nomor_akuisisi ? <p className="errorText">{error.nomor_akuisisi}</p> : <></>}
                <input value={aku} className={"formArchiv " + (error.nomor_akuisisi ?  " error" : "")} type="text" onChange={e => setAku(e.target.value)}></input><br/>
                
                    <label className="formArchiv">Tanggal Akuisisi</label><br/>
                    <input value={tglAku} className="formArchiv" type="date" onChange={e => setTglAku(e.target.value)}></input><br/>
                    
                
                <label className="formArchiv">Pemegang Hak</label><br/>
                {error.pemegang_hak ? <p className="errorText">{error.pemegang_hak}</p> : <></>}
                <input value={pemegang} className={"formArchiv " + (error.pemegang_hak ?  " error" : "")} type="text" onChange={e => setPemegang(e.target.value)}></input><br/>
                
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