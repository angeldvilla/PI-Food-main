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
 const { idRecipe } = useParams;

 const [recipe, setRecipe] = useState({});

 useEffect(()=>{
    axios(`http://localhost:3001/recipe/${idRecipe}`)
    .then(response => response.data)
    .then(data => {
        if(data.name){
            setRecipe(data);
        } else{
            alert('recipe fail detail')
        }
    })
    .catch(error => error.message)
    return setRecipe({})
 },[idRecipe]);


    return( 
        <div className={style.container} >
        <div className={style.card}>

            <div>
            <h1>DETALLE DE UNA RECETA </h1>
              <button>
                  <Link to='/home' className={style.link} >BACK</Link>
              </button>

              <h1>{recipe?.title}</h1>

            </div>

            <div className={style.detail} >

              <div className={style.containerImg} >
                <img src={recipe?.image} alt={recipe?.title} />

              </div>

              <div className={style.titulos}>

              <label htmlFor="status" >ID: </label>
                <p className={style.id}>{recipe?.id}</p>

                <label htmlFor="status" >Summary: </label>
                <p className={style.estado}>{recipe?.summary}</p>

                <label htmlFor="specie">Health Score: </label>
                <p className={style.especie}>{recipe?.healthScore}</p>

                <label htmlFor="gender">Step By Step: </label>
                <p className={style.genero}>{recipe?.stepByStep}</p>

                <label htmlFor="origin">Diets: </label>
                <p className={style.origen}>{recipe?.diet?.name}</p>

              </div>
            </div>
          </div>
      </div>
    )
}

export default Detail;