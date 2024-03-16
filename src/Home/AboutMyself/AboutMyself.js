const AboutMyself = () => {
  return (
    <div className="aboutmyself">
      <div className="left">
        <h1 className="intro">
          Hello, I'm <br className="phone" />
          <span className="name">Utkarsh</span>,<br />
          <p className="intro-text">
            <br />
            Professionally, I am a Full-stack Developer with extensive
            experience in crafting complex UIs, architecting robust APIs, and
            elevating user experiences. Proficient in technologies such as
            React, Next.js, SQL Server, .NET Core, and .NET Framework.
            <br />
            <br />
            Outside of work, I have a passion for fitness, traveling, dancing,
            doodling, and indulging in delicious cuisine.
          </p>
        </h1>
      </div>
      <div className="right">
        <img
          src="https://raw.githubusercontent.com/utkarshkalra/image/main/portfolio/type1.png"
          alt="profileimage"
        />
      </div>
    </div>
  );
};

export default AboutMyself;
