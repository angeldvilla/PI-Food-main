/* COMPONENTS */
import styles from './home.module.css';
import Cards from "../../components/Cards/Cards";
/* import Paginated from "../../components/Paginated/Paginated"; */
/* ---------- */

/* HOOKS */
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from 'react-redux';
/* ---------- */

/* ACTIONS */
import { getAllRecipes} from '../../redux/actions/actions';
/* ---------- */

const Home = () => {
   
 const dispatch = useDispatch();
 
 const { allRecipes, recipesByName } = useSelector(state => state.recipes);

    useEffect(() => {
     dispatch(getAllRecipes())
    }, [dispatch])


 return( 
    <div>
        <h1 className={styles.title}>RECIPES</h1>
       { /* Verifica si existen resultados de búsqueda */}
         { recipesByName.length > 0 
         ?  ( 
            <Cards allRecipes={recipesByName}/>      
            )
         : (
            <Cards allRecipes={allRecipes}/> 
         )

         }

        {/* <Paginated /> */}
    
    </div>
 )
}

export default Home;