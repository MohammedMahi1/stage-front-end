import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmployesComp = () => {
    const [Employe, setEmploye] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const accesToken = localStorage.getItem("accessToken");
      if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
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
            setEmploye(res.data.Employe)
            console.log(Employe);
        }
        affiche();
    }, []);
  return (
    <div className=''>
      <table className='table'>
      <tr className='header'>
      <th colSpan={12}>Table des Employes</th>
      </tr>
        <tr>
        <th></th>
          <th>ID</th>
          <th>Full name</th>
          <th>Email</th>
          <th>CIN</th>
          <th>Interet</th>
          <th>Type</th>
        </tr>
        {
            Employe.map((e)=>{
                return (
                    <tr>
                    <td><input type="checkbox" name={e.id}/></td>
                        <td>{e.id}</td>
                        <td>{e.fullname}</td>
                        <td>{e.email}</td>
                        <td>{e.CIN}</td>
                        <td>{e.interet}</td>
                        <td>{e.type}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default EmployesComp