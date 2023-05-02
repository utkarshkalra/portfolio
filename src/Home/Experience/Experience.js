import { randomNumber } from "../../Utility/keyGenerator";
import { experienceList } from "./Jobs";

const Experience = () => {
  return (
    <main className="experience-area" id="experience">
      <h1>Experience</h1>
      <div>
        {experienceList.map((exp, index) => {
          return (
            exp.active === 1 && (
              <div className="experience" key={index}>
                <div className="ladder"></div>
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
                </div>
              </div>
            )
          );
        })}
      </div>
    </main>
  );
};

export default Experience;
