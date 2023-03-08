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
          <th colSpan={20}>Table des Employes</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th className='bordred-head'>ID</th>
          <th></th>
          <th className='bordred-head'>Full name</th>
          <th></th>
          <th className='bordred-head'>Email</th>
          <th></th>
          <th className='bordred-head'>CIN</th>
          <th></th>
          <th className='bordred-head'>Interet</th>
          <th></th>
          <th className='bordred-head'>Type de classe</th>
          <th></th>
        </tr>
        {
          Employe.map((e) => {
            return (
              <tr>
                <td></td>
                <td><input type="checkbox" name={e.id} id="" /></td>
                <td>{e.id}</td>
                <td></td>
                <td>{e.fullname}</td>
                <td></td>
                <td>{e.email}</td>
                <td></td>
                <td>{e.CIN}</td>
                <td></td>
                <td>{e.interet}</td>
                <td></td>
                <td>{e.type}</td>
                <td></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default EmployesComp