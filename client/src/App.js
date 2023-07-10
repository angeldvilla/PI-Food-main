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
import axios from 'axios';
import { useState } from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
/* ---------- */

const App = () =>  {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = (title) => {
   
      axios(`http://localhost:3001/recipes?title=${title}`)
      .then((response) => response.data)
      .then((data) => {
         if (data.title) {
            setRecipes(recipes => [...recipes, data]);
          } 
        else {
          alert('This recipe dont exist');
          }

      });
}

  return (
    <div className="App">
      { location.pathname === '/' || location.pathname.includes('detail') ? null : <NavBar searchRecipe={searchRecipe} />}

        <Routes>
            <Route path='/' element={ <LandingPage/> } />
            <Route path='/home' element={ <Home/> } /> 
            <Route path='/detail/:id' element={ <Details/> } />
            <Route path='/createRecipe' element={ <Create/> } />
            <Route path='/error404' element={ <Error/> } /> 
        </Routes> 
   
    </div>
  );
}

export default App;