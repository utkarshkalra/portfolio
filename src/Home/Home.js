import AboutMyself from "./AboutMyself/AboutMyself";
import ProjectArea from "./HomeProjectArea/ProjectArea";
import Experience from "./Experience/Experience";
function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="spacer">&nbsp;</div>
        <AboutMyself />
        <div className="down-btn">
          <button id="mybtn2">
            <a href="#experience">
              <i className="down"></i>
            </a>
          </button>
        </div>
        {/* <hr /> */}
        <Experience />
        <hr />
        <ProjectArea />
      </div>
    </>
  );
}

export default Home;
