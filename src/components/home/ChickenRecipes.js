import React, { useState } from "react";
import styled from "styled-components";
import devices from "../utils/devices";
import Modal from "../Recipes/Modal";
import HealthModal from "../Recipes/HealthModal";

const PopularRecipes = ({ chicken }) => {
  const { image, label, healthLabels, ingredients } = chicken.recipe;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <RecipeWrapper>
        <ChickenItem>
          <ImageDiv>
            <Image src={image} alt={label} />
            <Title>Recipe Name: {label}</Title>
          </ImageDiv>
          <ButtonDiv>
            <Button onClick={() => setOpen(true)}>health benefits</Button>
            <HealthModal
              onClose={() => setOpen(false)}
              open={open}
              healthLabels={healthLabels}
            />
            <Button onClick={() => setIsOpen(true)}>ingredients</Button>
            <Modal
              onClose={() => setIsOpen(false)}
              open={isOpen}
              ingredients={ingredients}
            />
          </ButtonDiv>
        </ChickenItem>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    height: 100%;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
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
  .title {
    font-size: 1rem;
    color: var(--mainDark);
  }
  .labels {
    color: var(--mainYellow) !important;
    text-decoration: none;
  }
`;

const ChickenItem = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.2);
  width: 350px;
  height: 450px;
  padding: 2rem;
  margin-right: 2rem;
  border-color: transparent;
  transition: all 1s linear;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0px var(--lightPurple);
    margin-bottom: 3rem;
  @media ${devices.mobile} {
    width: 280px;
    margin-bottom: 2.5rem;
    margin-left: 1rem;
  }
`;


const ImageDiv = styled.div`
margin-top: 3rem;
`
const Image= styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 250px;
margin-bottom: 3rem;
border-radius: 50%;
    transition: all 1s linear;
    :hover {
    transform: scale(1.2);
  }
`

const Title = styled.h3`
text-align: center;
letter-spacing: 3px;
`;

const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem;
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
}`;

export default PopularRecipes;
