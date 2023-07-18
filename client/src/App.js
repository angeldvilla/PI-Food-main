/* COMPONENTS */
import NavBar from './components/NavBar/NavBar';
import './App.css';
/* ---------- */

/* PAGES */
import LandingPage from './Pages/Landing Page/LandingPage';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Detail';
import Create from './Pages/Create/Create';
import Error from './Pages/Error/Error';
/* ---------- */

/* HOOKS */
import React, { useEffect } from "react";
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
/* ---------- */

const App = () =>  {

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!['/', '/home', '/createRecipe', '/detail/:id'].includes(location.pathname) 
      && location.pathname === '/*') {
      navigate('/*');
    }
  }, [location, navigate]);
/* ------------------------------------------------------------- */ 
 
  return (
    <div className="App">
      
      { location.pathname === '/' || location.pathname === '/createRecipe' || location.pathname.includes('detail') ? null : <NavBar /> }

        <Routes>
            <Route path='/' element={ <LandingPage/> } />
            <Route path='/home' element={ <Home /> } /> 
            <Route path='/detail/:id' element={ <Details/> } />
            <Route path='/createRecipe' element={ <Create /> } />
            <Route path='/*' element={ <Error/> } /> 
        </Routes> 
   
    </div>
  );

};
/* ------------------------------------------------------------- */ 

export default App;
/* ------------------------------------------------------------- */ 