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
             
             <p>FILTER BY STORAGE</p>
            <select onChange={handleFilterRecipes} >
               <option></option>
                <option value="Api" >API</option>
                <option value="Database" >DATABASE</option>
            </select> 
             <hr />
            
             <p>FILTER BY DIETS</p>
            <select onChange={handleFilterDiets}>
                <option></option>
                    {
                    diets?.map((diet, index) => (
                     <option key={index} value={diet.name}> {diet.name} </option>
                    ))
                        
                    }
            </select> 
            <hr />

            <p>FILTER BY HEALTH SCORE</p>
            <select onChange={handleFilterHealthScore}>
                <option></option>
                <option value="Asc" >ASC</option>
                <option value="Desc" >DESC</option>
            </select> 
            <hr />

            <p>FILTER BY NAME</p>
            <select onChange={handleOrder}>
                <option></option>
                <option value="A-Z" >A-Z</option>
                <option value="Z-A" >Z-A</option>
            </select>
            <hr />

           
            <button onClick={handleReset}>
                Reset Filters
            </button> 
            
    </div>
);

};
/* ------------------------------------------------------------- */ 

export default Filters;
/* ------------------------------------------------------------- */ 