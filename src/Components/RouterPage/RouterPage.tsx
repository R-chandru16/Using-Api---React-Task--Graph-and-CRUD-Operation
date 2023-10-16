import React, { } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
import { LaunchPage } from '../LaunchPage/LaunchPage';

export const RouterPage: React.FC = () => {
  
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<LoginPage/>}></Route>
            
            <Route path='/LaunchPage'element={<LaunchPage />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}