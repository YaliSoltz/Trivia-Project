import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo-no-background.png";
import "../trivYali.css";

const NavBar = (props) => {
  const {
    highScore,
    currentQuestion,
    randomQuestions,
    showNavBar,
    handleShowNavBar,
  } = props;
  return (
    <React.Fragment>
      <nav
        id="nav_bar"
        className="navbar"
        style={{ borderRadius: "20px 20px 0px 0px" }}
      >
        <div className="container-fluid">
          <div id="name">
            <img
              src={logoImg}
              alt="Logo"
              width="100"
              height="80"
              className="d-inline-block align-text-top"
            />
          </div>
          <div id="score_and_question">
            {showNavBar ? (
              <div>
                <h3>High score is: {highScore}</h3>

                <p>
                  Question {currentQuestion + 1} of {randomQuestions.length}
                </p>
              </div>
            ) : (
              <Link to="/" id="home">
                <h2
                  style={{ marginRight: "6vw" }}
                  onClick={() => handleShowNavBar(false)}
                >
                  Home
                </h2>
              </Link>
            )}
          </div>
          <div id="give_up">
            {showNavBar ? (
              <div>
                {" "}
                <Link to="/result">
                  <span
                    className="badge text-bg-danger"
                    onClick={() => handleShowNavBar()}
                  >
                    give up
                  </span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
