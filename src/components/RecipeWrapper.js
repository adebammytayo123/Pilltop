import styled from 'styled-components';

export const ModalWrapper = styled.div`
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
