/* COMPONENTS */
import style from './paginaStyle.module.css';
/* ----------------- */

/* HOOKS */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

/* ACTIONS */
import { pagination } from "../../redux/actions/actionsPagination";
/* ----------------- */

const Paginated = () => {
    
   const dispatch = useDispatch(); 
   
   const { pageActual, recipesPerPage } = useSelector(state => state.pagination);
   
   const { filterRecipesStorage } = useSelector(state => state.recipes);

   const totalPages  = Math.ceil(filterRecipesStorage.length / recipesPerPage);

   const handleChangePage = (pageNumber) => {
       dispatch(pagination(pageNumber))
   };

   const numbersPage = () => {
    let arrNumbers = [];

      for(let page = 1; page <= totalPages; page++){
         arrNumbers.push(
         <button key={page} onClick={() => handleChangePage(page)}> 
            {page}
         </button>
         )
      }
      return arrNumbers;
   };

/* ------------------------------------------------------------- */  

return(

    <div className={style.container}>

        <button 
        onClick={() => handleChangePage(pageActual - 1)} 
        disabled={ pageActual <= 1 }> 
        <p>PREV</p>
        </button>

        {/* <p>{pageActual}</p> */}

       <p>{numbersPage()}</p>
        
        {/* <p>de {totalPages}</p> */}
       
        <button 
        onClick={() => handleChangePage(pageActual + 1)} 
        disabled={pageActual >= totalPages}> 
            NEXT 
        </button>

    </div>
   );
    
};
/* ------------------------------------------------------------- */ 

export default Paginated;
/* ------------------------------------------------------------- */ 