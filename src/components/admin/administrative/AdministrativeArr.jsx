import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdministrativeArr = () => {
    const [Arriver, setArriver] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_administrative");
            if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/administrative/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/admin/administrative/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setArriver(res.data.arriver)
            console.log(res.data.arriver);
        }
        affiche();
    }, []);
    return (
        <div>
            <table className='table'>
                <tr>
                    <th colSpan={20}>Les fichiers d'arriver</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Numero</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Objectif</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Expediteur</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Destinataire</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Employe</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Interet</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Date de fichier</th>
                    <th className='space-header'></th>
                </tr>
                {
                    Arriver.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.numero}</td>
                                <td></td>
                                <td className='ellipsis'><p>{e.objectif}</p></td>
                                <td></td>
                                <td>{e.expediteur}</td>
                                <td></td>
                                <td>{e.destinataire}</td>
                                <td></td>
                                <td>{e.employere}</td>
                                <td></td>
                                <td>{e.interet}</td>
                                <td></td>
                                <td>{e.date_de_fichier}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default AdministrativeArr