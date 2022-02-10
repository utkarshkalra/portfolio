import { BiLinkExternal } from "react-icons/bi";

const experienceList = [
  {
    name: "LetsEndorse",
    location: "Bengaluru",
    position: "Web Development Intern",
    duration: "June 2021 - August 2021",
    description: [
      "Implemented User Management and Order Management Page of Admin Panel",
      "Completely revamped the site for better user experience",
      "Implemented maps from scratch that shows the establishments in a city using appropriate colors and labels",
      "worked in an Agile Scrum Development Environment",
    ],
  },
  {
    name: "Viplus",
    location: "Manesar",
    position: "Freelance Web Developer",
    duration: "Oct 2021 - Dec 2021",
    description: [
      "Designed and Developed an eCommerce website as well as its admin panel by using React and Nodejs.",
      "Created database using MongoDB.",
      "Implemented maps from scratch that shows the establishments in a city using appropriate colors and labels",
      "I was responsible for creating all the models, routes, views and controllers needed for functionality.",
    ],
  },
];

const Experience = () => {
  return (
    <main className="experience-area" id="experience">
      <h1>Experience</h1>
      <div>
        {experienceList.map((exp, index) => {
          return (
            <div className="experience" key={index}>
              <div className="ladder"></div>
              <div className="details">
                <div className="top">
                  <div>
                    <div className="company-name">
                      <p>{exp.name + ","}&nbsp;</p>
                      <p className="location">{exp.location}</p>

                      <BiLinkExternal id="show" />
                    </div>

                    <p className="position">{exp.position}</p>
                  </div>
                  <p className="duration">{exp.duration}</p>
                </div>

                <ul className="description">
                  {exp.description.map((d) => {
                    return <li>{d}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Experience;
