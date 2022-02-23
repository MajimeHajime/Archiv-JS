import { faEdit, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import pfp from '../assets/img/pfp.jpg'
import '../assets/css/Dashboard.css'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useNavigate } from 'react-router-dom'
import { getDetail } from '../peasy/api'

const UserProfile = () => {
    const setContent = useStoreActions((state) => state.setContent)
    let navigate = useNavigate()
    const userData = useStoreState((state)=> state.userData)
    const setDetail = useStoreActions((state) => state.setDetail)
    const setEditUser = useStoreActions((state) => state.setEditUser)

    return(
        <div className='suratContainer'>
            <div className="profileContainer">
                <div className='informationUser ratioUser'>
                    <div className='infoText fuckPMargin centeringUser'>
                        {/* <img src={pfp} className='userPict'/> */}
                        <p>
                            {userData.name}
                        </p>
                        <hr/>
                        <p>
                            Hak akses : {userData.access_levels}
                        </p>
                    </div>
                </div>
                <div className='informationUser ratioUser1'>
                    <div className='flexBetween'>
                        <p className='userHeader'>Profile Details</p> 
                        <div onClick={
                                e => {
                                    getDetail("http://127.0.0.1:8000/api/detail-user/", userData.id).then(data=> {
                                        setEditUser(true)
                                        setDetail(data.data)}).then(() => navigate("../adduser"))
                                }
                            
                        } className='pointerCursor editButton'>
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
                                <p>{userData.name}</p>
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
                                <p>{userData.id}</p>
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
                                <p>{userData.username}</p>
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
                                <p>{userData.email}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default UserProfile;