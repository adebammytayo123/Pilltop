import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import devices from '../utils/devices';
import banner from '../../Assets/banner.jpg';
import Form from './Form';
import NewRecipeList from './NewRecipeList';


const AddRecipe = () => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");

    const [recipes, setRecipes] = useState([]);

  
    return (
        <RecipeWrapper>
            <RecipeBody>
        <Link to="/">
          <Back>
            <i class="fas fa-arrow-left"></i>
            <span>Go Back</span>
          </Back>
        </Link>
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
                <New>
                    <NewRecipeList
                        recipes={recipes}
                        setRecipes={setRecipes}
                    />
                </New>
            </RecipeBody>
        </RecipeWrapper>
    )
};


const RecipeWrapper = styled.div`
  position: relative;
  background: url(${banner});
  background-color: rgba(0, 0, 0, 0.5) center center repeat !important;
  background-size: cover;
  width: 100%;
  height: 1300px;
  z-index: 1;
  overflow-x: hidden;
  ::before {
    opacity: 0.7;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--mainPurple);
    z-index: 1;
  }
  @media ${devices.mobile} {
      height: 3000px;
  }
`;

const RecipeBody = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem 2rem;
  z-index: 5;
  height: auto;
`;

const Back = styled.button`
  margin: 4rem 2rem;
  padding: 1rem;
  background: transparent;
  border: none;
  box-shadow: 2px 2px 5px 0px var(--mainGreen);
  cursor: pointer;
  i {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: var(--mainGreen);
  }
  span {
    font-size: 1.5rem;
    margin-top: -2rem;
    color: var(--mainWhite);
  }
`;

const New = styled.div`
margin-top: 5rem;
`

export default AddRecipe;
