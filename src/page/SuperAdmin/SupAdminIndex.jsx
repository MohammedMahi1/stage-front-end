import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
const SupAdminIndex = () => {
    const [Donne, setDonne] = useState([]);
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
            setDonne(res.data.datas)
        }
        affiche();
    }, []);
    return (
        <div className='profile-container'>
     
           {
               Donne.map((e)=>{
                return(
                    <>
                        <span>Votre nome complet : {e.fullname}</span>
                        <span>Votre CIN : {e.CIN}</span>
                        <span>Votre Address email : {e.email}</span>
                        <span>Votre Username : {e.username}</span>
                    </>
                )
               })
        }

        </div>
    )
}

export default SupAdminIndex