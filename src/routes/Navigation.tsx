import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import logo from '../logo.svg'

import { ShoppingPage } from "./2-components-patterns/pages"



export const Navigation = ()=>{
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to='/home' className={({isActive}) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About page</h1>} />
                    <Route path="users" element={<h1>Users page</h1>} />
                    <Route path="/home" element={<ShoppingPage />} />
                    <Route path="/*" element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}