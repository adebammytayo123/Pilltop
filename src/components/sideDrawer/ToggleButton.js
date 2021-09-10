import React from 'react';
import styled from 'styled-components';

const  ToggleButton = (props) => {
    return (
       <ButtonStyles onClick= {props.click}>
           <Button></Button>
           <Button></Button>
           <Button></Button>
       </ButtonStyles>
    )
}

const ButtonStyles = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 1.5rem;
width: 2rem;
background: transparent;
border: none;
padding: 0;
box-sizing: border-box;
:focus {
  outline: none;
}
`
const Button = styled.div`
width: 2rem;
height: 0.15em;
background: var(--lightPurple);
`

export default ToggleButton;
