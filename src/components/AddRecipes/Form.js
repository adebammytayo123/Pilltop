import React from 'react';
import styled from 'styled-components';
import devices from '../utils/devices';

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
        setName("")
        setCategory("")
        setIngredients("")
        setDescription("")
    };



   
   
    return (
        <FormWrapper>
            <Forms onSubmit={handleSubmit}>
                <FormHeading>add your favorite recipe</FormHeading>
                <FormField>
                    <FormLabel htmlFor="">recipe name</FormLabel>
                    <Input
                        name="name"
                        type="text"
                        value={name}
                        onChange={nameInputHandler}
                        placeholder="recipe name..." />
                </FormField>
                <FormField>
                    <FormLabel htmlFor="">recipe category</FormLabel>
                    <Input
                        name="category"
                        type="text"
                        value={category}
                        onChange={categoryInputHandler}
                        placeholder="recipe category..." />
                </FormField>
                <FormField>
                    <FormLabel htmlFor="">recipe ingredients</FormLabel>
                    <Input
                        name="igredients"
                        type="text"
                        value={ingredients}
                        onChange={ingredientsInputHandler}
                        placeholder="seperated by commas ','..." />
                </FormField>
                <FormField>
                    <FormLabel className="font-italic" htmlFor="">cooking direction</FormLabel>
                    <Input
                        name="description"
                        type="text"
                        value={description}
                        onChange={descriptionInputHandler}
                        placeholder="recipe description..." />
                </FormField>
                <Button type="submit">Save</Button>
            </Forms>
        </FormWrapper>
    )
};

const FormWrapper = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
background: var(--mainPurple);
padding: 2em;
border-radius: 0.5rem;
width: 40%;
@media ${devices.mobile} {
    margin-left: -1rem;
    width: 90%;
}
`

const Forms = styled.form`
display: inline-block;
width: 100%;
`

const FormHeading = styled.h1`
text-align: center;
text-transform: capitalize;
`
const FormField = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const FormLabel = styled.label`
width: 25%;
font-size: 1.2rem;
text-transform: capitalize;
`

const Input = styled.input`
width: 70%;
height: 3rem;
text-transform: capitalize;
margin-bottom: 1.5rem;
margin-left: 1rem;
padding: 0.5rem;
font-size: 1rem;
background: rgba(0, 0, 0, 0.2);
color: var(--mainWhite) !important;
border-radius: 0.2rem;
outline: none;
`

const Button = styled.button`
float: right;
padding: 0.3rem 1.2rem;
background: rgba(0, 0, 0, 0.2);;
color: var(--mainWhite);
border-radius: 0.4rem;
font-size: 1.3rem;
border: 2px solid var(--mainGreen);
letter-spacing: 0.1rem;
cursor: pointer;
`



export default Form;
