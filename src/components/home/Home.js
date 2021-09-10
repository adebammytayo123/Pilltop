import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Home = ({drawerClickHandler}) => {
    return (
        <React.Fragment>
            <HomeStyles>
                <Header drawerClickHandler={drawerClickHandler} />
            </HomeStyles>
       </React.Fragment>
    )
}

export default Home;

const HomeStyles = styled.div`
background-color: var(--mainPurple)
`
