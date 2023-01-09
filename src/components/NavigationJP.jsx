import styled from "styled-components";
import logo from "../img/logo.png";
import twitter from "../img/twitter.png";
import discord from "../img/discord.png";
import { Link } from "react-router-dom";

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
    .nav-section a {
      display: block;
      margin-bottom: 10px;
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
  .button-japanese {
    height: 50px;
    border-radius: 10px;
  }
  .button-japanese a {
    color: black;
    font-size: 20px;
  }
  .button-japanese:hover {
    background-color: #c2c2c2;
    border: grey 2px solid;
  }
  .button-japanese a:hover {
    color: black;
  }
`;

export const NavigationJP = () => {
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
          <a href="/ppp/jp/#about">ABOUT</a>
          <Link to={`/ppp/jp/mint/`}>MINT</Link>
          <a href="/ppp/jp/#statement">STATEMENT</a>
          <a href="/ppp/jp/#roadmap">ROADMAP</a>
          <a href="/ppp/jp/#partner">PARTNER</a>
          <button className="button-japanese">
            <Link to={`/ppp/`}>English</Link>
          </button>
        </div>
      </div>
    </NavigationStyle>
  );
};
