import React from 'react';
import { ModalWrapper } from '../RecipeWrapper'

const Details = ({ category, ingredients, description, open, onClose }) => {
    if (!open) return null;
    
    return (
        <div style={OVERLAY_STYLES}>
            <ModalWrapper>
            <button className="close-btn"
                onClick={onClose}>
                <i className="fas fa-times"></i>
                </button>
                <li>Category: {category}</li>
                <li>Ingredients: {ingredients}</li>
                <li>Description: {description}</li>
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

export default Details
