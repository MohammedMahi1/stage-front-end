import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DepartComp = () => {
  const [Depart, setDepart] = useState([]);
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
          setDepart(res.data.Depart)
      }
      affiche();
  }, []);
  return (
      <div>
          <table className='table'>
          <tr>
            <th colSpan={12}>Les fichier de depart</th>
          </tr>
              <tr>
                  <th>Numero</th>
                  <th>Date de fichier</th>
                  <th>Objectif</th>
                  <th>Expediteur</th>
                  <th>Type de class</th>
                  <th>Interet</th>
                  <th>Employe</th>
                  <th>Type de courier</th>
                  <th>Date de commission</th>
                  <th>Date specifiee</th>
              </tr>
              {
                  Depart.map((e) => {
                      return (
                          <tr>
                              <td>{e.numer}</td>
                              <td>{e.date_de_fichier}</td>
                              <td>{e.objectif}</td>
                              <td>{e.expediteur}</td>
                              <td>{e.type_de_class}</td>
                              <td>{e.interet}</td>
                              <td>{e.employe}</td>
                              <td>{e.type_de_courier}</td>
                              <td>{e.date_de_commission}</td>
                              <td>{e.date_specifiee}</td>
                          </tr>
                      )
                  })
              }
          </table>
      </div>
  )
}

export default DepartComp