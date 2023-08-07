import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ListOfBonds from "../components/ListOfBonds"
import Tp from "../components/Tp";


const AppRouter = () => {
    return <BrowserRouter>
            
            <div>
                <Routes>
                    <Route path='/listOfBonds' element={<ListOfBonds/>} ></Route>
                    <Route path='/' element={<Tp/>} ></Route>
               </Routes>
            </div>
        </BrowserRouter>
    
}

export default AppRouter
