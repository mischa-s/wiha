import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";

const NavbarWrapper = styled.div`
  background-color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const NavBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  max-height: 75px;
`;
const NavLogo = styled.img`
  min-width: 125px;
  width: 125px;
  min-height: 125px;
  height: 125px;
  margin-top: 25px;
`

const NavItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

function Navbar() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarWrapper>
        <NavBarContent>
          <div>
            <Link to="/" title="Logo">
              <NavLogo
                src={logo}
                alt="WIHA"
              />
            </Link>
            <div data-target="navMenu" onClick={() => console.log("hey")}></div>
          </div>
          <div id="navMenu">
            <NavItems>
              <Link to="/play">
                <Button size="lg" variantColor="blackAlpha">Play</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variantColor="blackAlpha">About</Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variantColor="blackAlpha">Blog</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variantColor="blackAlpha">Contact</Button>
              </Link>
            </NavItems>
          </div>
        </NavBarContent>
      </NavbarWrapper>
    </nav>
  );
}

export default Navbar;
