import React from 'react'
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill, BsFillPersonFill } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router-dom'
import Show from '../../../components/Itemes/Show';

const FinenciereLayout = () => {
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
                    <Show person={"administrative"} />

                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to='/administrative/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />Arriver</NavLink>
                    <NavLink to='/administrative/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />Depart</NavLink>
                    <NavLink to='/administrative/employes' className='childrens'><BsFillPersonFill className='logo-icon' />Employes</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default FinenciereLayout