import React, { useState } from 'react';
import styled from 'styled-components';
import Details from './Details';
import salad from './salad.jpg';


const NewRecipe = ({ name, category, ingredients, description, recipes, setRecipes, recipe }) => {

    const [ isOpen, setIsOpen ] = useState(false);
    
    const deleteHandler = (e) => {
        setRecipes(recipes.filter(el => el.id !== recipe.id))
    };
    return (
        <RecipeWrapper>
            <div className="new">
                <img src={salad} alt={name} className="card-img-top py-2" style={{width: "12rem", height: "12rem"}} />
                <li className="new-item text-center">{name}</li>
                <div className="card-footer d-flex justify-content-betweeen my-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="details">
                        details
                    </button>
                    <Details 
                        onClose={ () => setIsOpen(false)}
                        open={isOpen}
                        category={category}
                        ingredients={ingredients}
                        description={description}
                    />
                    <div className="spacer"></div>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
               </div>
            </div>
        </RecipeWrapper>
    )
};

const RecipeWrapper = styled.div`

.card-img-top {
    transition: all 1s linear;
    border-radius: 3rem;
}
.img-container:hover .card-img-top {
  transform: scale(1.2)
}
.new-item {
    color: var(--mainDark);
    text-transform: uppercase;
}
.details {
    background: var(--mainDark);
    color: var(--mainYellow);
    text-transform: capitalize;
}
.spacer {
    flex: 1;
}
.trash-btn {
    border: transparent;
    background: transparent;
    color: red;
}
`

export default NewRecipe;
