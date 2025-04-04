const AboutMyself = () => {
  return (
    <div className="aboutmyself">
      <div className="left">
        <h1 className="intro">
          Hello, I'm <br className="phone" />
          <span className="name">Utkarsh</span>,<br />
          <p className="intro-text">
            Full-Stack Developer skilled in MERN stack, Next.js, .Net and SQL.
            Except for that I am a fitness enthusiast, traveller, dancer,
            doodler, and a big time foodie!
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
