import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import Fade from  '@stahl.luke/react-reveal';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <Fade>
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto font-weight-normal">
              <li className={`nav-item ${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/browsseby")}`}>
                <Button className="nav-link" type="link" href="/browsseby">
                  Browse by
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/agent")}`}>
                <Button className="nav-link" type="link" href="/agent">
                  Agent
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </Fade>
  );
}
