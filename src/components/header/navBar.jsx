import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo-no-background.png";

const NavBar = (props) => {
  const { score, currentQuestion, questions, showNavBar, handleShowNavBar } =
    props;
  return (
    <React.Fragment>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <div id="name">
            <Link to="/">
              <img
                onClick={() => handleShowNavBar(false)}
                src={logoImg}
                alt="Logo"
                width="100"
                height="80"
                class="d-inline-block align-text-top"
              />
            </Link>
          </div>
          <div id="score_and_question">
            {showNavBar ? (
              <div>
                {/* <h3>Score is: {score}</h3> */}

                <p>
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            ) : (
            
              <h3>Start new game!!</h3>
              
            )}
          </div>
          <div id="give_up">
           {showNavBar ? <div> <Link to="/result">
              <button onClick={() => handleShowNavBar(false)}>give up</button>
            </Link></div>:'' }
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
