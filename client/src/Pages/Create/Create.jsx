/* COMPONENTS */
import style from './create.module.css'
/* import validations from './validations'; */
/* ------------ */

/* HOOKS */
import { useState/* useEffect */ } from 'react';
/* import axios from 'axios'; */
/* ------------ */

const CreateRecipe = (/* { newRecipe } */) => {

  /*   const URL = 'http://localhost:3001';

    const[diets, setDiets] = useState([]);

    useEffect(() => {
      axios(`${URL}/diets`)
      .then(response => setDiets(response.data))
      .catch(error => error.message)
    }, []) */

    
    const [recipeCreate, setRecipeCreate] = useState({
        title: '',
        summary: '',
        healthScore: '',
        stepByStep: '',
        diet: [],
        image: ''
    });
    
    const [errors, setErrors] = useState({
        title: '',
        summary: '',
        healthScore: '',
        stepByStep: '',
        diet: [],
        image: ''
    })
    
    const handleInputChange = (event) => {

        setRecipeCreate({
            ...recipeCreate,
            [event.target.name] : event.target.value
        });

        /* setErrors(validations({
           ...recipeCreate,
           [name] : value
        })); */
    }
    
     const handleSubmit = (event) => {
        event.preventDefault();
        /* newRecipe(recipeCreate); */
     }

    return( 
       <div className={style.topContainer}>
           <h1>FORM PARA CREAR UNA RECETA</h1>

           <form onSubmit={handleSubmit} autoComplete='off' className={style.container}>
            
           
            <label htmlFor='title'>TITLE</label>
                <input 
                placeholder='write a title'
                type='text'
                name='title'
                value={recipeCreate.title}
                onChange={handleInputChange}
                ></input>
                {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
        
           
            <label htmlFor='summary'>SUMMARY</label>
                <input 
                placeholder='write a summary'
                type='text'
                name='summary'
                value={recipeCreate.summary}
                onChange={handleInputChange}
                ></input>
                {errors.summary && <p style={{color: 'red'}}>{errors.summary}</p>}
            
            
            <label htmlFor='healthScore'>HEALTH SCORE</label>
                <input 
                placeholder='insert health score range'
                type='number'
                name='healthScore'
                value={recipeCreate.healthScore}
                onChange={handleInputChange}
                ></input>
                {errors.healthScore && <p style={{color: 'red'}}>{errors.healthScore}</p>}
           

            <label htmlFor='stepByStep'>STEP BY STEP</label>
                <textarea 
                placeholder='write your Step By Step'
                type='text'
                name='stepByStep'
                value={recipeCreate.stepByStep}
                onChange={handleInputChange}
                ></textarea>
                {errors.stepByStep && <p style={{color: 'red'}}>{errors.stepByStep}</p>}
        
        
            <label htmlFor='diet'>DIETS</label>
                <select
                name='diet'
                value={recipeCreate.diet}
                onChange={handleInputChange}
                style={{color:'grey'}}
                > 
                <option value=''>Select diets for recipe</option>
                <option value='1' style={{color:'black'}}>VEGAN</option>
                <option value='2' style={{color:'black'}}>VEGETARIAN</option>
                <option value='3' style={{color:'black'}}>GLUTEN FREE</option>
                <option value='4' style={{color:'black'}}>DAIRY FREE</option>

                 {/* {
                    diets.map(diet => {
                        <option key={diet.id} value={diet.name}>{diet.name}</option>
                    })
                 } */}
                </select>
             

            <label htmlFor='image'>IMAGE</label>
                <input 
                placeholder='insert image link'
                type='text'
                name='image'
                value={recipeCreate.image}
                onChange={handleInputChange}
                ></input>
                {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
            
            <button className={style.createRecipe}>CREATE RECIPE</button>

           </form>


       </div>
    )
   }
   
   
   export default CreateRecipe;