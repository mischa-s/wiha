import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/core";


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
  position: relative;
`;

const NavItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export default function Navbar() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarWrapper>
        <NavBarContent>
          <div>
            <Link to="/" title="Logo">
              <NavLogo src={logo} alt="WIHA" />
            </Link>
          </div>
          <div id="navMenu">
            <NavItems>
              <Menu>
                <MenuButton variantColor={"blackAlpha"} size="lg" as={Button} rightIcon="chevron-down">
                  Leagues
                </MenuButton>
                <MenuList >
                  <Link to={"/frozen"}><MenuItem >Frozen Fours</MenuItem></Link>
                  <Link to={"/bear"}><MenuItem >Bear League</MenuItem></Link>
                  <Link to={"/youth"}><MenuItem >Youth</MenuItem></Link>
                </MenuList>
              </Menu>
              <NavButton link={"/play"} text={"Play"} />
              <NavButton link={"/about"} text={"About"} />
              <NavButton link={"/blog"} text={"Blog"} />
              <NavButton link={"/contact"} text={"Contact"} />
            </NavItems>
          </div>
        </NavBarContent>
      </NavbarWrapper>
    </nav>
  );
}

function NavButton({ link, text }) {
  return (
    <Link to={link}>
      <Button variantColor={"blackAlpha"} size="lg">
        {text}
      </Button>
    </Link>
  );
}
