import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Categories from './Categories';
import Recipe from './Recipe';

const Home = ({drawerClickHandler}) => {
    return (
        <React.Fragment>
            <HomeStyles>
                <Header drawerClickHandler={drawerClickHandler} />
                <Categories />
                <Recipe />
            </HomeStyles>
       </React.Fragment>
    )
}

export default Home;

const HomeStyles = styled.div`
background: var(--mainPurple);
`
