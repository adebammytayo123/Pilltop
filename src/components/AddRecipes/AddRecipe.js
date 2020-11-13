import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../Recipes/background.jpg';
import Form from './Form';
import NewRecipe from './NewRecipeList';


const AddRecipe = () => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");

    const [recipes, setRecipes] = useState([]);

  
    return (
        <AddWrapper className="py-5">
            <div className="container my-5">
                <div className="row">
                    <Form
                        name={name}
                        setName={setName}
                        category={category}
                        setCategory={setCategory}
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                        description={description}
                        setDescription={setDescription}
                        recipes={recipes}
                        setRecipes={setRecipes}
                    />
                </div>
                <div className="row">
                    <NewRecipe
                        recipes={recipes}
                        setRecipes={setRecipes}
                    />
                </div>
            </div>
        </AddWrapper>
    )
};

const AddWrapper = styled.div`
    width: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: cover;
`

export default AddRecipe;
