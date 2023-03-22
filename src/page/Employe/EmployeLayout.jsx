import axios from 'axios';
import React, { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill } from 'react-icons/bs';
import { RiFolderAddFill } from 'react-icons/ri';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Show from '../../components/Itemes/Show';

const EmployeLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_emp");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
                navigate('/employe/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
        }
        affiche();
    }, []);

    return (

        <div className='container'>
            <nav className='navbar'>
                <div className='left-side'>

                    <img className='logo-royal-maroc' src='../royal-maroc.png' />
                    <h5>Bureau d'order</h5>
                    <div className='search-bar'>
                    <i className="pi pi-search logo-search"></i>
                        <input type="text" className='search' placeholder='Rechrcher des fichier avec le : numero, interet, employer' />
                    </div>
                </div>
                <div className='right-side'>
                    <Show person={"employe"}/>
                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to="/employe/addArriver"><button className='btn-add'><RiFolderAddFill className='logo-icon' /> Ajouter un arriver</button></NavLink>
                    <NavLink to="/employe/addDepart"><button className='btn-add'><RiFolderAddFill className='logo-icon' /> Ajouter un depart</button></NavLink>
                    <NavLink to='/employe/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />Arriver</NavLink>
                    <NavLink to='/employe/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />Depart</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default EmployeLayout