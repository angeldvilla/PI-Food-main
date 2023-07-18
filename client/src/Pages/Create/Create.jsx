/* COMPONENTS */
import style from './create.module.css'
import validations from '../../validations/validations';
/* ------------ */

/* HOOKS */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* ------------ */

/* ACTIONS */
import { newRecipe, getDiets } from '../../redux/actions/actionsRecipes';
/* ---------- */

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const { diets } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const [recipeCreate, setRecipeCreate] = useState({
    title: '',
    summary: '',
    healthScore: '',
    stepByStep: '',
    diets: [],
    image: ''
  });

  const [errors, setErrors] = useState({
    title: '',
    summary: '',
    healthScore: '',
    stepByStep: '',
    diets: [],
    image: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeCreate(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(validations({
      ...recipeCreate,
      [name]: value
    }));
  }

  const handleDiets = (dietId) => {

    if (recipeCreate.diets.includes(dietId)) {
      setRecipeCreate((prevState) => ({
        ...prevState,
        diets: prevState.diets.filter((diet) => diet !== dietId),
      }));
    } 
    else {
      setRecipeCreate((prevState) => ({
        ...prevState,
        diets: [...prevState.diets, dietId],
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newRecipe(recipeCreate));
    alert('Recipe created successfully!');
    setRecipeCreate({
      title: '',
      summary: '',
      healthScore: '',
      stepByStep: '',
      diets: [],
      image: ''
    });
  };
/* ------------------------------------------------------------- */ 
  return (
    <div className={style.topContainer}>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit} autoComplete='off' className={style.form}>
          <div className={style.formRow}>
               
            <div className={style.buttonContainer}>
                <button>
                <NavLink to='/home'>
                {/* BACK */}
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
{ /* ------------------------------------------------------------- */ }
            <label>TITLE</label>
            <input
              placeholder='write a title'
              type='text'
              name='title'
              value={recipeCreate.title}
              onChange={handleInputChange}
            />
          </div>

          <div className={style.formRow}>
            <label>SUMMARY</label>
            <textarea
              placeholder='write a summary'
              type='text'
              name='summary'
              value={recipeCreate.summary}
              onChange={handleInputChange}
            />
          </div>

          <div className={style.formRow}>
            <label>HEALTH SCORE</label>
            <input
              placeholder='insert health score range'
              type='number'
              name='healthScore'
              value={recipeCreate.healthScore}
              onChange={handleInputChange}
            />
          </div>

          <div className={style.formRow}>
            <label>STEP BY STEP</label>
            <textarea
              placeholder='write your Step By Step'
              type='text'
              name='stepByStep'
              value={recipeCreate.stepByStep}
              onChange={handleInputChange}
            />
          </div>


          <div className={style.formRow}>

            <div className={style.dietsContainer}>

            <label>DIETS</label>

              <div className={style.checkboxContainer}>

                {
                  diets?.map((diet, index) => (
                  <div key={index} className={style.checkboxItem}>
                    <div
                      className={style.checkboxCustom}
                      onClick={() => handleDiets(diet.id)}
                    >
                      {
                      recipeCreate.diets.includes(diet.id) && 
                      (<span className={style.checkmark}>
                      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#27d624">

                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                      <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#27d624"/> </g>

                      </svg>
                      </span>)
                      }
                    </div>
                    <span>{diet.name}</span>
                  </div>
                ))
                }

              </div>

            </div>

          </div>
         
          <div className={style.formRow}>
            <label>IMAGE</label>
            <input
              placeholder='insert image link'
              type='text'
              name='image'
              value={recipeCreate.image}
              onChange={handleInputChange}
              style={{ display: 'flex', flexDirection: 'row' }}
            />
          </div>

         <div className={style.create}>
          <button type='submit' disabled={Object.keys(errors).length > 0}>
            CREATE RECIPE
          </button>

         </div>

        </form>
{/* ------------------------------------------------------------- */}        
        <div className={style.errorsContainer}>
        
          {errors.title && 
          <p>
            <h2>Error Title</h2>
            ***{errors.title}
          </p>
          }
          
          {errors.summary && 
          <p>
            <h2>Error Summary</h2>
            ***{errors.summary}
            </p>
            }
          
          {errors.healthScore && 
            <p>
                <h2>Error Health Score</h2>
                ***{errors.healthScore}
            </p>
            }
          
          {errors.stepByStep && 
          <p>
            <h2>Error Steps</h2>
            ***{errors.stepByStep}
            </p>
           }
          
          {errors.image && 
          <p>
            <h2>Error Image</h2>
            ***{errors.image}
            </p>
          }
        </div>

      </div>

    </div>
  );
};
/* ------------------------------------------------------------- */ 

export default CreateRecipe;
/* ------------------------------------------------------------- */ 






/*   
<div className={style.formRow}>
          <div className={style.dietsContainer}>
            <label htmlFor='diets'>DIETS</label>
            <div className={style.checkboxContainer}>
              {diets?.map((diet, index) => (
                <div key={index} className={style.checkboxItem}>
                  <input
                    type='checkbox'
                    name='diets'
                    value={String(diet.id)}
                    checked={recipeCreate.diets.includes(String(diet.id))}
                    onChange={handleDiets}
                  />
                  <label htmlFor='dietNames'>{diet.name}</label>
                  </div>
                  ))}
            </div>
            </div>
</div> 
const handleDiets = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setRecipeCreate(prevState => ({
        ...prevState,
        diets: [...prevState.diets, value]
      }));
    } else {
      setRecipeCreate(prevState => ({
        ...prevState,
        diets: prevState.diets.filter(dietId => dietId !== value)
      }));
    }
  }; 
*/