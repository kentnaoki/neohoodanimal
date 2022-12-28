import styled from "styled-components";
import cat from "../img/test_image.jfif";

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
    margin: 0 10px;
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
    text-align: justify;
  }
`;

export const Roadmap = () => {
  const roadmapContent = [
    {
      id: 0,
      header:
        "本IPに対する無制限の商業利用を許可します（Permission for unrestricted commercial use of this IP）",
      text: "あなたの所有するNFTにはIP利用の権利を所有しております。",
      image: cat,
    },
    {
      id: 1,
      header: "アクセス制限（exclusive access）",
      text: "あなたのNFTは食べのミクスでの体験へのアクセスを許可しています。",
      image: cat,
    },
    {
      id: 2,
      header: "著名人が集まるオフ会（Off-line meetings with celebrities）",
      text: "あなたは日本のVIPが集まる会に参加する権利を持っています。（You have the right to attend a gathering of Japanese VIPs）",
      image: cat,
    },
    {
      id: 3,
      header:
        "日本の有名飲食店のWeb3化支援（Web3 support for famous Japanese restaurants）",
      text: "我々は既存の飲食業界をWeb3領域まで引き上げることをミッションにしています。",
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
