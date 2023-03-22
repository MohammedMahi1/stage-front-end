import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SupDirector = () => {
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/director/",
            })
            setAdmin(res.data.SuperAdmin);
        }
        affiche();
    }, []);
    return (

        <div>
            <table className='table'>
                <tr className='header'>
                    <th colSpan={20}>Admins de bureau d'order</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>ID</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Full name</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>CIN</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>username</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Email</th>
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
                                <td>{e.CIN}</td>
                                <td></td>
                                <td>{e.username}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default SupDirector
