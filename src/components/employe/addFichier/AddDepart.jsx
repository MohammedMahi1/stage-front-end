import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddDepart = () => {
    const [dateFichier, setDateFichier] = useState('');
    const [expediteur, setExpediteur] = useState('');
    const [objectif, setObjectif] = useState('');
    const [interet, setInteret] = useState('humain');
    const [employere, setEmployere] = useState('');
    const [typeDeClasse, setTypeDeClasse] = useState('');
    const [typeDeCourier, setTypeDeCourier] = useState('');
    const [dateDeCommission, setDateDeCommission] = useState('');
    const [dateSpecifiee, setDateSpecifiee] = useState('');
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
            setDateFichier(date)
            setTypeDeClasse(res.data.datas.type);

        }
        affiche();
    }, []);
    
    const addDepart = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('expediteur', expediteur);
        formData.append('objectif', objectif);
        formData.append('interet', interet);
        formData.append('date_de_fichier', dateFichier)
        formData.append('employere', employere);
        formData.append('type_de_class', typeDeClasse);
        formData.append('type_de_courier', typeDeCourier);
        formData.append('date_de_commission', dateDeCommission);
        formData.append('date_specifiee', dateSpecifiee);

        const accesToken = localStorage.getItem("accessToken_emp");

        if (accesToken === "undefined" || accesToken === 'null' ) {
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
            navigate("/employe/depart")
        })

    }
    return (
        <div>
            <form onSubmit={addDepart}>
                <div className='form form-container'>
                    <div className="full-childe">
                        <div className='form-controle'>
                            <input type="text" name="expediteur" value={expediteur} onChange={(e) => setExpediteur(e.target.value)} placeholder="Entrer l'expediteur" />
                        </div>
                        <div className='form-controle'>
                            <input type="text" name="type_de_courier" value={typeDeCourier} onChange={(e) => setTypeDeCourier(e.target.value)} placeholder="Entrer le type de courier" />
                        </div>
                        <div className="form-controle childe-6">
                            <input type="date" name="date_de_commission" value={dateDeCommission} onChange={(e) => {setDateDeCommission(e.target.value)}} />
                            <span className='info-text'>date de commission</span>
                        </div>
                        <div className="form-controle">
                            <input type="date" name="date_specifiee" value={dateSpecifiee} onChange={(e) => setDateSpecifiee(e.target.value)} />
                            <span className='info-text'>date specifiee</span>
                        </div>
                        <div className="object-controle">
                            <textarea name="objectif" className='object' value={objectif} onChange={(e) => setObjectif(e.target.value)} placeholder="Entrer l'objet de fichier"></textarea>
                        </div>
                        <div className="form-controle">
                            <button className='btn'>Ajouter cette fichier</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDepart