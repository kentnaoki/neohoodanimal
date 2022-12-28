import styled from "styled-components";
import cat from "../img/cat.jpg";

const RoadmapStyle = styled.div`
  padding-top: 65px;
  padding-bottom: 65px;

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
    }
    .roadmap-item {
      margin: 50px;
    }
  }
  @media screen and (max-width: 480px) {
    .roadmap-item {
      display: block;
    }
  }
`;

export const Roadmap = () => {
  const roadmapContent = [
    {
      id: 0,
      header: "Permission for unrestricted commercial use of this IP",
      text: "Your NFT has a permission to use the IP.",
      image: cat,
    },
    {
      id: 1,
      header: "Exclusive access",
      text: "Your NFT has access to Tabenomics.",
      image: cat,
    },
    {
      id: 2,
      header: "Off-line meetings with celebrities",
      text: "You have the right to attend a gathering of Japanese VIPs",
      image: cat,
    },
    {
      id: 3,
      header: "Web3 support for famous Japanese restaurants",
      text: "Our mission is to bring up the food industry to Web3.",
      image: cat,
    },
  ];

  return (
    <RoadmapStyle>
      <div id="roadmap">
        <h2>ROADMAP</h2>
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
