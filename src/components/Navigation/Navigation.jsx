import logo from "../../img/logo.png";
import twitter from "../../img/twitter.png";
import discord from "../../img/discord.png";
import { Link } from "react-router-dom";
import { NavigationStyle } from "./NavigationStyle";

export const Navigation = (props) => {
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
          <a href="/#about">ABOUT</a>
          <Link to={`/mint/`}>MINT</Link>
          <a href="/#statement">STATEMENT</a>
          <a href="/#roadmap">ROADMAP</a>
          <a href="/#partner">PARTNER</a>
          <button className="button-japanese" onClick={props.handleLanguage}>
            {props.language.navigation}
          </button>
        </div>
      </div>
    </NavigationStyle>
  );
};
