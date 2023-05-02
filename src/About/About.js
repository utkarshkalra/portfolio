import { randomNumber } from "../Utility/keyGenerator";

const skills = [
  {
    Name: "Frontend Development",
    skillSet: ["React", "Typescript", "Bootstrap", "Figma", "Html & CSS"],
  },
  {
    Name: "Backend Development",
    skillSet: [".Net", "NodeJs", "ExpressJs", "MongoDB", "MySQL", "SQLServer"],
  },
  { Name: "Other Skills", skillSet: ["Git & Github", "Illustrator"] },
];
const About = () => {
  return (
    <div id="about">
      <div className="spacer">
        <hr />
      </div>
      {/* <h1>About me</h1> */}
      <div className="about">
        <h1>
          Hey! myself, Utkarsh, a <br></br>Full-stack Developer with a passion
          for thoughtful UI. When I'm not writing code, you'll find me eating,
          scrolling or working out.
        </h1>

        <div className="skillset">
          <h2>skills</h2>
          {skills?.map((skill, index) => {
            return (
              <div>
                {skill.Name}
                <ul key={randomNumber(index)}>
                  {skill.skillSet?.map((skillName, i) => (
                    <li key={randomNumber(i)}>
                      <span>{skillName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="currentinterest">
        <ul className="otherskills">
          <li>
            <h2>Current Interests</h2>
          </li>
          <li>UX</li>
          <li>React</li>
          <li>Blogging</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
