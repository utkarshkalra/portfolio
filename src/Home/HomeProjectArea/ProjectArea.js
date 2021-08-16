import projects from "./projects";
const ProjectArea = () => {
  return (
    <main class="projectarea">
      <h1>Projects</h1>

      <div class="projectwrap" id="test">
        {projects.map((project) => {
          const { id, name, link, image, techStack, desc } = project;
          return (
            <div className="project">
              <div className="image">
                <img
                  src={image}
                  alt={name}
                  onclick={() => {
                    window.open("${link}", "_blank");
                  }}
                ></img>
              </div>
              <div className="details">
                <a rel="noopener noreferrer" href={link} target="_blank">
                  <h2>
                    {name}
                    <i id="show" className="fas fa-external-link-alt"></i>
                  </h2>
                </a>
                <p>{desc}</p>
              </div>
              <br></br>
              <div className="tech">
                <h3>Tech Stack:</h3>
                {techStack.map((name) => {
                  return <span>{name}</span>;
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
