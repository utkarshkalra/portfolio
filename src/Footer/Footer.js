const Footer = () => {
  return (
    <footer id="contact">
      <hr></hr>
      <div className="contactmail">
        <h1>
          I'd love to build something <br />
          great with you,&nbsp;
          <a rel="noopener noreferrer" href="mailto:utkarsh9kalra@gmail.com">
            say hi
          </a>
        </h1>
      </div>
      <div className="footeritems">
        <div className="footeritem">
          <h2>Copyright</h2>
          <ul>
            <li>© 2025 Utkarsh Kalra</li>
          </ul>
        </div>
        <div className="footeritem">
          <h2>Contact</h2>
          <ul>
            <li>
              {" "}
              <a
                href="mailto:utkarsh9kalra@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                utkarsh9kalra@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footeritem">
          <h2>Become Friends</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/utkarshkalra/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/utkarshxkalra"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://github.com/utkarshkalra"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
