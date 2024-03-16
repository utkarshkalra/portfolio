import { useState } from "react";
import { randomNumber } from "../../Utility/keyGenerator";
import { experienceList } from "./Jobs";

const Experience = () => {
  const [isViewMore, setIsViewMore] = useState(false);
  return (
    <main className="experience-area" id="experience">
      <h1>Experience</h1>
      <div>
        {experienceList.map((exp, index) => {
          return (
            (exp.active === 1 || isViewMore) && (
              <div className="experience" key={index}>
                <div
                  className={`ladder ${exp.isCurrent ? "active" : ""}`}
                ></div>
                <div className="details">
                  <div className="top">
                    <div>
                      <div className="company-name">
                        <p>{exp.name + ","}&nbsp;</p>
                        <p className="location">{exp.location}</p>

                        {/* <BiLinkExternal id="show" /> */}
                      </div>

                      <p className="position">{exp.position}</p>
                    </div>
                    <p className="duration">{exp.duration}</p>
                  </div>

                  <ul className="description">
                    {exp.description.map((d, i) => {
                      return <li key={randomNumber(i)}>{d}</li>;
                    })}
                  </ul>
                  <div className="tech">
                    <h3>Tech Stack:</h3>
                    {exp?.Stack?.map((name, index) => {
                      return <span key={randomNumber(index)}>{name}</span>;
                    })}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <button className="viewmore" onClick={() => setIsViewMore(!isViewMore)}>
        {" "}
        {isViewMore ? "View less" : "View more"}{" "}
      </button>
    </main>
  );
};

export default Experience;
