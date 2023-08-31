   /* COMPONENTS */
   import styles from './home.module.css';
   import Cards from "../../components/Cards/Cards";
   import Paginated from "../../components/Paginated/Paginated";
   import Filters from '../../components/Filters/Filters';
   import Loader from '../../components/Loader/loader';
   import Modal from '../../components/Modal/modal';
   /* ---------- */

   /* HOOKS */
   import React, { useEffect } from "react";
   import { useDispatch, useSelector } from 'react-redux';
   /* ---------- */

   /* ACTIONS */
   import { getAllRecipes, 
            filterRecipes } from '../../redux/actions/actionsRecipes';

   import { hideModal } from '../../redux/actions/actionsModal';
   /* ---------- */

   const Home = () => {
      
      const dispatch = useDispatch();

      const { isModalOpen } = useSelector(state => state.modal);

      const handleCloseModal = () => {
        dispatch(hideModal());
      };

      const { allRecipes, filterRecipesStorage, loading} = useSelector(state => state.recipes);

      const { pageActual, recipesPerPage } = useSelector(state => state.pagination);

      //! DEFINO LOS INDICES INICIALES Y FINALES PARA RENDERIZAR LAS RECETAS POR PAGINA ACTUAL
      const totalPages = Math.ceil(filterRecipesStorage.length / recipesPerPage);
      
      const initialIndex = (pageActual - 1) * recipesPerPage;

      const finishIndex = initialIndex + recipesPerPage;

      const recipesToShow = filterRecipesStorage.slice(initialIndex, finishIndex);
      
      useEffect(() => {
         !filterRecipesStorage.length && dispatch(getAllRecipes())
   
         filterRecipesStorage.length !== allRecipes.length && dispatch(filterRecipes())

      }, [dispatch, allRecipes.length, filterRecipesStorage.length]);
     
/* ------------------------------------------------------------- */ 
return ( 
   <div className={styles.container}>
   <style>
      { /* Estilos de scroll */ }
        {`
          ::-webkit-scrollbar {
            width: 12px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #ecd39c;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #edc672;
          }
        `}
   </style>

      
      {isModalOpen && (
        <Modal handleOk={handleCloseModal} message="No recipes found with that name" />
        )}

        {/* Muestra el loader mientras las dietas 
        y las recetas se están cargando */}
      {loading && <Loader />}
         <div className={styles.filtersContainer}>
         <Filters />

         </div>

         <div style={{marginTop: '100px'}}>
         <Paginated totalPages={totalPages}/>
         </div>

         <div className={styles.cardContainer}>
         
         {!loading && <Cards recipesToShow={recipesToShow}/> } 
         
         </div>

         <Paginated totalPages={totalPages}/>

      </div>
   )
};
/* ------------------------------------------------------------- */ 

export default Home;
/* ------------------------------------------------------------- */ 