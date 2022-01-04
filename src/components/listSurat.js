import React from "react";

const ListSurat = (props) => {
    const info = props.info
    return(
        <div className="listHead listItem">
            <div className="penerima">
                <p>{info.penerima}</p>
            </div>
            <div className="tanggal">
                <p>{info.tanggal}</p>
            </div>
            <div className="suratName">
                <p>{info.document}</p>
            </div>
            <div className="securityGrade">
                <p>{info.grade}</p>
            </div>
        </div>
    )
}

export default ListSurat