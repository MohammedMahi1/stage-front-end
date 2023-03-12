import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
const EmployeIndex = () => {
const [fullname,setFullName] = useState("");
const [email,setEmail] = useState("");
const [CIN,setCIN] = useState("");
const [interet,setInteret] = useState("");
const [type,setType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_emp");
        if (accesToken === undefined || accesToken === null || accesToken === 0) {
            navigate('/employe/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setCIN(res.data.datas.CIN)
            setInteret(res.data.datas.interet)
            setType(res.data.datas.type)
        }
        affiche();
    }, []);
    return (
        <div className='profile-container'>
                        <span>Votre nome complet : {fullname}</span>
                        <span>Votre CIN : {CIN}</span>
                        <span>Votre Address email : {email}</span>
                        <span>Votre Address email : {interet}</span>
                        <span>Votre Address email : {type}</span>
        </div>
    )
}

export default EmployeIndex