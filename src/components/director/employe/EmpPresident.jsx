import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmpDirector = () => {
  const [Employe, setEmploye] = useState([]);

  useEffect(() => {
    const affiche = async () => {
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/api/president/",
      })
      setEmploye(res.data.Employe)
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
          <th className='space-header'></th>
          <th className='space-header'></th>
          <th className='bordred-head'>ID</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Full name</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Email</th>
          <th className='space-header'></th>
          <th className='bordred-head'>CIN</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Interet</th>
          <th className='space-header'></th>
          <th className='bordred-head'>Type de classe</th>
          <th className='space-header'></th>
        </tr>
        {
          Employe.map((e) => {
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

export default EmpDirector