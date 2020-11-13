import React, { useState, useEffect } from 'react';
import ChickenRecipes from './ChickenRecipes';
import styled from 'styled-components';

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
            <div className=" mx-auto text-white text-uppercase text-center">
                <h2> recipes</h2>
            </div>
            <div className="container py-3">
            <div className="row">
                {chickenRecipes.map(chicken => (
                    <ChickenRecipes
                        key={chicken.recipe.ingredients}
                        chicken={chicken}
                    />
                ))}
            </div>
          </div>
        </PopularWrapper>
        
    )
};

const PopularWrapper = styled.div`
    background: var(--mainWhite) !important;
    width: 100%;
`

export default Recipe;
