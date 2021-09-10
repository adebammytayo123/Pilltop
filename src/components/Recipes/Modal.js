import React from 'react';
import styled from 'styled-components';



const Modal = ({ image, ingredients, open, onClose }) => {
    if (!open) return null;
    return (
        <OverLay>
             <ModalWrapper>
            <Button
                onClick={onClose}>
                <i className="fas fa-times"></i>
                </Button>
                <img src={image} alt=""/>
            <HealthList>
                {ingredients.map(ingredient => (
                    <React.Fragment>
                        <Health>
                           Ingredients: {ingredient.text}
                        </Health>
                    </React.Fragment>
                ))}
            </HealthList>
        </ModalWrapper>
       </OverLay>
    )
};
const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: var(--mainPurple);
    padding: 50px;
    z-index: 1000;
    border-radius: 1rem;
    border: var(--mainGreen);
    &:hover {
        border: var(--mainYellow);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
`


const Button = styled.button`
  position: fixed;
  top: 3%;
  right: 5%;
  background: transparent;
  font-size: 2rem;
  color: var(--mainWhite);
  border: none;
  outline: none;
  cursor: pointer;
    box-shadow: 2px 2px 5px 0px var(--lightPurple);
`;
const HealthList = styled.ul`
    list-style: none;
    text-transform: capitalize;
    color: var(--mainWhite);
`;
const Health = styled.li``;

export default Modal;
