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
        resetFilters  } from '../../redux/actions/actionsRecipes';
/* ------------------------- */

const Filters = () => {

    const dispatch = useDispatch();

    const { diets } = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch])


    const handleFilterRecipes = async (event) => {
        dispatch(filterRecipes(event.target.value));
    };

    const handleFilterDiets = async (event) => {
        dispatch(filterDiets(event.target.value))
    };

    const handleFilterHealthScore = async (event) => {
        dispatch(orderRecipes(event.target.value));
    };

    const handleOrder = async (event) => {
        dispatch(orderRecipes(event.target.value));
    };

    const handleReset = () => {
        dispatch(resetFilters());
    };
/* ------------------------------------------------------------- */ 

return(
    <div className={style.filters}>
             
            <select onChange={handleFilterRecipes}>
               <option value='' style={{color:'black'}}>Filter By Storage</option>
                <option value="Api" style={{color:'black'}} >Api</option>
                <option value="Database" style={{color:'black'}} >Database</option>
            </select> 
             
            <select onChange={handleFilterDiets}>
                <option value='' style={{color:'black'}}>Filter By Diets</option>
                    {
                    diets?.map((diet, index) => (
                     <option key={index} value={diet.name}> {diet.name} </option>
                    ))
                        
                    }
            </select> 

            <select onChange={handleFilterHealthScore}>
                 <option value='' style={{color:'black'}}>Filter By HealthScore</option>
                <option value="Asc" style={{color:'black'}} >Asc</option>
                <option value="Desc" style={{color:'black'}} >Desc</option>
            </select> 
             
            <select onChange={handleOrder}>
                 <option value='' style={{color:'black'}}>Order By</option>
                <option value="A-Z" style={{color:'black'}} >A-Z</option>
                <option value="Z-A" style={{color:'black'}} >Z-A</option>
            </select>
           
            <button onClick={handleReset}>
                Reset Filters
            </button> 
            
    </div>
);

};
/* ------------------------------------------------------------- */ 

export default Filters;
/* ------------------------------------------------------------- */ 