/* COMPONENTS */
import styles from './home.module.css';
import Cards from "../../components/Cards/Cards";
import Paginated from "../../components/Paginated/Paginated";
import Filters from '../../components/Filters/Filters';
/* ---------- */

/* HOOKS */
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from 'react-redux';
/* ---------- */

/* ACTIONS */
import { getAllRecipes} from '../../redux/actions/actionsRecipes';
/* ---------- */

const Home = () => {
   
 const dispatch = useDispatch();
 
 const { allRecipes } = useSelector(state => state.recipes);

    useEffect(() => {
     dispatch(getAllRecipes())
    }, [dispatch])

 return ( 
    <div>
        <h1 className={styles.title}>RECIPES</h1>

        <Filters />

        <Cards allRecipes={allRecipes} />
        
       <Paginated />
    
    </div>
 )
}

export default Home;