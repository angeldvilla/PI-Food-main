/* COMPONENTS */
import Cards from "../../components/Cards/Cards";
import styles from './home.module.css'
/* ---------- */


/* HOOKS */
import { useState, useEffect } from "react";
import axios from 'axios';
/* ---------- */


const Home = () => {
 const [recipes, setRecipes] = useState(null);
 /* const [loader, setLoader] = useState(true); */

useEffect(() =>  {
    axios('http://localhost:3001/recipes/')
    .then(response => setRecipes(response.data))
    .catch(error => error.message)
}, [])

 return( 
    <div>
        <h1>RECIPES</h1>
        { /* loader ? ( 
            <div className="preloader">
            <div className="loader"></div>
            </div>
        ) : ( */

        recipes ? (
            
        <div className={styles.container}>
            {

            recipes.map(({idRecipe, title, image, diet}) => {
            return (
                <Cards
                key={idRecipe}
                idRecipe ={idRecipe}
                title={title}
                image={image}
                diet={diet}
                />  
                )   
            })
            
            }
            
            </div>
           ) : (
          <p>Loading recipes...</p>
       /*  ) */
    )}
    </div>
 )

}

export default Home;