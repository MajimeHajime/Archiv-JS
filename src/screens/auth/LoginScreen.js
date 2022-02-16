import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/css/Login.css'
import loginImage from '../../assets/img/login2.png'
import { loginApi } from "../../peasy/api";

const Login = () => {
    const [uname, setName] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)
    const [errorDetail, setDetail] = useState("")
    const setAuthorized = useStoreActions((state) => state.setAuthorized)
    const setUserData = useStoreActions((state) => state.setUserData)
    const authorized = useStoreState((state) => state.authorized)


    let navigate  = useNavigate();
    return(
        <div className="center">
            <div className="card">
                <div className="flexHorizon">
                    {/* Left side */}
                    <div className="flexVertical">
                        <div>
                            <p className="mont title">Wellcome to | A R C H V</p>
                            <p className="mont text">Login</p>
                        </div>
                        <div>
                            <form className="login" onSubmit={(e)=>{
                                    e.preventDefault()
                                    loginApi('http://127.0.0.1:8000/api/login/', {
                                        username: uname,
                                        password: pass
                                    }).then(
                                        data => {
                                            if (data.message == "success"){ 
                                                setUserData(data.data)
                                                setAuthorized(true)
                                                navigate("/main/dashboard")}
                                            else if(data.message == "password"){
                                                setError(true)
                                                setDetail(data.error)
                                            }else{
                                                setError(true)
                                                setDetail("User tidak ditemukan")
                                            }
                                        }
                                    )
                                        
                                    
                                }}>
                                <label htmlFor="email">Username</label><br/>
                                <input className="login" type="text" id="uname" name="uname" onChange={(e)=>setName(e.target.value)} required></input><br/><br/>
                                <label htmlFor="email">Password</label><br/>
                                <input className="login" type="password" id="password" name="password"  onChange={(e)=>setPass(e.target.value)} required></input><br/><br/>
                                <input type="submit" value="LOGIN" />
                                <Link to="/main/dashboard">
                                <input  className="login" type="button" value="Guest"/>
                                </Link>

                            </form>
                        </div>
                    </div>
                    {/* Right side */}
                        <img className="imgRound" src={loginImage}/>
                </div>
                {
                error ?
                <div className="errorLogin">
                    <p>{errorDetail}</p>
                </div>
                : 
                <></>
                }
            </div>
        </div>
    )
}

export default Login