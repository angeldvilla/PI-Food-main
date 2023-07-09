/* COMPONENTS */
import Cards from "../../components/Cards/Cards";
import styles from './home.module.css'
/* ---------- */


/* HOOKS */
import { useState, useEffect } from "react";
import axios from 'axios';
/* ---------- */


const Home = () => {

/*  const [loader, setLoader] = useState(true);  */
const [recipes, setRecipes] = useState([]);

useEffect(() =>  {
    axios('http://localhost:3001/recipes')
    .then(response => setRecipes(response.data))
    .catch(error => error.message)
}, [])

 return( 
    <div>
        <h1>RECIPES</h1>
        {
        recipes ? (
            
        <div className={styles.container}>
            {

            recipes.map(({id, title, image, diet}) => {
            return (
                <Cards key={id}
                id ={id}
                title={title}
                image={image}
                diet={diet}
                />  
                )   
            })
    
            }
            </div>
           ) 
           : (
          <p>Loading recipes...</p>
       
          )
    }
    </div>
 )

}

export default Home;