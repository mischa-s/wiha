import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";

import logo from "../img/logo-horizontal.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import github from "../img/github-icon.svg";

const Footer = function() {
  const FooterWrapper = styled.footer`
    display: flex;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    background: black;
  `;

  const SocialLinks = styled.div`
    display: flex;
    justify-content: space-between;
    background-size: cover;
    width: 20em;
    margin: 0.5rem auto;
  `;

  const SocialIcon = styled.img`
    color: white;
    width: 2em;
    height: 2em;
  `;

  const FooterLogo = styled.img`
    width: 25em;
    margin: 1rem auto;
  `;

  const FooterPageLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20em;
    margin: 0.5rem auto;
    align-items: center;
  `;

  const LinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin-top: 1em;
    width: 50%;
    min-width: 26em;
    background: #fef001;
    justify-content: space-between;
  `;

  return (
    <FooterWrapper>
      <FooterLogo src={logo} alt="WIHA" />
      <LinksWrapper>
        <FooterPageLinks>
          <Link to="/">
            <Button variantColor="black" variant="link">Home</Button>
          </Link>
          <Link to="/play">
            <Button variantColor="black" variant="link">Play</Button>
          </Link>
          <Link to="/about">
            <Button variantColor="black" variant="link">About</Button>
          </Link>
          <Link to="/blog">
            <Button variantColor="black" variant="link">Blog</Button>
          </Link>
          <Link to="/contact">
            <Button variantColor="black" variant="link">Contact</Button>
          </Link>
        </FooterPageLinks>

        <SocialLinks>
          <a title="facebook" href="https://facebook.com">
            <SocialIcon src={facebook} alt="Facebook" />
          </a>
          <a title="twitter" href="https://twitter.com">
            <SocialIcon className="fas fa-lg" src={twitter} alt="Twitter" />
          </a>
          <a title="instagram" href="https://instagram.com">
            <SocialIcon src={instagram} alt="Instagram" />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <SocialIcon src={vimeo} alt="Vimeo" />
          </a>
          <a
            ti15e="github"
            href="https://github.com/mischa-s/wiha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={github} alt="Github" />
          </a>
        </SocialLinks>
      </LinksWrapper>
    </FooterWrapper>
  );
};

export default Footer;
