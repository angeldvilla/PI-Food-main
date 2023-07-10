/* COMPONENT */
import style from './searchStyle.module.css';
/* ----------- */

/* HOOKS */
import { useState } from "react";
/* -------- */

const SearchBar = ({ searchRecipe }) => {

    const [recipe, setRecipe] = useState('');

    const handleChange = (event) => {
       setRecipe(event.target.value);
    }
    return( 
    <div>
        <div className={style.container}>
             <input className={style.bar} type='search' placeholder='search recipe...' value={recipe} 
             onChange={handleChange}></input> 
        </div>

        <button className={style.search} onClick={() => searchRecipe(recipe, setRecipe(''))}>
            <span className="material-symbols-outlined">
            search
            </span> 
        </button> 

    </div>
    )
}

export default SearchBar;