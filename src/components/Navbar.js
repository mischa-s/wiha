import React from "react";
import {
  IconButton,
  PseudoBox,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import logo from "../img/logo.png";

import theme from "../theme/theme";
const { breakpoints } = theme;

const menuItems = [
  {
    link: "/play",
    label: "Play",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "/contact",
    label: "Contact",
  },
  {
    Leagues: [
      {
        link: "/frozen",
        label: "Frozen Fours",
      },
      {
        link: "/bear",
        label: "Bear League",
      },
      {
        link: "/youth",
        label: "Youth",
      },
    ],
  },
];

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

const MobileNavWrapper = styled.div`
  @media (min-width: ${breakpoints[1]}) {
    display: none;
  }
`;

const DesktopNavWrapper = styled.div`
  display: none;
  @media (min-width: ${breakpoints[1]}) {
    display: initial;
  }
`;

export default function Navbar() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarWrapper>
        <NavBarContent>
          <Link to="/" title="Logo">
            <NavLogo src={logo} alt="WIHA" />
          </Link>
          <DesktopNav />
          <MobileNav />
        </NavBarContent>
      </NavbarWrapper>
    </nav>
  );
}

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <MobileNavWrapper>
      <IconButton
        ref={btnRef}
        variantColor="blackAlpha"
        fontSize="30px"
        onClick={onOpen}
        aria-label="Search database"
        icon="hamburger"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Stack>
              {menuItems.map((item) => {
                if (!item.link) {
                  return <MobileAccordionItem items={item} />;
                }
                return <MobileNavItem item={item} />;
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MobileNavWrapper>
  );
}

function MobileNavItem({ item }) {
  const { link, label } = item;
  return (
    <>
      <Link to={link}>
        <PseudoBox
          p="5"
          w="100%"
          transition="all 0.2s"
          _focus={{ boxShadow: "outline" }}
          _hover={{ bg: "blackAlpha.50" }}
        >
          {label}
        </PseudoBox>
      </Link>
    </>
  );
}

function MobileAccordionItem({ items }) {
  const category = Object.keys(items)[0];

  return (
    <Accordion allowMultiple>
      <AccordionItem defaultIsOpen={false}>
        <AccordionHeader>
          <PseudoBox my="5" flex="1" textAlign="left">
            {category}
          </PseudoBox>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4}>
          {items[category].map((item) => {
            return <MobileNavItem item={item} />;
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function DesktopNav() {
  return (
    <DesktopNavWrapper>
      <NavItems>
        <Menu>
          <MenuButton
            variantColor={"blackAlpha"}
            size="lg"
            as={Button}
            rightIcon="chevron-down"
          >
            Leagues
          </MenuButton>
          <MenuList>
            <Link to={"/frozen"}>
              <MenuItem>Frozen Fours</MenuItem>
            </Link>
            <Link to={"/bear"}>
              <MenuItem>Bear League</MenuItem>
            </Link>
            <Link to={"/youth"}>
              <MenuItem>Youth</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <NavButton link={"/play"} text={"Play"} />
        <NavButton link={"/about"} text={"About"} />
        <NavButton link={"/blog"} text={"Blog"} />
        <NavButton link={"/contact"} text={"Contact"} />
      </NavItems>
    </DesktopNavWrapper>
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
