import AboutMyself from "./AboutMyself/AboutMyself";
import ProjectArea from "./HomeProjectArea/ProjectArea";
function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="spacer">&nbsp;</div>
        <AboutMyself />
        <hr />
        <ProjectArea />
      </div>
    </>
  );
}

export default Home;
