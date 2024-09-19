import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";
import "/src/styles/Header.css";

interface HeaderProps {
  onHomeRedirect: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeRedirect }) => {
  return (
    <nav className="head">
      <div className="name">
        <h2>Stephy</h2>
      </div>
      <div className="top-nav">
        <div className="social-icons1">
          <a
            href="https://www.linkedin.com/in/stephy-kamau-wanjiru/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:stephshiro35@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons"
          >
            <MdEmail  />
          </a>
          <a
            href="https://github.com/KWSTEPHY"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons"
          >
            <FaGithub />
          </a>
          <a
            href="/"
            onClick={onHomeRedirect}
            rel="noopener noreferrer"
            className="social-icons"
          >
            <TiArrowForwardOutline  />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
