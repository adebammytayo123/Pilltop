import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import styled from "styled-components";

const SideDrawer = (props) => {
  let drawerClassses = "side-drawer";
  if (props.show) {
    drawerClassses = "side-drawer open";
  }
  return (
    <Nav className={drawerClassses}>
      <NavLists>
        <NavList>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            home
          </Link>
        </NavList>
        <NavList>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/recipe"
          >
            recipe
          </Link>
        </NavList>
        <NavList>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/add">
            add recipe
          </Link>
        </NavList>
      </NavLists>
    </Nav>
  );
};

const Nav = styled.div`
display: flex;
align-items: center;
i {
    position: absolute;
    top: 5%;
    right: 8%;
    color: var(--lightPurple);
    font-size: 2rem;
}
`;
const NavLists = styled.ul`
width: 100%;
  display: block;
  list-style: none;
  padding: 0 !important;
  color: var(--mainWhite) !important;
`;

const NavList = styled.li`
display: flex;
justify-content: center !important;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  transition: 2s ease-in-out;
  :hover {
      background: var(--lightPurple);
  }
`;

export default SideDrawer;
