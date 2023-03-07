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
import ArriverComp from './components/superadmin/courier/ArriverComp';
import EmployesComp from './components/superadmin/EmployesComp';
import AddAdmin from './components/superadmin/add/admin/AddAdmin';
import AddEmploye from './components/superadmin/add/employe/AddEmploye';



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrPage />,
      children: [
        { element: <Register />, path: '/register' },
        {
          element: <SupLayout />, path: '/superadmin',
          children: [
            {
              element: <SupAdminIndex />, path: '/superadmin',
              children: [
                { index: true, element: <EmployesComp />, path: '/superadmin/employes' },
                { element: <AdministrativeComp />, path: '/superadmin/administrative/' },
                { element: <FinencierComp />, path: '/superadmin/financier/' },
                { element: <TechniqueComp />, path: '/superadmin/technique/' },
                { element: <FinencierComp />, path: '/superadmin/finencier' },
                { element: <TechniqueComp />, path: '/superadmin/technique' },
                { element: <ArriverComp />, path: '/superadmin/arriver' },
                { element: <DepartComp />, path: '/superadmin/depart' },
                {element:<AddAdmin/>, path: '/superadmin/addadmin' },
                {element:<AddEmploye/>, path: '/superadmin/addemploye' },
              ]
            },
            { element: <SupAdminLogin />, path: "/superadmin/login", index: true },
          ]
        }

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
