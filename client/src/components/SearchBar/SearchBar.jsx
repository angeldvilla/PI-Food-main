/* COMPONENT */
import style from './searchStyle.module.css';
/* ----------- */

/* HOOKS */
import React, { useState } from "react";
/* -------- */

const SearchBar = ({ onSearchRecipe }) => {

    const [title, setTitle] = useState("");

    const searchRecipes = () => {
        onSearchRecipe(title);
        setTitle("");
    }

    const handleChange = (event) => {
        setTitle(event.target.value); 
    };

    const handleKeypress = (event) => {
        if (event.key === "Enter") {
          searchRecipes();
        }
      };

    return( 
    <div>
        <div className={style.container}>
             <input className={style.bar} type='search' placeholder='search recipe...' value={title} 
             onChange={handleChange}></input> 
        </div>

        <button className={style.search} onClick={searchRecipes} onKeyDown={handleKeypress}>
            <span className="material-symbols-outlined">
            search
            </span> 
        </button> 

    </div>
    )
}

export default SearchBar;