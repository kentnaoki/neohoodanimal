import styled from "styled-components";
import IP from "../img/IP_live.jpg";
import VIP from "../img/VIP_live.jpg";
import access from "../img/access_live.jpg";
import handshake from "../img/handshake_live.jpg";

const RoadmapStyle = styled.div`
  padding-top: 85px;
  padding-bottom: 85px;

  .header2 {
    margin-bottom: 25px;
  }
  .roadmap-content {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    max-width: 940px;
    margin: 0 auto;
  }
  .roadmap-item {
    display: flex;
    margin: 20px 10px;
  }
  .roadmap-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .roadmap-image img {
    max-width: 130px;
    height: auto;
  }
  .roadmap-text {
    margin: 0 10px;
  }
  .roadmap-paragraph {
    text-align: center;
  }
  @media screen and (max-width: 959px) {
    .roadmap-content {
      display: block;
      margin: auto 100px;
    }
    .roadmap-item {
      margin: 50px;
      justify-content: center;
    }
    .roadmap-text {
      flex: 1;
    }
  }
  @media screen and (max-width: 869px) {
    .roadmap-content {
      margin: auto 70px;
    }
  }
  @media screen and (max-width: 799px) {
    .roadmap-content {
      margin: auto 30px;
    }
  }
  @media screen and (max-width: 699px) {
    .roadmap-content {
      margin: auto;
    }
  }
  @media screen and (max-width: 649px) {
    .roadmap-item {
      display: block;
      margin: 50px;
    }
  }
`;

export const Roadmap = () => {
  const roadmapContent = [
    {
      id: 0,
      header: "Permission for unrestricted commercial use of this IP",
      text: "Your NFT has a permission to use the IP.",
      image: IP,
    },
    {
      id: 1,
      header: "Exclusive access",
      text: "Your NFT has access to Tabenomics.",
      image: access,
    },
    {
      id: 2,
      header: "Off-line meetings with celebrities",
      text: "You have the right to attend a gathering of Japanese VIPs",
      image: VIP,
    },
    {
      id: 3,
      header: "Web3 support for every Japanese restaurant",
      text: "Our mission is to bring up the food industry to Web3.",
      image: handshake,
    },
  ];

  return (
    <RoadmapStyle>
      <div id="roadmap">
        <h2 className="header2">ROADMAP</h2>
        <div className="roadmap-content">
          {roadmapContent.map((element) => {
            return (
              <div className="roadmap-item" key={element.id}>
                <div className="roadmap-image">
                  <img src={element.image} alt={element.header} />
                </div>
                <div className="roadmap-text">
                  <h4 className="roadmap-header">{element.header}</h4>
                  <p className="roadmap-paragraph">{element.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RoadmapStyle>
  );
};
