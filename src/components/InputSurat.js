import { useStoreState } from "easy-peasy";
import React from "react";
import { DocumentForm } from "./Form";
import HalamanSurat from "./halamanSurat";

const InputSurat = () => {
    let type = {
        title: "Input Surat",
        edit: false
    }
    return(
        <>
            <DocumentForm type={type}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default InputSurat;