import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import logo from "./utkarsh.svg";
const NavBar = () => {
  const [linkNumber, setLinkNumber] = useState(1);
  // useEffect(() => {
  //   if (window.location.pathname === "/about") setLinkNumber(2);
  //   else if (window.location.pathname === "/") setLinkNumber(1);
  // }, []);
  return (
    <nav className="nav-bar">
      <div className="logo">
        {/* <h1>Utkarsh</h1> */}
        <img src={logo} alt="utkarsh" />
      </div>
      <ul>
        <li>
          <a
            href="/#"
            onClick={() => setLinkNumber(1)}
            className={linkNumber === 1 ? "active" : "notactive"}
          >
            <i className={linkNumber === 1 ? "activei" : "notactivei"}>
              <AiFillHome />{" "}
            </i>
            HOME
          </a>
        </li>

        <li>
          <a
            href="/#about"
            onClick={() => setLinkNumber(2)}
            className={linkNumber === 2 ? "active" : "notactive"}
          >
            <i className={linkNumber === 2 ? "activei" : "notactivei"}>
              <AiFillInfoCircle />
            </i>
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={linkNumber === 3 ? "active" : "notactive"}
            onClick={() => setLinkNumber(3)}
          >
            <i className={linkNumber === 3 ? "activei" : "notactive"}>
              <RiContactsFill />
            </i>
            CONTACT
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://medium.com/@utkarshkalra"
            target="_blank"
          >
            <i>
              <FaPen />
            </i>
            BLOG
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
