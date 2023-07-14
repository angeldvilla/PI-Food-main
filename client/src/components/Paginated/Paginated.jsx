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
/* {page, setPage, maxPage} */

    const dispatch = useDispatch(); 
   
   const { pageActual, recipesPerPage } = useSelector(state => state.pagination);
   
   const { filterRecipes } = useSelector(state => state.recipes);

   const totalPages  = Math.ceil(filterRecipes.length / recipesPerPage);

    const handleChangePage = (pageNumber) => {
        dispatch(pagination(pageNumber))
    }

    const prevPage = () => {
        return pageActual - 1;
    }

    const nextPage = () => {
        return pageActual + 1;
    }
   
  /*  const[valuePage, setValuePage] = useState(1);

    const prevPage = () => {
        setValuePage(valuePage - 1)
    }

    const nextPage = () => {
        setValuePage(valuePage + 1)
        setPage(page + 1)
    } */

    /* const handleChange = (event) => {
        setValuePage(event.target.value)
    } */

    return(

    <div className={style.container}>
        <button 
        onClick={() => handleChangePage(prevPage())} 
        disabled={pageActual === 1 || pageActual < 1}> 
            PREV 
        </button>
       
        <p>{pageActual}</p>
        
        <p>de {totalPages}</p>
        
        <button 
        onClick={() => handleChangePage(nextPage())} 
        disabled={pageActual === totalPages || pageActual > totalPages}> 
            NEXT 
        </button>

    </div>
   );
    
}

export default Paginated;