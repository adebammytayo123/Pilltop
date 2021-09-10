import React from 'react';
import styled from 'styled-components';
import salads from './Assets/salads.jpg';
import desserts from './Assets/desserts.jpg';
import drinks from './Assets/drinks.jpg';

function Categories() {
    return (
        <CategoriesWrapper className="py-3">
            <div className=" mx-auto text-white text-uppercase text-center">
            <h2> choose a category</h2>
            </div>
            <div className="mt-5">
            <div className=" popular-container mx-auto text-uppercase text-center">
            <h1>popular categories</h1>
                </div>
                <div className="row">
                    <div className="col-9 mx-auto d-block d-lg-flex text-center mt-3">
                        <div className="card mx-2 my-4">
                            <div className="img-container p-5">
                                <img src={salads} alt="item" className="card-img-top" style={{width: "12rem", height: "10rem",}} />
                            </div>
                            <h3 className=" item pb-3 text-capitalize">salads</h3>
                            <p className="item-info">Lorem, ipsum dolor.</p>
                            <button className="btn-green mb-3">learn more</button>
                        </div>
                        <div className="card mx-2 my-4">
                            <div className="img-container p-5">
                                <img src={desserts} alt="item" className="card-img-top" style={{width: "12rem", height: "10rem"}} />
                            </div>
                            <h3 className=" item pb-3 text-capitalize">desserts</h3>
                            <p className="item-info">Lorem, ipsum dolor.</p>
                            <button className="btn-green mb-3">learn more</button>
                        </div>
                        <div className="card mx-2 my-4">
                            <div className="img-container p-5">
                                <img src={drinks} alt="item"  className="card-img-top" style={{width: "12rem", height: "10rem"}} />
                            </div>
                            <h3 className=" item pb-3 text-capitalize">drinks</h3>
                            <p className="item-info">Lorem, ipsum dolor.</p>
                            <button className="btn-green mb-3">learn more</button>
                        </div>
                    </div>
                </div>
           </div>
       </CategoriesWrapper>
    )
}

const CategoriesWrapper = styled.div`
background: var(--mainPurple);
    width: 100%;
.popular-container {
    font-family:'Aclonica', sans-serif;
    color: var(--mainGreen) !important;
    letter-spacing: 0.2rem;
}
.card {
    width: 100%;
    border-color: transparent;
    transition: all 1s linear;
}
&:hover {
    .card {
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
}
.card-img-top {
    border-radius: 3rem;
  transition: all 1s linear;
}
.img-container:hover .card-img-top {
  transform: scale(1.2)
}
.item {
    color: var(--mainDark);
    font-size: 1em;
}
.item-info {
    color: var(--mainYellow);
    font-size: 1em;
}
.btn-green:hover {
    border-color: var(--mainGreen);
  background: var(--mainGreen);
  color: var(--mainWhite)
}
`
export default Categories;

