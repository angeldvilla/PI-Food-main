import './App.css';

/* COMPONENTS */
import LandingPage from './Pages/Landing Page/LandingPage';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Detail';
import Create from './Pages/Create/Create';
import Error from './Pages/Error/Error';
/* ---------- */


/* HOOKS */
import {Routes, Route } from 'react-router-dom';
/* ---------- */

const App = () =>  {

  return (
    <div className="App">

        <Routes>
            <Route path='/' element={ <LandingPage/> } />
            <Route path='/home' element={ <Home/> } /> 
            <Route path='/detail/:idRecipe' element={ <Details/> } />
            <Route path='/createRecipe' element={ <Create/> } />
            <Route path='/error404' element={ <Error/> } /> 
        </Routes> 
   
    </div>
  );
}

export default App;