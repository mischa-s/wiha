import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-horizontal.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="is-centered social">
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="vimeo" href="https://vimeo.com">
                <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a
                title="github"
                href="https://github.com/mischa-s/wiha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="Github"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
            <div className="is-centered">
              <Link to="/" className="button is-black is-medium">
                Home
              </Link>
              <Link className="button is-black is-medium" to="/play">
                Play
              </Link>
              <Link className="button is-black is-medium" to="/about">
                About
              </Link>
              <Link className="button is-black is-medium" to="/blog">
                Latest Stories
              </Link>
              <Link className="button is-black is-medium" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="WIHA"
            style={{width: '50%'}}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
