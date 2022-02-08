import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/css/Login.css'
import loginImage from '../../assets/img/login2.png'

const Login = () => {
    const [uname, setName] = useState("")
    const [pass, setPass] = useState("")
    const setAuthorized = useStoreActions((state) => state.setAuthorized)
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
                                    console.log(uname)
                                    console.log(pass)
                                
                                    setAuthorized(true)
                                    navigate("/main/dashboard");
                                
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
            </div>
        </div>
    )
}

export default Login