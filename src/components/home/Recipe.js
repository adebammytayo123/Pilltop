import React, { useState, useEffect } from 'react';
import ChickenRecipes from './ChickenRecipes';
import styled from 'styled-components';
import devices from '../utils/devices';

const Recipe = () => {

    const APP_ID = '0ab08c4d';
    const APP_KEY = '90c93fa98b5ef48c5418c293699297a7';

    const [chickenRecipes, setChickenRecipes] = useState([]);

    const getChicken = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data.hits)
        setChickenRecipes(data.hits);
    };

    useEffect(() => {
        getChicken()
    }, [])

    return (
        <PopularWrapper>
            <RecipeHeading>
                <Heading> Chicken Recipes</Heading>
            </RecipeHeading>
            <ChickenRecipe>
                {chickenRecipes.map(chicken => (
                    <ChickenRecipes
                        key={chicken.recipe.ingredients}
                        chicken={chicken}
                    />
                ))}
            </ChickenRecipe>
        </PopularWrapper>
        
    )
};

const PopularWrapper = styled.div`
margin-top: 5rem;
    width: 100%;
`

const RecipeHeading = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: -1.5rem;
font-family: "Aclonica", sans-serif;
background: rgba(0, 0, 0, 0.5);
color: var(--mainGreen) !important;
letter-spacing: 0.2rem;
height: 70px;
text-transform: capitalize;
border-radius: 2rem;
`
const Heading = styled.h2``
const ChickenRecipe = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5rem;
  @media ${devices.mobile} {
    display: block;
  }
`

export default Recipe;
