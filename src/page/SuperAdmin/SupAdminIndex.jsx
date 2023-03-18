import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
const SupAdminIndex = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [CIN, setCIN] = useState("");
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken");
        if (accesToken === undefined || accesToken === null || accesToken === 0) {
            navigate('/superadmin/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/superadmin/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setCIN(res.data.datas.CIN)
            setUsername(res.data.datas.username)
        }
        affiche();
    }, []);
    return (
        <div className='profile-container'>
        <div className='profile-controle'>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre fullname</p>
                        <p >{fullname}</p>
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre username</p>
                        <p >{username}</p>
                    </div>
                </div>
            </div>
            <div className='profile-controle'>
                <div className='profile-header'>
                <div className="profile-data">
                    <p>Profile info</p>
                </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre email</p>
                        <p >{email}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre CIN</p>
                        <p >{CIN}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SupAdminIndex