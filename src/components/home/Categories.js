import React, { useState } from "react";
import styled from "styled-components";
import devices from '../utils/devices';
import salads from "../../Assets/salads.jpg";
import desserts from "../../Assets/desserts.jpg";
import drinks from "../../Assets/drinks.jpg";

function Categories() {

    const [salad, setSalad] = useState('');
    const [dessert, setDessert] = useState('');
    const [drink, setDrink] = useState('');
  return (
    <CategoriesWrapper>
      <ChooseHeading>
        <ChooseName> choose a category</ChooseName>
      </ChooseHeading>
      <PopularCategory>
        <PopularHeading>
          <PopularName>popular categories</PopularName>
        </PopularHeading>
        <PopularBody>
          <PopularItem>
            <ImageDiv>
              <Img
                src={salads}
                alt="item"
                style={{ width: "12rem", height: "10rem" }}
              />
            </ImageDiv>
            <Heading>salads</Heading>
            {salad === "salads" ? <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error alias, quisquam nemo possimus reprehenderit dignissimos sunt consectetur maiores eius laboriosam laborum beatae sint quo minima accusamus modi perferendis quibusdam.</Para> : ""}
            {salad === '' ? 
            <Button onClick={() => setSalad("salads")}>learn more</Button> :
            <Button onClick={() => setSalad("")}>learn less</Button>}
          </PopularItem>
          <PopularItem>
            <ImageDiv>
              <Img
                src={desserts}
                alt="item"
                style={{ width: "12rem", height: "10rem" }}
              />
            </ImageDiv>
            <Heading>desserts</Heading>
            {dessert === "desserts" ? 
            <Para>
                A good meal is never complete without a dessert as backup. 
                <br></br>
                Learn how to make your diffrent desserts by simply searching by dessert name
            </Para> : ""}
            {dessert === '' ? 
            <Button onClick={() => setDessert("desserts")}>learn more</Button> :
            <Button onClick={() => setDessert("")}>learn less</Button>}
          </PopularItem>
          <PopularItem>
            <ImageDiv>
              <Img
                src={drinks}
                alt="item"
              />
            </ImageDiv>
            <Heading>drinks</Heading>
            {drink === "drinks" ? <Para>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nulla dolor quasi, enim ullam quod accusantium, voluptatum tempore modi nihil id officia dolorem quas. Dolor quasi sunt doloremque saepe rem?</Para> : ""}
            {drink === '' ? 
            <Button onClick={() => setDrink("drinks")}>learn more</Button> :
            <Button onClick={() => setDrink("")}>learn less</Button>}
          </PopularItem>
        </PopularBody>
      </PopularCategory>
    </CategoriesWrapper>
  );
}

const CategoriesWrapper = styled.div`
  width: 100%;
`;

const ChooseHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1.5rem;
  font-family: "Aclonica", sans-serif;
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainGreen) !important;
  letter-spacing: 0.2rem;
  height: 100px;
`;
const ChooseName = styled.h1`
  text-transform: capitalize;
  padding-top: 1.5rem;
  @media ${devices.mobile} {
    font-size: 1.5rem;
  }
`;
const PopularCategory = styled.div`
  text-align: center;
`;
const PopularHeading = styled.div`
  margin-bottom: -1rem;
  margin-top: 4rem;
`;
const PopularName = styled.h1`
  font-size: 3rem;
  color: rgb(160, 174, 192);
`;

const PopularBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media ${devices.mobile} {
      display: block;
  }
`;

const PopularItem = styled.div`
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
  @media ${devices.mobile} {
      width: 280px;
      margin-bottom: 2.5rem;
      margin-left: 1rem;
    }
  :hover {
      box-shadow: 2px 2px 5px 0px var(--lightPurple);
    }
`;

const ImageDiv = styled.div`
margin-top: 3rem;
`
const Img= styled.img`
width: 12rem;
height: 10rem;
border-radius: 10px;
    transition: all 1s linear;
    :hover {
    transform: scale(1.2);
  }
`
const Heading = styled.h1`
text-transform: capitalize;
letter-spacing: 0.5rem;
`
const Para = styled.p``
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
  `
export default Categories;
