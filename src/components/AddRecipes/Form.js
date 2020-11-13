import React from 'react';
import styled from 'styled-components';

const Form = ({ name, setName, category, setCategory, ingredients, setIngredients, description, setDescription, recipes, setRecipes }) => {


    const nameInputHandler = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const categoryInputHandler = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    };


    const ingredientsInputHandler = (e) => {
        console.log(e.target.value)
        setIngredients(e.target.value)
    };


    const descriptionInputHandler = (e) => {
        console.log(e.target.value)
       setDescription(e.target.value)
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        setRecipes([
            ...recipes,
            { name: name, category: category, ingredients: ingredients, description: description, completed: false, id: Math.random() * 1000 }
        ])
        // console.log(setRecipes)
        setName("")
        setCategory("")
        setIngredients("")
        setDescription("")
    };



   
   
    return (
        <FormWrapper className=" col-10 col-lg-8 my-5 mx-auto text-center">
            <form onSubmit={handleSubmit} className="form col-12">
                <h1 className=" title font-italic text-capitalize mb-5">add your favorite recipe</h1>
                <div className="form-field pb-3">
                    <label className="font-italic" htmlFor="">recipe name</label>
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={nameInputHandler}
                        className="name-input"
                        placeholder="recipe name..." />
                </div>
                <div className="form-field pb-3">
                    <label className="font-italic" htmlFor="">recipe category</label>
                    <input
                        name="category"
                        type="text"
                        value={category}
                        onChange={categoryInputHandler}
                        className="name-input"
                        placeholder="recipe category..." />
                </div>
                <div className="form-field pb-3">
                    <label className="font-italic" htmlFor="">recipe ingredients</label>
                    <input
                        name="igredients"
                        type="text"
                        value={ingredients}
                        onChange={ingredientsInputHandler}
                        className="name-input"
                        placeholder="seperated by commas ','..." />
                </div>
                <div className="form-field pb-3">
                    <label className="font-italic" htmlFor="">cooking direction</label>
                    <input
                        name="description"
                        type="text"
                        value={description}
                        onChange={descriptionInputHandler}
                        className="name-input"
                        placeholder="recipe description..." />
                </div>
                <button type="submit" className=" save-btn mx-auto text-center my-3">Save</button>
            </form>
        </FormWrapper>
    )
};

const FormWrapper = styled.div`
background: var(--mainWhite);
padding: 2em;
border-radius: 0.5rem;
border: 0.1rem solid var(--mainGreen);
width: 2000px;
.form {
    display: inline-block;
    width: 100%;
}
.title {
    color: var(--mainYellow)
}
.form-field {
    width: 100%;
}
.form-field label {
    width: 25%;
    font-size: 1.2rem;
   text-transform: capitalize;
   color: var(--mainDark);
}
.form-field input {
    width: 70%;
    height: 3rem;
    text-transform: capitalize;
    margin-left: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    background: var(--mainDark);
    color: var(--mainWhite) !important;
    border: 0.1rem solid var(--mainYellow);
    border-radius: 0.2rem;
    outline: none;
}
.save-btn {
    padding: 0.3rem 1.2rem;
    background: var(--mainDark);
    color: var(--mainWhite);
    border: 0.1em solid var(--mainYellow);
    border-radius: 0.4rem;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
}
`


export default Form;
