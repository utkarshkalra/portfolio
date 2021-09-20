const Footer = () => {
  return (
    <footer id="contact">
      <hr></hr>
      <div className="contactmail">
        <h1>
          I'd love to build something <br />
          great with you,&nbsp;
          <a
            rel="noopener noreferrer"
            href="mailto:utkarshkalra.2001@gmail.com"
          >
            say hi
          </a>
        </h1>
      </div>
      <div className="footeritems">
        <div className="footeritem">
          <h2>Copyright</h2>
          <ul>
            <li>© 2021 Utkarsh Kalra</li>
          </ul>
        </div>
        <div className="footeritem">
          <h2>Contact</h2>
          <ul>
            <li>utkarshkalra.2001@gmail.com</li>
          </ul>
        </div>
        <div className="footeritem">
          <h2>Become Friends</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/utkarshkalra/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/utkarsh_kalra_" target="_blank">
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
