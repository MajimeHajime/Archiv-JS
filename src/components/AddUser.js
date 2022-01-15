import { useStoreState } from "easy-peasy";
import React from "react";
import { DocumentForm, UserForm } from "./Form";
import HalamanSurat from "./halamanSurat";

const AddUser = () => {
    let type = {
        title: "Add User",
        edit: false
    }
    return(
        <>
            <UserForm type={type}/>
            <div className="emptySpace"></div>
        </>
    )
}
export default AddUser;