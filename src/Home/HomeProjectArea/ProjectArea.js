import projects from "./projects";
import { BiLinkExternal } from "react-icons/bi";
import { randomNumber } from "../../Utility/keyGenerator";
const ProjectArea = () => {
  return (
    <main className="projectarea">
      <h1>Projects</h1>

      <div className="projectwrap" id="test">
        {projects.map((project) => {
          const { id, name, link, image, techStack, desc } = project;
          return (
            <div className="project" key={randomNumber(id)}>
              <div className="image">
                <img
                  src={`https://raw.githubusercontent.com/utkarshkalra/image/main/portfolio/${image}.png`}
                  alt={name}
                ></img>
              </div>
              <div className="details">
                <a rel="noopener noreferrer" href={link} target="_blank">
                  <h2 id="showh2">
                    {name}
                    <BiLinkExternal id="show" />
                  </h2>
                </a>
                <p>{desc}</p>
              </div>
              <br></br>
              <div className="tech">
                <h3>Tech Stack:</h3>
                {techStack.map((name, index) => {
                  return <span key={randomNumber(index)}>{name}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectArea;
