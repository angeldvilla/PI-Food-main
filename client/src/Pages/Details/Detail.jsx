/* COMPONENTS */
import Loader from '../../components/Loader/loader';
import style from './detail.module.css';
/* -------------------- */

/* HOOKS */
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from "react-router-dom";

/* -------------------- */

/* ACTIONS */
import { getDetailRecipe } from '../../redux/actions/actionsRecipes';
/* ---------- */

const Detail = () => {

// Obtenemos el parámetro "id" de la URL
  const { id } = useParams();
 
  const dispatch = useDispatch();
 
  const { recipeDetail, loading } = useSelector(state => state.recipes);

  const [dietsToggle, setDietsToggle] = useState(false);

  const toggleDiets = () => {
    setDietsToggle(!dietsToggle);
  };

  // Al cargar el componente, se dispara una acción para obtener los detalles de la receta con el ID correspondiente
  useEffect(()=>{
      dispatch(getDetailRecipe(id))
  }, [dispatch, id]);
 
/* ------------------------------------------------------------- */ 

return (
  <div className={style.topContainer}>
       {loading ? (
         <Loader />
         
       ) :  (
        <div>
        <div className={style.buttonContainer}>
     
             <button>
               <NavLink to='/home'>
               <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                   viewBox="0 0 511.998 511.998" xmlSpace="preserve">
                   <rect x="370.941" y="122.778" transform="matrix(-0.3069 -0.9517 0.9517 -0.3069 270.5536 693.1119)" className="fill:#444444;" width="33.419" height="250.529"/>
                   <path className="fill:#B0B0B0;" d="M200.029,441.183H85.103C38.177,441.183,0,403.005,0,356.079V222.534h285.132v133.544
                   C285.132,403.005,246.955,441.183,200.029,441.183z"/>
                    <path className="fill:#8B8B8B;" d="M200.029,441.183h-57.462c0-76.612,0-218.647,0-218.647h142.566v133.543
                   C285.132,403.005,246.955,441.183,200.029,441.183z"/>
                   <path className="fill:#70C9D8;" d="M217.981,183.288h-33.42c0-4.673-0.892-6.135-3.275-10.037c-3.255-5.329-8.175-13.384-8.175-27.456
                   s4.919-22.126,8.175-27.456c2.384-3.902,3.275-5.362,3.275-10.036c0-4.672-0.891-6.133-3.275-10.034
                   c-3.255-5.329-8.175-13.383-8.175-27.455h33.42c0,4.671,0.891,6.131,3.274,10.033c3.255,5.329,8.175,13.384,8.175,27.456
                   s-4.919,22.125-8.175,27.456c-2.383,3.902-3.275,5.363-3.275,10.037s0.892,6.135,3.275,10.037
                   C213.063,161.161,217.981,169.215,217.981,183.288z"/>
                    <path className="fill:#9FD3DC;" d="M112.021,183.288h-33.42c0-4.673-0.892-6.135-3.275-10.037c-3.255-5.329-8.175-13.384-8.175-27.456
                   s4.919-22.126,8.175-27.456c2.384-3.902,3.275-5.362,3.275-10.036c0-4.672-0.891-6.133-3.275-10.034
                   c-3.255-5.329-8.175-13.383-8.175-27.455h33.42c0,4.671,0.891,6.131,3.274,10.033c3.255,5.329,8.175,13.384,8.175,27.456
                   s-4.919,22.125-8.173,27.456c-2.384,3.902-3.275,5.363-3.275,10.037s0.892,6.135,3.275,10.037
                   C107.101,161.161,112.021,169.215,112.021,183.288z"/>
                   </svg>
               </NavLink>
             </button>
             </div>
             
           <div>
             <div className={style.formRow}>
   
             <div className={style.leftColumn}>
             
             <h1 className={style.title}>{recipeDetail.title}</h1>
             
             <div className={style.imgContainer}>
               <img src={recipeDetail?.image} alt={recipeDetail.title} />
             </div>
   
             <div className={style.healthDietsContainer}>
               
               <div className={style.dietsContainer}>
                 
                 <label htmlFor="healthScore">Health Score</label>
                 
                 <p className={style.healthScore}>{recipeDetail.healthScore}</p>
               </div>
   
               <div className={style.dietsContainer} style={{ maxHeight: dietsToggle ? "100%" : "0" }}>
                 
                 <label htmlFor="diets" className={style.dietsTitle} onClick={toggleDiets}>
                   Diets
                 </label>
   
                 {recipeDetail.diets?.map((diet, index) => (
                   <span key={index}>
                     <p>{diet}</p>
                   </span>
   
                 ))}
               </div>
               
             </div>
   
           </div>
           
               <div className={style.rightColumn}>
                
                 <label htmlFor="summary">Summary:</label>
                 <p className={style.summary}>{recipeDetail.summary}</p>
                 
                 <label htmlFor="stepByStep">Step By Step:</label>
                 <p className={style.stepByStep}>{recipeDetail.stepByStep}</p>
               </div>
   
           </div>
   
         </div>
         </div>
       )}
     </div>
)}    
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