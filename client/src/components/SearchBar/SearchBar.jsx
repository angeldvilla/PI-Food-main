/* COMPONENT */
import style from './searchStyle.module.css';
/* ----------- */

/* HOOKS */
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { searchRecipesByName } from '../../redux/actions/actionsRecipes';
/* -------- */

/* ACTIONS */
import { pagination } from '../../redux/actions/actionsPagination';
import { showModal } from '../../redux/actions/actionsModal';
/* -------- */

const SearchBar = () => {

  const dispatch = useDispatch(); 

  const [title, setTitle] = useState("");

  const { filterRecipesStorage } = useSelector(state => state.recipes);

    const handleShowModal = () => {
      dispatch(showModal());
    }

    const searchRecipes = (title) => {
      if(filterRecipesStorage.length === 0 ){
        handleShowModal();
      }
      dispatch(searchRecipesByName(title));
      dispatch(pagination(1));
      setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value); 
    };
    
    // FUNCION PARA BUSCAR SOLO PRESIONANDO LA TECLA ENTER
    const handleKeyPress = (event) => {
      if(filterRecipesStorage.length === 0){
        handleShowModal();
      }
      if (event.key === "Enter") {
        dispatch(searchRecipesByName(title));
        dispatch(pagination(1));
        setTitle('');
      }
    };
/* ------------------------------------------------------------- */ 
return( 
    <div>
        <div className={style.container}>
             <input className={style.bar} 
             type='search' 
             placeholder='search recipe...' 
             value={title} 
             onChange={handleChange}
             onKeyDown={handleKeyPress}
             />
        </div>

        <button className={style.search} onClick={() => searchRecipes(title)} disabled={!title || !isNaN(title)}>
            <span className="material-symbols-outlined">
            search
            </span> 
        </button> 

    </div>
    );
};
/* ------------------------------------------------------------- */ 

export default SearchBar;
/* ------------------------------------------------------------- */ 