/* HOOKS */
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
/* -------------------- */


/* COMPONENTS */
import style from './detail.module.css'
/* -------------------- */

const Detail = () => {
 const { id } = useParams();

 const [recipe, setRecipe] = useState({});

 useEffect(()=>{
    axios(`http://localhost:3001/recipes/${id}`)
    .then(response => response.data)
    .then(data => {
        if(data.title){
          setRecipe(data);
        } else{
            alert('recipe fail detail')
        }
    })
    return setRecipe({})
 },[id]);


    return( 
        <div className={style.container} >
        <div className={style.card}>

            <div>

              <button>
                  <Link to='/home' className={style.back} >BACK</Link>
              </button>

              <h1>{recipe.title}</h1>

            </div>

            <div className={style.detail} >

              <div className={style.containerImg} >
                <img src={recipe?.image} alt={recipe.title} />
              </div>

              <div className={style.propiedades}>

              <label htmlFor="summary" >ID: </label>
                <p className={style.id}>{recipe.id}</p>

                <label htmlFor="summary" >Summary: </label>
                <p className={style.summary}>{recipe.summary}</p>

                <label htmlFor="healthScore">Health Score: </label>
                <p className={style.healthScore}>{recipe.healthScore}</p>

                <label htmlFor="stepByStep">Step By Step: </label>
                <p className={style.stepByStep}>{recipe.stepByStep}</p>

                <label htmlFor="diet">Diets: </label>
                <p className={style.diet}>{recipe.diet}</p>

              </div>
            </div>
          </div>
      </div>
    )
}

export default Detail;