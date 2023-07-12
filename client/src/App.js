import React from "react";
import './App.css';

/* PAGES */
import LandingPage from './Pages/Landing Page/LandingPage';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Detail';
import Create from './Pages/Create/Create';
import Error from './Pages/Error/Error';
/* ---------- */

/* COMPONENTS */
import NavBar from './components/NavBar/NavBar';
/* ---------- */

/* HOOKS */
import {Routes, Route, useLocation } from 'react-router-dom';
/* ---------- */

const App = () =>  {

  const location = useLocation();
  
  return (
    <div className="App">
      { location.pathname === '/' || location.pathname.includes('detail') ? null : <NavBar /> }

        <Routes>
            <Route path='/' element={ <LandingPage/> } />
            <Route path='/home' element={ <Home /> } /> 
            <Route path='/detail/:id' element={ <Details/> } />
            <Route path='/createRecipe' element={ <Create /> } />
            <Route path='/error404' element={ <Error/> } /> 
        </Routes> 
   
    </div>
  );

}

export default App;