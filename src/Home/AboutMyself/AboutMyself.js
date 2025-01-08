const AboutMyself = () => {
  return (
    <div className="aboutmyself">
      <div className="left">
        <h1 className="intro">
          Hello, I'm <br className="phone" />
          <span className="name">Utkarsh</span>,<br />
          <p className="intro-text">
            Full-Stack Developer skilled in React, Next.js, .NET, and SQL,
            crafting seamless experiences. Fitness enthusiast, traveler, dancer,
            doodler, and food lover!
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
