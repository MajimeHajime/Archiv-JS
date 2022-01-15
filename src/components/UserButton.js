import { faCaretDown, faSignOutAlt, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStoreActions } from 'easy-peasy';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserButton = () => {
    const setContent = useStoreActions((state) => state.setContent)
    const setAuthorized = useStoreActions((state) => state.setAuthorized)
    let navigate = useNavigate();
    return(
        <div className='dropdown' tabIndex={0}>
            <div className='userButton'>
                <div className='leftSide'>
                    <FontAwesomeIcon className='userIcon' icon={faUserCircle}/>
                    <div className='fuckPMargin'>
                        <p>
                            admin
                        </p>
                        <p className='akses'>
                            Akses: 4
                        </p>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
            </div>
            <div className='dropdown-content'>
                <div className='userButtonsContainer' onClick={()=>{navigate("profile")}}>
                    <div className='fuckPMargin buttonsUser'>
                        <FontAwesomeIcon icon={faUser}/>
                        <p>Profile</p>
                    </div>
                </div>
                <div className='userButtonsContainer' onClick={()=>{
                    navigate("/login")
                    setAuthorized(false)
                }}>
                    <div className='fuckPMargin buttonsUser'>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                        <p>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserButton;