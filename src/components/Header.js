import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import devices from "./utils/devices";
import banner from "../Assets/banner.jpg";
import Typical from "react-typical";
import ToggleButton from "./sideDrawer/ToggleButton";

const Header = (props) => {
  return (
    <Nav>
      <NavWrapper>
        <NavTitle>
          <i class="fas fa-pizza-slice hamburger"></i>
          <NavHeading><span>Taste </span> Maker</NavHeading>
        </NavTitle>
        <NavToggle>
          <ToggleButton click={props.drawerClickHandler} />
        </NavToggle>
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
              recipes
            </Link>
          </NavList>
          <NavList>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/add"
            >
              <span className="plus-icon">
                <i class="fas fa-plus plus"></i>{" "}
              </span>
              add recipe
            </Link>
          </NavList>
        </NavLists>
      </NavWrapper>
      <Banner>
        <BannerTitle>
          <i class="fas fa-pizza-slice hamburger"></i>
          <BannerHead>
            Welcome To <span>Taste Maker</span>
          </BannerHead>
        </BannerTitle>
        <BannerPara>
          Do you enjoy making delicious and mouth-watering meals?
        </BannerPara>
        <Typical
          loop={1}
          wrapper="p"
          steps={[
            "Discover new recipes...",
            1000,
            "Share your recipes...",
            1000,
            "Discover new recipes... share your recipes...",
            1000,
          ]}
        />
      </Banner>
    </Nav>
  );
};

const Nav = styled.div`
  position: relative;
  background: url(${banner});
  background-color: rgba(0, 0, 0, 0.5) center center no-repeat !important;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: 1;
  ::before {
    opacity: 0.6;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;
  }
`;

const NavWrapper = styled.nav`
  background: rgba(0, 0, 0, 0.3) !important;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 60px;
  padding: 1rem 2rem;
  z-index: 5;
  .plus-icon {
    font-size: 1rem;
    color: var(--lightPurple);
    margin-right: 0.5rem;
  }
`;
const NavTitle = styled.div`
  display: flex;
  align-items: center;
  .hamburger {
    font-size: 3rem;
    color: var(--lightPurple);
  @media ${devices.mobile} {
      display: none;
  }
  }
`;

const NavHeading = styled.h1`
display: none;
  @media ${devices.mobile} {
      display: block;
      font-family: "Aclonica", sans-serif;
      span {
          color: var(--lightPurple);
      }
  }
`
const NavToggle = styled.div`
  display: none;
  @media ${devices.mobile} {
    display: block;
  }
`;

const NavLists = styled.ul`
  display: flex;
  list-style: none;
  color: var(--mainWhite) !important;
  @media ${devices.mobile} {
    display: none;
  }
`;

const NavList = styled.li`
  font-size: 1.2rem;
  padding-left: 2rem;
  text-transform: capitalize;
`;

const Banner = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  z-index: 5;
  color: rgb(160, 174, 192);
  font-family: "Aclonica", sans-serif;
  @media ${devices.mobile} {
      top: 30%;
  }
  p {
    margin-top: -2rem;
    font-size: 1.5rem;
    font-style: italic;
    text-align: center;
    font-family: "Aclonica", sans-serif;
  @media ${devices.mobile} {
      margin-top: 1rem;
  }
  }
`;

const BannerTitle = styled.div`
  display: block;
  text-align: center;
  
  .hamburger {
      display: none;
  @media ${devices.mobile} {
      display: block;
    font-size: 3rem;
    color: var(--lightPurple);
  }
  }
`;
const BannerHead = styled.h1`
  font-size: 3rem;
  @media ${devices.mobile} {
      font-size: 1.5rem;
      display: none;
  }
  span {
    color: var(--lightPurple);
  }
`;
const BannerPara = styled.h6`
  margin-top: -0.5rem;
  font-size: 1.3rem;
  @media ${devices.mobile} {
      margin-top: 1rem !important;
      line-height: 2rem;
      text-align: center;
  }
`;

export default Header;
