import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Recipe from './Recipe';

const Home = () => {
    return (
        <React.Fragment>
            <div className="row ">
                <Banner />
                <Categories />
                <Recipe />
            </div>
       </React.Fragment>
    )
}

export default Home;
