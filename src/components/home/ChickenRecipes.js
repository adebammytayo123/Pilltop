import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Recipes/Modal';

const PopularRecipes = ({ chicken }) => {
    const { image, label, healthLabels, ingredients } = chicken.recipe;
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <RecipeWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
            <div className="card py-3">
            <div className="img-container py-3 px-5">
                <img src={image} alt={label} className="card-img-top" />
                <h6 className=" title text-center my-4">{label}</h6>
            </div>
            <div className=" labels text-center py-2">
                    <p> <strong className=""> Health Labels:</strong> {healthLabels}</p>
            </div>
           <div className="card-footer text-center">
                <button onClick={() => setIsOpen(true)} className="btn-green">ingredients</button>
                <Modal
                  onClose={ () => setIsOpen(false)}
                  open={isOpen}
                  
                  ingredients={ingredients}
                />
            </div>
            </div>
        </RecipeWrapper>
    )
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
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
}
.card-img-top {
    transition: all 1s linear;
    border-radius: 3rem;
}
.img-container:hover .card-img-top {
  transform: scale(1.2)
}
.title {
    font-size: 1rem;
    color: var(--mainDark);
}
.labels {
    color: var(--mainYellow) !important;
    text-decoration: none;
}
`

export default PopularRecipes;