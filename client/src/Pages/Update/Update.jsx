/* COMPONENTS */
import style from './update.module.css'
import validations from '../../validations/validations';
/* ------------ */

/* HOOKS */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* ------------ */

/* ACTIONS */
import { editRecipe, 
        getDiets,
        getDetailRecipe } from '../../redux/actions/actionsRecipes';
/* ---------- */

const EditRecipe = ({ idRecipe }) => {

    const dispatch = useDispatch();

    const { diets, allRecipes } = useSelector(state => state.recipes);
    
    useEffect(() => {
    dispatch(getDiets());
    dispatch(getDetailRecipe(idRecipe));
    }, [dispatch, idRecipe])
        
    const [recipeEdit, setRecipeEdit] = useState(
        {
            title: '',
            summary: '',
            healthScore: '',
            stepByStep: '',
            diets: [],
            image: ''
        }
    );
        
     const [errors, setErrors] = useState(
        {
            title: '',
            summary: '',
            healthScore: '',
            stepByStep: '',
            diets: [],
            image: ''
        }
    );

    useEffect(() => {
        setRecipeEdit(allRecipes);
    }, [allRecipes]);

    const handleInputChange = (event) => {

        const { name, value } = event.target

        setRecipeEdit({
        ...recipeEdit,
        [name] : value
        });

        setErrors(validations({
        ...recipeEdit,
        [name] : value
        }));
    };

    const handleDiets = (event) => {
        
        const { value, checked } = event.target;

            
            checked ?
            (   setRecipeEdit(prevState => ({
                    ...prevState,
                    diets: [...prevState.diets, value],
                }))
            ) 
            : (
                setRecipeEdit(prevState => ({
                    ...prevState,
                    diets: prevState.diets.filter((dietId) => dietId !== value),
                }))
            )
    };
        
    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch(editRecipe(recipeEdit));
        
        alert('Recipe updated successfully!');
        
        setRecipeEdit(
            {
                title: '',
                summary: '',
                healthScore: '',
                stepByStep: '',
                diets: [],
                image: '',
              }
            );
    };
/* ------------------------------------------------------------- */ 

    return( 
        <div className={style.topContainer}>
            <h1 className={style.title}>FORM PARA EDITAR UNA RECETA</h1>

            <form onSubmit={handleSubmit} autoComplete='off' className={style.container}>
                
                <label htmlFor='title'>TITLE</label>
                    <input 
                    placeholder='write a title'
                    type='text'
                    name='title'
                    value={recipeEdit.title}
                    onChange={handleInputChange}
                    />
                 {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
            
            
                <label htmlFor='summary'>SUMMARY</label>
                    <textarea 
                    placeholder='write a summary'
                    type='text'
                    name='summary'
                    value={recipeEdit.summary}
                    onChange={handleInputChange}
                    />
                {errors.summary && <p style={{color: 'red'}}>{errors.summary}</p>}  
                
                
                <label htmlFor='healthScore'>HEALTH SCORE</label>
                    <input 
                    placeholder='insert health score range'
                    type='number'
                    name='healthScore'
                    value={recipeEdit.healthScore}
                    onChange={handleInputChange}
                    />
                {errors.healthScore && <p style={{color: 'red'}}>{errors.healthScore}</p>} 
            

                <label htmlFor='stepByStep'>STEP BY STEP</label>
                    <textarea 
                    placeholder='write your Step By Step'
                    type='text'
                    name='stepByStep'
                    value={recipeEdit.stepByStep}
                    onChange={handleInputChange}
                    />
                {errors.stepByStep && <p style={{color: 'red'}}>{errors.stepByStep}</p>}
            
            
                <label htmlFor="diets">DIETS</label>
                <div className={style.checkboxContainer}>
                {diets?.map((diet, index) => (
                    <div key={index} className={style.checkboxItem}>
                    <input
                        type="checkbox"
                        name="diets"
                        value={String(diet.id)}
                        checked={recipeEdit.diets.includes(String(diet.id))}
                        onChange={handleDiets}
                    />
                    <label htmlFor="dietNames">{diet.name}</label>
                    </div>
                ))}
                </div>
                {/* {errors.diets && <p style={{color: 'red'}}>{errors.diets}</p>} */}

                <label htmlFor='image'>IMAGE</label>
                    <input 
                    placeholder='insert image link'
                    type='text'
                    name='image'
                    value={recipeEdit.image}
                    onChange={handleInputChange}
                    style={{display: 'flex', flexDirection: 'row'}}
                    />
                {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
                
                <button 
                type='submit' 
                disabled={Object.keys(errors).length > 0 }
                className={style.updateRecipe}
                >CREATE RECIPE
                </button>

            </form>

        </div>
    );
};
/* ------------------------------------------------------------- */     
    
export default EditRecipe;
/* ------------------------------------------------------------- */ 