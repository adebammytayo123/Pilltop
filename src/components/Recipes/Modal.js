import React from 'react';
import styled from 'styled-components';



const Modal = ({ image, ingredients, open, onClose }) => {
    if (!open) return null;
    return (
        <div style={OVERLAY_STYLES}>
             <ModalWrapper
             className="col-12 col-md-8 col-lg-6">
            <button className="close-btn"
                onClick={onClose}>
                <i className="fas fa-times"></i>
                </button>
                <img src={image} alt=""/>
            <ul className="ingredient-list">
                {ingredients.map(ingredient => (
                    <React.Fragment>
                        <li className="ingredient-text">
                           Ingredients: {ingredient.text}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </ModalWrapper>
       </div>
    )
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: var(--mainYellow);
    padding: 50px;
    z-index: 1000;
    border-radius: 1rem;
    border: var(--mainGreen);
    &:hover {
        border: var(--mainYellow);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .close-btn{
        position: fixed;
        top: 0;
        right: 0;
        background: transparent;
        font-size: 2rem;
        color: var(--mainRed);
        border: none;
        outline: none;
    }
    .ingredient-list {
        list-style: none;
        text-transform: capitalize;
        color: var(--mainWhite);
    }
`

export default Modal;
