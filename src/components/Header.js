import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ToggleButton from './sideDrawer/ToggleButton';

const Header = (props) => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-5">
            <div className=" nav-title d-flex align-items-center">
                <i className=" d-none d-lg-block hamburger fas fa-hamburger mr-2"></i>
                <h2 className=" title text-capitalize text-slanted ml-1">taste maker</h2>
            </div>
            <div>
                <ToggleButton click={props.drawerClickHandler} />
            </div>
            <ul className="navbar-nav d-none d-lg-flex align-items-center ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/recipe">recipes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">
                        <span className="plus-icon"><i className="fas fa-plus"></i> </span>
                        add recipe
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
};

const NavWrapper = styled.nav`
width: 100%;
background: rgba(0,0,0,0.6);
box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.5);
position: absolute;
.hamburger {
    color: var(--mainYellow) !important;
    font-size: 2.5rem;
}
.title {
    color: var(--mainWhite)
}
.nav-link {
    font-size: 1.2rem;
    color: var(--mainWhite) !important;
    text-transform: capitalize;
}
.plus-icon {
    font-size: 1rem;
}
`

export default Header
