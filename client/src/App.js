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
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
/* ---------- */

const App = () =>  {
  const URL = 'http://localhost:3001/recipes';
  const location = useLocation();

  const [recipes, setRecipes] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() =>  {
    axios(`${URL}`)
    .then(response => setRecipes(response.data))
    .catch(error => error.message)
}, [])

  const searchRecipe = (title) => {
   
      axios(`${URL}?title=${title}`)
      .then((response) => response.data)
      .then((data) => {
         if (data.title) {
            setResults([data]);
          } 
        else {
          alert('This recipe dont exist');
          }

      });
}

/* const newRecipe = async (recipeCreate) => {

  const { title, image, summary, healthScore, stepByStep, diet } = recipeCreate;
  
   const {data} = await axios(${URL}/create`);


 } */

  return (
    <div className="App">
      { location.pathname === '/' || location.pathname.includes('detail') ? null : <NavBar searchRecipe={searchRecipe} /> }

        <Routes>
            <Route path='/' element={ <LandingPage/> } />
            <Route path='/home' element={ <Home recipes={recipes} results={results}/> } /> 
            <Route path='/detail/:id' element={ <Details/> } />
            <Route path='/createRecipe' element={ <Create /* newRecipe={newRecipe} *//> } />
            <Route path='/error404' element={ <Error/> } /> 
        </Routes> 
   
    </div>
  );
}

export default App;