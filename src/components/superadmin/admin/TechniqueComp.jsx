import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import TechniqueDelete from '../delete/TechniqueDelete';

const TechniqueComp = () => {
    const [AdminTechniques, setAdminTechniquess] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken");
            console.log(accesToken);
            if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/superadmin/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/superadmin/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setAdminTechniquess(res.data.AdminTechniques)
        }
        affiche();
    }, []);
    return (
        <div>
            <table className='table'>
                <tr className='header'>
                    <th colSpan={20}>Admins Techniques</th>
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
                    <th className='space-header'></th>
                    <th></th>
                    <th className='space-header'></th>
                    <th></th>
                </tr>
                {
                    AdminTechniques.map((e) => {
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
                                <td ><NavLink to={`/superadmin/technique/${e.id}`}><FaEdit className='edit-icon' /></NavLink></td>
                                <td></td>
                                <td ><TechniqueDelete id={e.id} /></td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TechniqueComp