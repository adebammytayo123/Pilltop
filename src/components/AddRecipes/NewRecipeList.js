import React from 'react';
import Recipe from './NewRecipe';
import styled from 'styled-components';

const NewRecipe = ({ recipes, setRecipes }) => {
    return (
        <NewWrapper className="container">
            <div className="row">
            <div className=" col-12 col-md-9 col-lg-6 p-5">
                <div className="card mx-auto text-center my-5 py-3">
                    <ul className="new-list">
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
                  </ul>
                            
                </div>
            </div>
            </div>
       </NewWrapper>
    )
};

const NewWrapper = styled.div`
.new-list {
    list-style: none;
}
.card {
    border-color: transparent;
  background: var(--mainWhite);
  transition: all 1s linear;
}
&:hover {
  .card {
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
}
`

export default NewRecipe;
