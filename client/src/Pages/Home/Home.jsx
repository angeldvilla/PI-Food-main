/* COMPONENTS */
import styles from './home.module.css'
import Cards from "../../components/Cards/Cards";
/* import Paginated from "../../components/Paginated/Paginated"; */
/* ---------- */


/* HOOKS */
  import React from "react";
  /* import { useState } from "react"; */
/* ---------- */


const Home = ({ recipes, results }) => {

/* PAGINADO */
/* const [page, setPage] = useState(1);
const [allPages, setAllPages] = useState(10);

const maxPage = recipes / allPages; */

/* console.log(maxPage); */

/* PAGINADO */

 return( 
    <div>
       <h1>RECIPES</h1>
  {/*      <div className={styles.container}>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/> 
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
       <Cards key={recipes.id}/>
</div> */}
         { results.length > 0 

        ? (
            <div className={styles.container}>
            { /* slice( (page - 1) * allPages, (page - 1 ) * allPages + allPages
                ). */
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
    {/* <Paginated page={page} setPage={setPage} maxPage={maxPage}/> */}
    </div>
 )
}

export default Home;