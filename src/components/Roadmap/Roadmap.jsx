import { RoadmapStyle } from "./RoadmapStyle";

export const Roadmap = (props) => {
  return (
    <RoadmapStyle>
      <div id="roadmap">
        <h2 className="header2">ROADMAP</h2>
        <div className="roadmap-content">
          {props.language.roadmap.map((element) => {
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
