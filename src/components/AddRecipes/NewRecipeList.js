import React from 'react';
import styled from 'styled-components';
import devices from '../utils/devices';
import Recipe from './NewRecipe';


const NewRecipe = ({ recipes, setRecipes }) => {
    return (
        <React.Fragment>
            <NewDiv>
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
                        </NewDiv>
       </React.Fragment>
    )
};

const NewDiv = styled.div`
display: flex;
justify-content: center;
@media ${devices.mobile} {
    display: block;
}
`

export default NewRecipe;
