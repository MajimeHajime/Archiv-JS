import React from "react";
import { truncateString } from "../modules/modulesCustom";

const ListSurat = (props) => {
    const info = props.info
    return(
        <div className="listHead listItem"  onClick={props.onClick}>
            <div className="penerima">
                <p>{info.penerima}</p>
            </div>
            <div className="tanggal">
                <p>{info.tanggal}</p>
            </div>
            <div className="suratName">
                <p>{
                // truncateString(info.document, 45)
                info.document
                }</p>
            </div>
            <div className="securityGrade">
                <p>{info.grade}</p>
            </div>
        </div>
    )
}

export default ListSurat