import { faEdit, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import pfp from '../assets/img/pfp.jpg'
import '../assets/css/Dashboard.css'
import { useStoreActions } from 'easy-peasy'

const UserProfile = () => {
    const setContent = useStoreActions((state) => state.setContent)

    return(
        <div className='suratContainer'>
            <div className="profileContainer">
                <div className='informationUser ratioUser'>
                    <div className='infoText fuckPMargin centeringUser'>
                        <img src={pfp} className='userPict'/>
                        <p>
                            Admin
                        </p>
                        <hr/>
                        <p>
                            4: Administrator
                        </p>
                    </div>
                </div>
                <div className='informationUser ratioUser1'>
                    <div className='flexBetween'>
                        <p className='userHeader'>Profile Details</p> 
                        <div onClick={()=>setContent("Edit User")} className='pointerCursor editButton'>
                            <FontAwesomeIcon icon={faEdit}/>
                        </div>
                    </div>
                    <div className='userInfo'>
                        <div className='infoTextContainer'>
                            <div className='ratioText1 fuckPMargin infoText'>
                                <p>User</p>
                            </div>
                            <div className='ratioText2 fuckPMargin infoText'>
                                <p>:</p>
                            </div>
                            <div className='ratioText3 fuckPMargin infoText'>
                                <p>Nama Admin</p>
                            </div>
                        </div>
                        <div className='infoTextContainer'>
                            <div className='ratioText1 fuckPMargin infoText'>
                                <p>ID</p>
                            </div>
                            <div className='ratioText2 fuckPMargin infoText'>
                                <p>:</p>
                            </div>
                            <div className='ratioText3 fuckPMargin infoText'>
                                <p>02</p>
                            </div>
                        </div>
                        <div className='infoTextContainer'>
                            <div className='ratioText1 fuckPMargin infoText'>
                                <p>Username</p>
                            </div>
                            <div className='ratioText2 fuckPMargin infoText'>
                                <p>:</p>
                            </div>
                            <div className='ratioText3 fuckPMargin infoText'>
                                <p>Admin</p>
                            </div>
                        </div>
                        <div className='infoTextContainer'>
                            <div className='ratioText1 fuckPMargin infoText'>
                                <p>Email</p>
                            </div>
                            <div className='ratioText2 fuckPMargin infoText'>
                                <p>:</p>
                            </div>
                            <div className='ratioText3 fuckPMargin infoText'>
                                <p>emailadmin@gmail.com</p>
                            </div>
                        </div>
                        <div className='infoTextContainer'>
                            <div className='ratioText1 fuckPMargin infoText'>
                                <p>Password</p>
                            </div>
                            <div className='ratioText2 fuckPMargin infoText'>
                                <p>:</p>
                            </div>
                            <div className='ratioText3 fuckPMargin infoText'>
                                <p>**************</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default UserProfile;