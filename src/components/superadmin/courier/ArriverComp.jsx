import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArriverComp = () => {
  const [Arriver, setArriver] = useState([]);
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
          setArriver(res.data.Arriver)
      }
      affiche();
  }, []);
  return (
      <div>
          <table className='table'>
          <tr>
            <th colSpan={7}>Les fichier d'arriver</th>
          </tr>
              <tr>
                  <th>Numero</th>
                  <th>Date de fichier</th>
                  <th>Objectif</th>
                  <th>Expediteur</th>
                  <th>Destinataire</th>
                  <th>Interet</th>
                  <th>Employe</th>
              </tr>
              {
                  Arriver.map((e) => {
                      return (
                          <tr>
                              <td>{e.numer}</td>
                              <td>{e.date_de_fichier}</td>
                              <td>{e.objectif}</td>
                              <td>{e.expediteur}</td>
                              <td>{e.destinataire}</td>
                              <td>{e.interet}</td>
                              <td>{e.employe}</td>
                          </tr>
                      )
                  })
              }
          </table>
      </div>
  )
}

export default ArriverComp