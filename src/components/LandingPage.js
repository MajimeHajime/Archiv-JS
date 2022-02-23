import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Login.css'
import '../assets/css/Dashboard.css'
import ArchV from "../assets/img/logo.png"
import arch from "../assets/img/arch.png"
import Typing from 'react-typing-animation';
// import TypeAnimation from 'react-type-animation';

const LandingPage = () => {
    
    return(
        <div>
            <div className="headerLand">
                <div className='lands'> 
                    <img className="archLand2" src={ArchV}/>
                    <img className="archLand" src={arch}/>

                </div>
               
                <Link to="/login">
                    <div className="buttonLoginLand fuckPMargin">
                        <p>
                            Log In
                        </p>
                    </div>
                </Link>
                

            </div>
            <div className="center">
                <div className='landHoho'>
                <div className='fuckPMargin oneOfAKind'>
                    <Typing
                    hideCursor = {true}>
                    <Typing.Speed ms={50} />
                    <p className='titleScreen'>Ubah cara lama mengelola arsip</p>
                    <Typing.Delay ms={1000} />
                    <p className='titleScreen'>menjadi digital</p>
                    </Typing>
                    <br/>
                    <p>ARCHV merupakan sebuah platform website pengelola arsip berbasis digital
Kami mengembangkan ARCHV atas adanya kebutuhan pengelolaan arsip yang lebih praktis dan cepat. Tujuan utama dari dikembangkannya website ini supaya pihak pengelola arsip maupun dokumen di SMKN 4 Bandung lebih mudah.</p>
                </div>
                <img className="hohoLand" src={ArchV}/>

                </div>
            </div>
        </div>
    )
}
export default LandingPage;