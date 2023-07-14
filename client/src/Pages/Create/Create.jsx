    /* COMPONENTS */
    import style from './create.module.css'
    import validations from './validations';
    /* ------------ */

    /* HOOKS */
    import React, { useState, useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    /* ------------ */

    /* ACTIONS */
    import { newRecipe, getDiets } from '../../redux/actions/actionsRecipes';
    /* ---------- */

    const CreateRecipe = () => {

        const dispatch = useDispatch();

        const { diets } = useSelector(state => state.recipes);
        /* console.log(diets); */

        useEffect(() => {
        dispatch(getDiets());
        }, [dispatch])
        
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

            const { name, value } = event.target

            setRecipeCreate({
                ...recipeCreate,
                [name] : value
            });

         setErrors(validations({
            ...recipeCreate,
            [name] : value
            }));
        };

        const handleDiets = (event) => {
            const { value, checked } = event.target;

            checked ?
            (   setRecipeCreate(prevState => ({
                    ...prevState,
                    diets: [...prevState.diets, value],
                }))
            ) : (
                setRecipeCreate(prevState => ({
                    ...prevState,
                    diets: prevState.diets.filter((dietId) => dietId !== value),
                }))
            )
        };
        
        const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(newRecipe(recipeCreate));
            alert('Successfull recipe created!');
            setRecipeCreate({
                title: '',
                summary: '',
                healthScore: '',
                stepByStep: '',
                diets: [],
                image: '',
              });
        };


        return( 
        <div className={style.topContainer}>
            <h1 className={style.title}>FORM PARA CREAR UNA RECETA</h1>

            <form onSubmit={handleSubmit} autoComplete='off' className={style.container}>
                
            
                <label htmlFor='title'>TITLE</label>
                    <input 
                    placeholder='write a title'
                    type='text'
                    name='title'
                    value={recipeCreate.title}
                    onChange={handleInputChange}
                    />
                 {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
            
            
                <label htmlFor='summary'>SUMMARY</label>
                    <textarea 
                    placeholder='write a summary'
                    type='text'
                    name='summary'
                    value={recipeCreate.summary}
                    onChange={handleInputChange}
                    />
                {errors.summary && <p style={{color: 'red'}}>{errors.summary}</p>}  
                
                
                <label htmlFor='healthScore'>HEALTH SCORE</label>
                    <input 
                    placeholder='insert health score range'
                    type='number'
                    name='healthScore'
                    value={recipeCreate.healthScore}
                    onChange={handleInputChange}
                    />
                {errors.healthScore && <p style={{color: 'red'}}>{errors.healthScore}</p>} 
            

                <label htmlFor='stepByStep'>STEP BY STEP</label>
                    <textarea 
                    placeholder='write your Step By Step'
                    type='text'
                    name='stepByStep'
                    value={recipeCreate.stepByStep}
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
                        checked={recipeCreate.diets.includes(String(diet.id))}
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
                    value={recipeCreate.image}
                    onChange={handleInputChange}
                    style={{display: 'flex', flexDirection: 'row'}}
                    />
                {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
                
                <button 
                type='submit' 
                disabled={Object.keys(errors).length > 0 }
                className={style.createRecipe}
                >CREATE RECIPE
                </button>

            </form>


        </div>
        )
    }
    
    
    export default CreateRecipe;