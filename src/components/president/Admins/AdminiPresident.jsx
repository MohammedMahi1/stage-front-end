import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminiPresident = () => {
    const [admin, setAdmin] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_pre");
            if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/president/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/president/",
                headers:{
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                    }
            })
            setAdmin(res.data.AdminAdministratives);
        }
        affiche();
    }, []);
    return (

        <div>
            <table className='table'>
                <tr className='header'>
                    <th colSpan={20}>Admins Administrative</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>ID</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Full name</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Email</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>CIN</th>
                    <th></th>
                </tr>
                {
                    admin.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td></td>
                                <td>{e.id}</td>
                                <td></td>
                                <td>{e.fullname}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                                <td>{e.CIN}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default AdminiPresident
