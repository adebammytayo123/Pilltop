import React from 'react';
import Recipe from './NewRecipe';


const NewRecipe = ({ recipes, setRecipes }) => {
    return (
        <React.Fragment>
            <div className="py-5">
            <div className="container">
                    <div className="row">
              {recipes.map(recipe => (
                            <Recipe
                               key={recipe.id}
                               recipe={recipe}
                               name={recipe.name}
                               category={recipe.category}
                               ingredients={recipe.ingredients}
                               description={recipe.description}
                               recipes={recipes}
                               setRecipes={setRecipes}
                            />
                        ))}
                       </div>
            </div>
            </div>
       </React.Fragment>
    )
};

export default NewRecipe;
