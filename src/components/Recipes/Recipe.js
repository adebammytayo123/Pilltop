import React, { useState } from "react";
import styled from "styled-components";
import devices from '../utils/devices';
import Modal from "./Modal";

const Recipe = ({ recipe }) => {
  const { image, label, url, ingredients } = recipe.recipe;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <RecipeWrapper>
      <RecipeItem>
        <ImageDiv>
          <Image src={image} alt={label} />
          <Heading>{label}</Heading>
        </ImageDiv>
        <LinkButton>
        <LinkDiv>
          <Link href={url} style={{color: "inherit", textDecoration: 'none'}}>URL</Link>
        </LinkDiv>
        <ButtonDiv>
          <Button onClick={() => setIsOpen(true)}>ingredients</Button>
          <Modal
            onClose={() => setIsOpen(false)}
            open={isOpen}
            ingredients={ingredients}
          />
        </ButtonDiv>
        </LinkButton>
      </RecipeItem>
    </RecipeWrapper>
  );
};

const RecipeWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

const RecipeItem = styled.div`
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
  height: auto;
  margin-bottom: 2.5rem;
}
`
const ImageDiv = styled.div`
margin-top: 2rem;
`
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
`

const Heading = styled.h3`
text-align: center;
letter-spacing: 3px;
`

const LinkButton = styled.div`
display: flex;
justify-content: space-between;
`
const LinkDiv = styled.div``
const Link = styled.a``

const ButtonDiv = styled.div`
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
}`;

export default Recipe;
