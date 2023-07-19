   /* COMPONENTS */
   import styles from './home.module.css';
   import Cards from "../../components/Cards/Cards";
   import Paginated from "../../components/Paginated/Paginated";
   import Filters from '../../components/Filters/Filters';
   import Loader from '../../components/Loader/loader';
   /* ---------- */

   /* HOOKS */
   import React, { useEffect } from "react";
   import { useDispatch, useSelector } from 'react-redux';
   /* ---------- */

   /* ACTIONS */
   import { getAllRecipes, 
            filterRecipes,
            viewLoader } from '../../redux/actions/actionsRecipes';
   /* ---------- */

   const Home = () => {
      
      const dispatch = useDispatch();

      const { allRecipes, filterRecipesStorage, loading} = useSelector(state => state.recipes);

      const { pageActual, recipesPerPage } = useSelector(state => state.pagination);

      //! DEFINO LOS INDICES INICIALES Y FINALES PARA RENDERIZAR LAS RECETAS POR PAGINA ACTUAL

      const initialIndex = (pageActual - 1) * recipesPerPage;

      const finishIndex = initialIndex + recipesPerPage;

      const recipesToShow = filterRecipesStorage.slice(initialIndex, finishIndex);
      
      useEffect(() => {
         !loading &&

         dispatch(viewLoader())
   
         !filterRecipesStorage.length && dispatch(getAllRecipes())
   
         filterRecipesStorage.length !== allRecipes.length && dispatch(filterRecipes())

      }, [dispatch, loading])
/* ------------------------------------------------------------- */ 
return ( 
   
   <div className={styles.container}>

      {/* Muestra el loader mientras las dietas 
      y las recetas se están cargando */}
      
      {loading && <Loader />}

         <div className={styles.filtersContainer}>
         <Filters />

         </div>

         <div className={styles.cardContainer}>
         
         {!loading && <Cards recipesToShow={recipesToShow}/> } 
         
         </div>

         <Paginated />

      </div>
   )
};
/* ------------------------------------------------------------- */ 

export default Home;
/* ------------------------------------------------------------- */ 