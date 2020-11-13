import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';


const SideDrawer = (props) => {
    let drawerClassses = 'side-drawer';
    if (props.show) {
        drawerClassses = 'side-drawer open';
    }
    return (
        <nav className={drawerClassses}>
            <ul className="navbar-nav align-items-center ml-auto">
           <i className=" hamburger  align-items-center  fas fa-hamburger "></i>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/recipe">
                        recipe
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">
                        <span><i className="fas icon fa-plus mr-2"></i></span>
                        add recipe
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default SideDrawer;
