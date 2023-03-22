import React from 'react'

const AdminLayout = () => {
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
            <Show person={"superadmin"} />

        </div>
    </nav>

    <div className='grid-container'>
        <nav className='left-bar'>
            <NavLink to="/superadmin/addadmin"><button className='btn-add'><HiUserAdd className='logo-icon' /> Ajouter un admin</button></NavLink>
            <NavLink to="/superadmin/addemploye"><button className='btn-add'><HiUserAdd className='logo-icon' /> Ajouter un employe</button></NavLink>
            <NavLink to='/superadmin/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />Arriver</NavLink>
            <NavLink to='/superadmin/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />Depart</NavLink>
            <NavLink to='/superadmin/administrative' className='childrens'><RiAdminFill className='logo-icon' />Adminnistrative</NavLink>
            <NavLink to='/superadmin/financier' className='childrens'><RiAdminFill className='logo-icon' />Financiere</NavLink>
            <NavLink to='/superadmin/technique' className='childrens'><RiAdminFill className='logo-icon' />Technique</NavLink>
            <NavLink to='/superadmin/employes' className='childrens'><BsFillPersonFill className='logo-icon' />Employes</NavLink>
        </nav>
        <Outlet />
    </div>

</div>
)
}

export default AdminLayout