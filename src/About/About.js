const About = () => {
  return (
    <div id="about">
      <div className="spacer">
        <hr></hr>
      </div>
      <div className="about">
        <h1>
          Hey! myself, Utkarsh, a <br></br>Full-stack Developer with a passion
          for thoughtful UI. When I'm not writing code, you'll find me eating,
          scrolling or working out.
        </h1>

        <div className="skillset">
          <h2>skills</h2>
          <ul>
            Frontend Development
            <li>React</li>
            <li>Bootstrap</li>
            <li>Figma</li>
            <li>Html & CSS</li>
          </ul>
          <ul>
            Backend Development
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            Other Skills
            <li>Git & Github</li>
            <li>Heroku</li>
            <li>Illustrator</li>
          </ul>
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
