import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Layout from './page/Layout';
import ErrPage from './page/error/ErrPage';
import './style/style.css';
import Register from './page/auth/Register';
import SupAdminLogin from './page/SuperAdmin/Auth/SupAdminLogin';
import SupAdminIndex from './page/SuperAdmin/SupAdminIndex';
import SupLayout from './page/SuperAdmin/SupLayout';
import AdministrativeComp from './components/superadmin/admin/AdministrativeComp';
import FinencierComp from './components/superadmin/admin/FinencierComp';
import TechniqueComp from './components/superadmin/admin/TechniqueComp';
import DepartComp from './components/superadmin/courier/DepartComp';
import DepartComp_emp from './components/employe/courier/DepartComp_emp';
import ArriverComp from './components/superadmin/courier/ArriverComp';
import ArriverComp_emp from './components/employe/courier/ArriverComp_emp';
import EmployesComp from './components/superadmin/EmployesComp';
import AddAdmin from './components/superadmin/add/admin/AddAdmin';
import AddEmploye from './components/superadmin/add/employe/AddEmploye';
import AdministrativeEdit from './components/superadmin/edit/admin/AdministrativeEdit';
import FinenciereEdit from './components/superadmin/edit/admin/FinencierEdit';
import TechniqueEdit from './components/superadmin/edit/admin/TechniqueEdit';
import EmployeEdit from './components/superadmin/edit/employe/EmployeEdit';
import EmployeLayout from './page/Employe/EmployeLayout';
import EmployeLogin from './page/Employe/Auth/EmployeLogin';
import EmployeIndex from './page/Employe/EmployeIndex';
import AddArriver from './components/employe/addFichier/AddArriver';
import AddDepart from './components/employe/addFichier/AddDepart';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrPage />,
      children: [
        { element: <Register />, path: '/register' },
        
        // --------------------- Super Admin Routes --------------------------//
        
        {
          element: <SupLayout />, path: '/superadmin',
          children: [
            { element: <SupAdminIndex />, path: '/superadmin' },
            { element: <EmployesComp />, path: '/superadmin/employes' },
            { element: <AdministrativeComp />, path: '/superadmin/administrative/' },
            { element: <FinencierComp />, path: '/superadmin/financier/' },
            { element: <TechniqueComp />, path: '/superadmin/technique/' },
            { element: <FinencierComp />, path: '/superadmin/finencier' },
            { element: <TechniqueComp />, path: '/superadmin/technique' },
            { element: <ArriverComp />, path: '/superadmin/arriver' },
            { element: <DepartComp />, path: '/superadmin/depart' },
            { element: <AddAdmin />, path: '/superadmin/addadmin' },
            { element: <AddEmploye />, path: '/superadmin/addemploye' },
            { element: <AdministrativeEdit />, path: '/superadmin/administrative/:id' },
            { element: <FinenciereEdit />, path: '/superadmin/finenciere/:id' },
            { element: <TechniqueEdit />, path: '/superadmin/technique/:id' },
            { element: <EmployeEdit />, path: '/superadmin/employe/:id' },
          ]
        },
        
        // --------------------- Employe Routes --------------------------//
        
        {
          element: <EmployeLayout />, path: '/employe',
          children: [
            { element: <EmployeIndex />, path: '/employe' },
            { element: <ArriverComp_emp />, path: '/employe/arriver' },
            { element: <DepartComp_emp />, path: '/employe/depart' },
            { element: <AddArriver/>, path: '/employe/addArriver' },
            { element: <AddDepart />, path: '/employe/addArriver' },
          ]
        },
        { element: <SupAdminLogin />, path: "/superadmin/login", index: true },
        { element: <EmployeLogin />, path: "/employe/login", index: true },
      ]
    }

  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
