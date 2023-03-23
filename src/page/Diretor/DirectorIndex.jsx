import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Upload from '../../components/Itemes/Upload';
const DirectorIndex = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_dir");
        if (accesToken === "undefined" || accesToken === null || accesToken === 0) {
            navigate('/director/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/director/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setUsername(res.data.datas.username)
        }
        
        affiche();
    }, []);
    return (
        <div className='profile-container'>
    
            <div className="profile-controle">
                <div className="profile-header">
                    <div className="profile-img-controle">
                    <div className='img-container'>
                        <Upload person={"director"}/>
                    </div>
                        <p className='profile-info-img'>Personnalisez votre compte avec une photo.</p>
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre nom complete</p>
                        <p >{fullname}</p>
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
                        <p className='profile-info'>Votre username</p>
                        <p >{username}</p>
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre email</p>
                        <p >{email}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DirectorIndex