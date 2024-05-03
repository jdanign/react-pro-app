import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import { FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../3-forms/pages"

import logo from '../logo.svg'



export const Navigation = ()=>{
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to='/register' className={({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstract' className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Abstract</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abstract" element={<FormikAbstract />} />
                    <Route path="/home" element={<main><h1>Home page</h1></main>} />
                    <Route path="/*" element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}