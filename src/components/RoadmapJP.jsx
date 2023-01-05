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
    }
    .roadmap-item {
      margin: 50px;
      justify-content: center;
    }
    .roadmap-text {
      flex: 1;
    }
  }
  @media screen and (max-width: 480px) {
    .roadmap-item {
      display: block;
      margin: 50px;
    }
  }
`;

export const RoadmapJP = () => {
  const roadmapContent = [
    {
      id: 0,
      header: "本IPに対する無制限の商業利用を許可",
      text: "あなたの所有するNFTにはIP利用の権利を所有しており、二次創作等もしていただいて問題ありません。",
      image: IP,
    },
    {
      id: 1,
      header: "アクセス制限",
      text: "あなたのNFTはタベノミクスでの体験へのアクセスを許可しています。NEO HOOD ANIMALのNFTを持っていない方はアクセスを制限しております。",
      image: access,
    },
    {
      id: 2,
      header: "著名人が集まるオフ会",
      text: "あなたは日本のVIP（芸能人/インフルエンサー/著名経営者）が集まる会に参加する権利を持っています。",
      image: VIP,
    },
    {
      id: 3,
      header: "日本の有名飲食店のWeb3化支援",
      text: "我々は既存の飲食業界をWeb3領域まで引き上げることをミッションにしており、複数枚のNEO HOOD ANIMALのNFTを破棄することで、本チームのWeb3化支援を受けることができるだけでなく、タレントの彦摩呂を呼ぶことができます。",
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
