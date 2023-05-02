import Home from "./Home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";

function App() {
  const [showUpButton, setShowUpButton] = useState(false);
  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    // console.log("Scrolling");

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  }
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <button
        id="myBtn"
        style={{ display: `${showUpButton ? "block" : "none"}` }}
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <i className="arrow up"></i>
      </button>
      {/* <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />
        </Switch>
        <Footer />
        <button
          id="myBtn"
          style={{ display: `${showUpButton ? "block" : "none"}` }}
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <i className="arrow up"></i>
        </button>
      </Router> */}
    </>
  );
}

export default App;
