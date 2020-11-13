import React from 'react';
import banner from './Assets/banner.jpg';
import styled from 'styled-components';

const Banner = () => {
    return (
        <BannerWrapper className="py-5 ">
            <div className="container text-capitalize  my-5">
                <div className="row-start">
                   <div className="d-flex d-lg-none col-12 col-md-8 col-lg-8 bread-icon">
                    <span><i className="fas fa-bread-slice"></i></span>
                   </div>
                    <div className=" d-none d-lg-block col-12 col-md-8 col-lg-8 mt-5">
                    <h6 className="text-title">
                            <span><i className="fas fa-pizza-slice pizza-icon mr-2"></i></span>
                          the taste maker
                        </h6>
                    </div>
                    <div className="col-12 col-md-8 text font-italic text-center col-lg-6 mt-5">
                    <p>do you enjoy making mouth watering meals ? you are in the right place....</p>
                    </div>
                    <div className="col-12 col-md-8 text-container font-italic text-center col-lg-6 mt-5">
                        <p>discover new <span className="span">recipes</span>!!</p>
                    </div>
                </div>
            </div>
        </BannerWrapper>
    )
};

const BannerWrapper = styled.div`
    width: 100%;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    background-size: cover;
.pizza-icon {
    color: var(--mainYellow);
}
.bread-icon {
    color: var(--mainYellow);
    margin-left: 2em;
    font-size: 5em;
}
.text-container {
    font-size: 2.5em
}
.span {
    color: var(--mainYellow);
}
`

export default Banner;
