import styled from "styled-components";
import logo from "../img/logo.png";
import twitter from "../img/twitter.png";
import discord from "../img/discord.png";

const NavigationStyle = styled.div`
  height: 90px;
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
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

export const Navigation = () => {
  return (
    <NavigationStyle>
      <div className="nav">
        <div className="logo-section">
          <img className="logo-img" src={logo} alt="logo" />
          <div className="social-media">
            <div className="link-container">
              <a className="social-media-link" href="./">
                <img className="twitter-img" src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="link-container">
              <a className="social-media-link" href="./">
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
      </div>
    </NavigationStyle>
  );
};