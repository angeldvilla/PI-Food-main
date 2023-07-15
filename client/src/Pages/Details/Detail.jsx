/* COMPONENTS */
import style from './detail.module.css';
/* -------------------- */

/* HOOKS */
import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from "react-router-dom";

/* -------------------- */

/* ACTIONS */
import { getDetailRecipe } from '../../redux/actions/actionsRecipes';
/* ---------- */

const Detail = () => {

  const { id } = useParams();
 
  const dispatch = useDispatch();

  const { recipeDetail } = useSelector(state => state.recipes);
 
  useEffect(()=>{
      dispatch(getDetailRecipe(id))
  }, [dispatch, id]);
 
/* ------------------------------------------------------------- */ 

return( 
    <div className={style.container}>

        <div className={style.card}>

            <div>

              <button>
                <NavLink to='/home' className={style.back} >BACK</NavLink>
              </button>

              <h1>{recipeDetail.title}</h1>

            </div>

            <div className={style.detail} >

            <div className={style.containerImg} >
              <img src={recipeDetail?.image} alt={recipeDetail.title} />
            </div>

              <div className={style.propiedades}>

                <label htmlFor="summary" >ID: </label>
                <p className={style.id}>{recipeDetail.id}</p>

                <label htmlFor="summary" >Summary: </label>
                <p className={style.summary}>{recipeDetail.summary}</p> 
                {/* .replace(/<[^>]+>/g, '') */}

                <label htmlFor="healthScore">Health Score: </label>
                <p className={style.healthScore}>{recipeDetail.healthScore}</p>

                <label htmlFor="stepByStep">Step By Step: </label>
                <p className={style.stepByStep}>{recipeDetail.stepByStep}</p>

                <label htmlFor="diets">Diets: </label>
                {
                  recipeDetail.diets?.map((diet, index) => (
            
                    <span key={index} className={style.diets}>
                    <p> {diet}</p>
                    </span>

                  ))
                }
              
              </div>

            </div>
        </div>

    </div>
  );
};
/* ------------------------------------------------------------- */ 

export default Detail;
/* ------------------------------------------------------------- */ 


/*    {
       Array.isArray(recipeDetail.diets)
        ? recipeDetail.diets.map((diet, index) => <span key={index}>{diet}</span>)
        : recipeDetail.diets?.map((diet, index) => (
        <p key={index} className={style.diets}>
        {diet.name}
        </p>
        ))
      } 
*/