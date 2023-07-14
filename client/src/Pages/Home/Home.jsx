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

      const { pageActual, recipesPerPage } = useSelector(state => state.pagination);

      const startIndex = (pageActual - 1) * recipesPerPage;
      const endIndex = startIndex + recipesPerPage;
      const recipesToShow = allRecipes.slice(startIndex, endIndex);
      

      useEffect(() => {
      dispatch(getAllRecipes())
      }, [dispatch])

   return ( 
      <div>
         <h1 className={styles.title}>RECIPES</h1>

         <Filters />

         <Cards recipesToShow={recipesToShow}/>
         
         <Paginated />
      
      </div>
   )
   }

   export default Home;