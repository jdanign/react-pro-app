import { Suspense } from "react"
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import { ROUTES } from "./routes"

import logo from '../logo.svg'




export const Navigation = ()=>{
    return (
        <Suspense>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                ROUTES.map(({to, name}) => 
                                    <li key={to}>
                                        <NavLink 
                                            to={to} 
                                            className={({isActive}) => isActive ? 'nav-active' : ''}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            ROUTES.map(({path, Component}) => 
                                <Route key={path} path={path} element={<Component />} />)
                        }

                        <Route path='/*' element={<Navigate to={ROUTES[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}