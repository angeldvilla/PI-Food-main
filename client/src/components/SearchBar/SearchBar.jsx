/* COMPONENT */
import style from './searchStyle.module.css';
/* ----------- */

/* HOOKS */
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { /* getAllRecipes, */ searchRecipesByName } from '../../redux/actions/actionsRecipes';
/* -------- */

const SearchBar = () => {

  const dispatch = useDispatch(); 

    const [title, setTitle] = useState("");

    const searchRecipes = (title) => {
      dispatch(searchRecipesByName(title));
      setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value); 
    };
    
    // FUNCION PARA BUSCAR SOLO PRESIONANDO LA TECLA ENTER
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        dispatch(searchRecipesByName(title));
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

        <button className={style.search} onClick={() => searchRecipes(title)} disabled={!title}>
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