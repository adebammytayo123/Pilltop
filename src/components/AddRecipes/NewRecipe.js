import React, { useState } from "react";
import styled from "styled-components";
import devices from "../utils/devices";
import Details from "./Details";
import salad from "./salad.jpg";

const NewRecipe = ({
  name,
  category,
  ingredients,
  description,
  recipes,
  setRecipes,
  recipe,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const deleteHandler = (e) => {
    setRecipes(recipes.filter((el) => el.id !== recipe.id));
  };
  return (
    <RecipeWrapper>
      <ImageDiv>
        <Image
          src={salad}
          alt={name}
          style={{ width: "12rem", height: "12rem" }}
        />
        <Heading>{name}</Heading>
      </ImageDiv>
      <ButtonDetails>
        <Button onClick={() => setIsOpen(true)}>details</Button>
        <Details
          onClose={() => setIsOpen(false)}
          open={isOpen}
          category={category}
          ingredients={ingredients}
          description={description}
        />
        <Spacer></Spacer>
        <Button onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </Button>
      </ButtonDetails>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.2);
  width: 350px;
  height: auto;
  padding: 2rem;
  margin-right: 2rem;
  border-color: transparent;
  transition: all 1s linear;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0px var(--lightPurple);
  margin-bottom: 3rem;
  @media ${devices.mobile} {
    width: 250px;
    margin-bottom: 2.5rem;
    margin-right: 0 !important;
  }
  .card {
    border-color: transparent;
    background-color: var(--mainWhite);
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .card-img-top {
    transition: all 1s linear;
    border-radius: 3rem;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
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
`;

const ImageDiv = styled.div`
  margin-top: 2rem;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  margin-bottom: 3rem;
  border-radius: 50%;
  transition: all 1s linear;
  @media ${devices.mobile} {
    width: 200px;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const Heading = styled.h3`
  text-align: center;
  letter-spacing: 3px;
`;

const ButtonDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: transparent;
  color: var(--mainGreen);
  border-radius: 0.3em;
  padding: 0.3rem;
  align-self: center;
  font-size: 1.2rem;
  text-transform: capitalize;
  transition: all 1s linear;
  cursor: pointer;
  :hover {
    border: 1px solid var(--mainGreen);
    color: var(--mainWhite);
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

export default NewRecipe;
