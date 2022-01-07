import React, {useState} from "react";
import '../assets/css/Dashboard.css'

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
                        <input className="" type="file"></input>
                    </div>
                    }
                    <div className="uploadHere">
                        <h className="formArchiv">Nama Surat</h><br/>
                        <input className="uploadForm " type="text"></input>
                    </div>
                </div>
                <label className="formArchiv">Tipe Surat</label><br/>
                <select className="formArchiv">
                    <option>
                        Keluar
                    </option>
                    <option>
                        Masuk
                    </option>
                </select><br/>
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
                <label className="formArchiv">Disposisi</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Penerima</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Pengirim</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Jenis Retensi</label><br/>
                <select className="formArchiv">
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
                <input className="formArchiv" type="date"></input><br/>
                
                <label className="formArchiv">Sumber Akuisisi</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Tanggal Akuisisi</label><br/>
                <input className="formArchiv" type="date"></input><br/>
                <label className="formArchiv">Pendonor</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Tanggal Donor</label><br/>
                <input className="formArchiv" type="date"></input><br/>
                <label className="formArchiv">Nomor Akuisisi</label><br/>
                <input className="formArchiv" type="number"></input><br/>
                <label className="formArchiv">Area Pendonor</label><br/>
                <input className="formArchiv" type="text"></input><br/>
                <label className="formArchiv">Area Pemegang Hak</label><br/>
                <input className="formArchiv" type="text"></input><br/>
            </form>
        </div>
        
    )
}

export {
    UserForm,
    DocumentForm
};