import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";

import logo from "../img/logo-horizontal.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import github from "../img/github-icon.svg";
import youtube from "../img/social/youtube.svg";

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
    background: #fef001;
    padding: .5em;
    width: 2.5em;
    height: 2.5em;
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
    margin-top: .75em;
    margin-bottom: .5em;
    width: 50%;
    min-width: 23em;
    border: 2px solid #fef001;
    justify-content: space-between;
  `;

  return (
    <FooterWrapper>
      <FooterLogo src={logo} alt="WIHA" />
      <LinksWrapper>
        <FooterPageLinks>
          <Link to="/">
            <Button variantColor="yellow" variant="link">Home</Button>
          </Link>
          <Link to="/play">
            <Button variantColor="yellow" variant="link">Play</Button>
          </Link>
          <Link to="/about">
            <Button variantColor="yellow" variant="link">About</Button>
          </Link>
          <Link to="/blog">
            <Button variantColor="yellow" variant="link">Blog</Button>
          </Link>
          <Link to="/contact">
            <Button variantColor="yellow" variant="link">Contact</Button>
          </Link>
        </FooterPageLinks>

        <SocialLinks>
          <a title="facebook" href="https://www.facebook.com/wellingtonicehockeyassociation/">
            <SocialIcon src={facebook} alt="Facebook" />
          </a>
          <a title="twitter" href="https://twitter.com">
            <SocialIcon className="fas fa-lg" src={twitter} alt="Twitter" />
          </a>
          <a title="instagram" href="https://www.instagram.com/wellingtonicehockey/">
            <SocialIcon src={instagram} alt="Instagram" />
          </a>
          <a title="youtube" href="https://www.instagram.com/wellingtonicehockey/">
            <SocialIcon src={youtube} alt="Youtube" />
          </a>
          <a
            title="github"
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
