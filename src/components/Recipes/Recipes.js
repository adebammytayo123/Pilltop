import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import devices from "../utils/devices";
// import { v4 as uuidv4 } from 'uuid';

import banner from "../../Assets/banner.jpg";
import Recipe from "./Recipe";

const Recipes = () => {
  const APP_ID = "0ab08c4d";
  const APP_KEY = "90c93fa98b5ef48c5418c293699297a7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  const getRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    setSearch("");
  }, [query]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <RecipeWrapper>
      <RecipeBody>
        <Link to="/">
          <Back>
            <i class="fas fa-arrow-left"></i>
            <span>Go Back</span>
          </Back>
        </Link>
        <RecipeTop>
          <Form onSubmit={onSubmit}>
            <Input
              value={search}
              onChange={onChange}
              type="text"
              autoComplete="off"
              placeholder="search recipe.."
            />
            <Button type="submit">search</Button>
          </Form>
        </RecipeTop>
        <Recipess>
          {recipes.map((recipe) => (
            <Recipe key={recipe.recipe.label} recipe={recipe} />
          ))}
        </Recipess>
      </RecipeBody>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.div`
  position: relative;
  background: url(${banner});
  background-color: rgba(0, 0, 0, 0.5) center center repeat !important;
  background-size: cover;
  width: 100%;
  height: 2300px;
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
    height: 4000px;
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

const RecipeTop = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30rem;
  width: 50%;
  height: 5rem;
  @media ${devices.mobile} {
    margin-left: 0 !important;
    width: 100%;
  }
`;
const Input = styled.input`
  width: 70%;
  height: 2.2em;
  padding: 0.5em;
  font-size: 1.2em;
  outline: none;
  border-color: transparent;
  transition: all 1s linear;
  border-radius: 0.5em;
  text-transform: capitalize;
  background: rgba(0, 0, 0, 0.2);
  color: var(--mainWhite);
`;

const Button = styled.button`
  width: 5em;
  height: 3.5rem;
  background: var(--mainGreen);
  border-color: transparent;
  border-radius: 0.2em;
  color: var(--mainDark);
  text-transform: capitalize;
  font-size: 1.2em;
  outline: none;
`;

const Recipess = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  position: absolute;
  margin-top: 5rem;
`;

export default Recipes;
