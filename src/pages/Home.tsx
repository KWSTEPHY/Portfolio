import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import "/src/styles/Home.css";
import { useNavigate } from "react-router-dom";
import Me2 from "../assets/home3.jpeg"

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = ["Frontend Web-Developer.", "UI/UX Designer."];

  const handleHomeRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    document.querySelector(".home-container")?.classList.add("aos-animate");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="home-container" data-aos="zoom-out">
      <div className="right-section1">
        <Header onHomeRedirect={handleHomeRedirect} />
        <div className="scrollable-container">
          <div className="home_block" data-aos="fade-up" data-aos-delay="300">
            <LineHead title="Home" />
            <div className="title_block">
              <h1 className="title">
                Hello 😃 I'm Stephy.
                <br />
                I am a <br /> <TypedJS strings={categories} />
              </h1>
            </div>
            <div className="house">
              <div className="info-box-container">
                <div className="info-box">
                  <span className="info-number">7+</span>
                  <span className="info-text">Months of experience</span>
                </div>
                <div className="info-box">
                  <span className="info-number">1.5k+</span>
                  <span className="info-text">Hours of Waka Time</span>
                </div>
              </div>
              <div className="download-cv">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-section">
        <div className="close">
          <img src={Me2} alt="Me2" />
        </div>
      </div>
    </div>
  );
};

export default Home;