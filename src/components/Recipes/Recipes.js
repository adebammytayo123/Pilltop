import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
// import { v4 as uuidv4 } from 'uuid';

import background from './background.jpg';
import Recipe from './Recipe';

const Recipes = () => {

    const APP_ID = '0ab08c4d';
    const APP_KEY = '90c93fa98b5ef48c5418c293699297a7';

    const [recipes, setRecipes] = useState([]); 
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("pizza");

  


    const getRecipes = useCallback (async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data.hits)
        setRecipes(data.hits)
        setSearch("")
    }, [query]);


    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    
    const onChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    }
    // console.log(uuidv4())

    return (
        <RecipeWrapper className="py-5">
            <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-9 text-center col-lg-6 py-5">
                    <form className="form my-5" onSubmit={onSubmit}>
                            <input
                                value={search}
                                onChange={onChange}
                                className="form-input mx-1"
                                type="text"
                                autoComplete="off" placeholder="search recipe.." />
                        <button className="form-button" type="submit">search</button>
                    </form>
                </div>
                </div>
                <form action=""></form>
            <div className="row">
            {recipes.map(recipe => (
                            <Recipe
                                // key={uuidv4()}
                               key={recipe.recipe.label}
                               recipe={recipe}
                            />
                        )
                        )}
                </div>
           </div>
        </RecipeWrapper>
    )
};

const RecipeWrapper = styled.div`
    width: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: cover;
    .heading {
        color: var(--mainYellow);
        font-size: 3rem;
        text-transform: capitalize;
    }
    .form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5rem;
        background: rgba(0,0,0,0.2);
    }
    .form-input {
        width: 70%;
        height: 2.2em;
        padding: 0.5em;
        font-size: 1.2em;
        outline: none;
        border-color: transparent;
        transition: all 1s linear;
        border-radius: 0.5em;
        text-transform: capitalize;
        background: var(--mainDark);
        color: var(--mainWhite);
    }
    .form-button {
        width: 5em;
        background: var(--mainGreen);
        border-color: transparent;
        border-radius: 0.2em;
        color: var(--mainDark);
        text-transform: capitalize;
        font-size: 1.2em;
        outline: none;
    }
`


export default Recipes;