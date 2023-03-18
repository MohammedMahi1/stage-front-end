import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddDepart = () => {
const [dateFichier , setDateFichier] = useState('');
const [destinataire,setDestinataire] = useState('');
const [expediteur, setExpediteur] = useState('');
const [objectif,setObjectif] = useState('');
const [interet, setInteret] = useState('humain');
const [employere, setEmployere] = useState('');
const navigate = useNavigate();
const date = new Date().toISOString().slice(0, 10);

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
        setEmployere(res.data.datas.fullname)
        setInteret(res.data.datas.interet)
        console.log(res.data.datas.fullname);
        setDateFichier(date)
    }
    affiche();
}, []);
    const addDepart = async (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('destinataire', destinataire);
        formData.append('expediteur', expediteur);
        formData.append('objectif', objectif);
        formData.append('interet', interet);
        formData.append('date_de_fichier',dateFichier)
        formData.append('employere',employere);
        const accesToken = localStorage.getItem("accessToken_emp");
        console.log(accesToken);
        if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
            navigate('/employe/login')
          }
          await axios({
          method: "post",
          url: "http://localhost:8000/api/employe/addDepart",
          data: formData,
          headers: {
              "Accept": "application/json",
              "Authorization": 'Bearer ' + accesToken
          }
      }).then(({ data }) => {
      console.log(data.message);
      })
      navigate("/employe/arriver")
      
  }
    return (
        <div>
            <form onSubmit={addDepart}>
                <div className='form form-container'>
                    <div className="full-childe">
                    <div className='form-controle-flex'>
                        <input type="text" name="expediteur" value={expediteur} onChange={(e)=>setExpediteur(e.target.value)} placeholder="Entrer l'expediteur" />
                    </div>
                    <div className='form-controle-flex'>
                        <input type="text" name="destinataire" value={destinataire} onChange={(e)=>setDestinataire(e.target.value)} placeholder="Entrer le destinataire" />
                    </div>
                  <div className="object-controle">
                        <textarea name="objectif" className='object' value={objectif} onChange={(e)=>setObjectif(e.target.value)} placeholder="Entrer l'objet de fichier"></textarea>
                    </div>
                    <div className="form-controle-flex">
                      <div className='btn-controle'>
                          <button className='btn btn-primary'>Ajouter cette fichier</button>
                      </div>
                  </div>
                </div>
                    </div>
            </form>
        </div>
    )
}

export default AddDepart