const validations = (recipeCreate) => {

  let errors = {};

  if(!recipeCreate.title){
    errors.title = 'Enter a title please.';
  }
  if(recipeCreate.title.length > 100){
      errors.title = 'The title is too long.';
  }
  if(!recipeCreate.summary){
    errors.summary = 'Enter at least a short description.';
  }
  if(recipeCreate.summary > 900){
    errors.summary = 'Description exceeds character limit.';
  }
    
  if(!recipeCreate.healthScore){
    errors.healthScore = 'Must have at least 1 health score.';
  }
  if(recipeCreate.healthScore <= 0 || recipeCreate.healthScore > 200){
    errors.healthScore ='Health Score must be between 1 and 200.';
  }
  
  const imageUrlRegex = /\.(jpg|jpeg|png)$/i;

  if (!recipeCreate.image) {
    errors.image = "Add at least one image .";
  }

  if (recipeCreate.image && !imageUrlRegex.test(recipeCreate.image)) {
    errors.image = "Invalid image URL. Only JPG, JPEG, and PNG formats are allowed.";
  }

  
/*   const selectedDietCount = recipeCreate.diets.filter((diet) => diet.checked).length;
  if (!selectedDietCount) {
    errors.diets = 'Select at least one diet.';
  } */


  return errors;
}
export default validations;