import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";

const NavbarStyle = styled.div`
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
  width: 125px;
  height: 125px;
  margin-top: 25px;
`
function Navbar() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarStyle>
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
            <div>
              <Link>
                <Button size="lg" variantColor="black">Play</Button>
              </Link>
              <Link>
                <Button size="lg" variantColor="black">About</Button>
              </Link>
              <Link>
                <Button size="lg" variantColor="black">Blog</Button>
              </Link>
              <Link>
                <Button size="lg" variantColor="black">Contact</Button>
              </Link>
            </div>
          </div>
        </NavBarContent>
      </NavbarStyle>
    </nav>
  );
}

export default Navbar;
