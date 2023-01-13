import styled from "styled-components";

export const NavigationStyle = styled.div`
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
