/* COMPONENTS */
import Cards from "../../components/Cards/Cards";
import styles from './home.module.css'
/* ---------- */


/* HOOKS */
/*import { useState, useEffect } from "react";
  import axios from 'axios'; */
/* ---------- */


const Home = ({ recipes, results }) => {

/*  const [loader, setLoader] = useState(true);  */
/* const [recipes, setRecipes] = useState([]);

useEffect(() =>  {
    axios('http://localhost:3001/recipes')
    .then(response => setRecipes(response.data))
    .catch(error => error.message)
}, []) */

 return( 
    <div>
       <h1>RECIPES</h1>

        { results.length > 0 

        ? (
            <div className={styles.container}>
            {
                results.map(({id, title, image, diet}) => {
                    return(
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
    }
    </div>
 )
}

export default Home;