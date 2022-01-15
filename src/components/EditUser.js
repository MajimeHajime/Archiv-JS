import { useStoreState } from "easy-peasy";
import React from "react";
import { DocumentForm, UserForm } from "./Form";
import HalamanSurat from "./halamanSurat";

const EditUser = () => {
    let type = {
        title: "Edit User",
        edit: true
    }
    return(
        <>
            <UserForm type={type}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default EditUser;