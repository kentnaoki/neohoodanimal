import styled from "styled-components";
import logo from "../img/logo.png";
import twitter from "../img/twitter.png";
import discord from "../img/discord.png";
import { slide as Menu } from "react-burger-menu";

const NavigationStyle = styled.div`
  height: 90px;
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  @media screen and (max-width: 959px) {
    height: auto;
    .nav {
      display: block;
    }
    .logo-section {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    height: auto;
    .nav {
      display: block;
    }
    .nav-section a {
      display: none;
    }
  }
  .logo-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
  }
  .nav-section {
    flex: 2;
  }
  .logo-img {
    height: 70px;
    max-width: 100%;
    vertical-align: middle;
  }

  .social-media {
    display: flex;
  }
  .social-media-link {
    height: 46px;
    width: 52px;
  }
  .social-media a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-media-link img:hover {
    border: grey 2px solid;
  }
  .twitter-img {
    height: 40px;
    border-radius: 30px;
  }
  .discord-img {
    height: 40px;
    border-radius: 30px;
  }
  .nav-section a {
    color: #ffffffc5;
    padding-left: 1rem;
    padding-right: 1rem;
    text-decoration: none;
  }
  .nav-section a:hover {
    cursor: pointer;
    color: white;
  }
`;

const MenuStyle = styled.div`
  @media screen and (max-width: 480px) {
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #ffffffc5;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: #ffffffc5;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }

    /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 0.8em;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
      margin: 20px auto;
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const Navigation = () => {
  return (
    <NavigationStyle>
      <div className="nav">
        <div className="logo-section">
          <img className="logo-img" src={logo} alt="logo" />
          <div className="social-media">
            <div className="link-container">
              <a
                className="social-media-link"
                href="https://twitter.com/Tabenomics_web3"
              >
                <img className="twitter-img" src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="link-container">
              <a
                className="social-media-link"
                href="https://discord.gg/s2QhcNPyTe"
              >
                <img className="discord-img" src={discord} alt="discord" />
              </a>
            </div>
          </div>
        </div>
        <div className="nav-section">
          <a href="#about">ABOUT</a>
          <a href="#statement">STATEMENT</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#team">TEAM</a>
        </div>

        <MenuStyle>
          <Menu width={"100%"}>
            <a id="a" href="#about">
              ABOUT
            </a>
            <a id="b" href="#statement">
              STATEMENT
            </a>
            <a id="c" href="#roadmap">
              ROADMAP
            </a>
            <a id="d" href="#team">
              TEAM
            </a>
          </Menu>
        </MenuStyle>
      </div>
    </NavigationStyle>
  );
};
