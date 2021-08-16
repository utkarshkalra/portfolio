import { Link } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [linkNumber, setLinkNumber] = useState(1);
  useEffect(() => {
    if (window.location.pathname === "/about") setLinkNumber(2);
  }, []);
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>Utkarsh</h1>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className={linkNumber === 1 ? "active" : "notactive"}
            onClick={() => setLinkNumber(1)}
          >
            <i className={linkNumber === 1 ? "activei" : "notactivei"}>
              <AiFillHome />{" "}
            </i>
            HOME
          </Link>
        </li>

        <li>
          <a
            href="/about#about"
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
          <a href="https://medium.com/@utkarshkalra" target="_blank">
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
