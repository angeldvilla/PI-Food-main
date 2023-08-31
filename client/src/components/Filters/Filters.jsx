/* COMPONENTS */
import style from './filterStyle.module.css';
/* ------------------------- */

/* HOOKS */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
/* ------------------------- */

/* ACTIONS */
import { getDiets, 
        filterRecipes, 
        filterDiets, 
        orderRecipes, 
        getAllRecipes  } from '../../redux/actions/actionsRecipes';

import { pagination } from '../../redux/actions/actionsPagination';
/* ------------------------- */

const Filters = () => {

    const dispatch = useDispatch();

    const { diets } = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch])


    const handleFilterRecipes = async (event) => {
        dispatch(filterRecipes(event.target.value));
        dispatch(pagination(1));
    };

    const handleFilterDiets = async (event) => {
        dispatch(filterDiets(event.target.value));
        dispatch(pagination(1));
    };

    const handleFilterHealthScore = async (event) => {
        dispatch(orderRecipes(event.target.value));
        dispatch(pagination(1));
    };

    const handleOrder = async (event) => {
        dispatch(orderRecipes(event.target.value));
        dispatch(pagination(1));
    };

    const handleReset = () => {
        dispatch(getAllRecipes());
        dispatch(pagination(1));
    };
/* ------------------------------------------------------------- */ 

return(
    <div className={style.filters}>
             
             <p>FILTER BY STORAGE</p>
            <select onChange={handleFilterRecipes} >
                <option value="All">ALL</option>
                <option value="Api" >API</option>
                <option value="Database" >DATABASE</option>
            </select> 
             <hr />
            
             <p>FILTER BY DIETS</p>
            <select onChange={handleFilterDiets}>
                <option value="All">ALL</option>
                    {
                    diets?.map((diet, index) => (
                     <option key={index} value={diet.name}> {diet.name} </option>
                    ))
                        
                    }
            </select> 
            <hr />

            <p>ORDER BY HEALTH SCORE</p>
            <select onChange={handleFilterHealthScore}>
                <option value="Order">ORDER</option>
                <option value="Asc" >ASC</option>
                <option value="Desc" >DESC</option>
            </select> 
            <hr />

            <p>ALPHABETICAL ORDER</p>
            <select onChange={handleOrder}>
                <option value="Order">ORDER</option>
                <option value="A-Z" >A-Z</option>
                <option value="Z-A" >Z-A</option>
            </select>
            <hr />

           
            <button onClick={handleReset}>
                RESET
            </button> 
            
    </div>
);

};
/* ------------------------------------------------------------- */ 

export default Filters;
/* ------------------------------------------------------------- */ 