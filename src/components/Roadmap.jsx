import styled from "styled-components";

const RoadmapStyle = styled.div`
  .roadmap-content {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
  }
`;

export const Roadmap = () => {
  const roadmapContent = [
    {
      id: 0,
      header:
        "本IPに対する無制限の商業利用を許可します（Permission for unrestricted commercial use of this IP）",
      text: "あなたの所有するNFTにはIP利用の権利を所有しております。",
    },
    {
      id: 1,
      header: "アクセス制限（exclusive access）",
      text: "あなたのNFTは食べのミクスでの体験へのアクセスを許可しています",
    },
    {
      id: 2,
      header: "著名人が集まるオフ会（Off-line meetings with celebrities）",
      text: "あなたは日本のVIPが集まる会に参加する権利を持っています（You have the right to attend a gathering of Japanese VIPs）",
    },
    {
      id: 3,
      header:
        "日本の有名飲食店のWeb3化支援（Web3 support for famous Japanese restaurants）",
      text: "我々は既存の飲食業界をWeb3領域まで引き上げることをミッションにしています",
    },
  ];

  return (
    <RoadmapStyle>
      <div>
        <h2>ROADMAP</h2>
        <div className="roadmap-content">
          {roadmapContent.map((element) => {
            return (
              <div className="roadmap-item" key={element.id}>
                <h3 className="roadmap-header">{element.header}</h3>
                <p className="roadmap-text">{element.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </RoadmapStyle>
  );
};
