import { useState } from "react";
import React from "react";
import backgroundImg from "../images/quiz.png";
import { Link } from "react-router-dom";

const Questions = (props) => {
  const {
    randomQuestions,
    handleScore,
    currentQuestion,
    handleCurrentQuestion,
    handleShowNavBar,
  } = props;
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < randomQuestions.length) handleCurrentQuestion();
    else setShowScore(true);
    if (isCorrect) handleScore();
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          height: "86.2vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>
            <span
              className="badge text-bg-info"
              style={{ boxShadow: "10px 10px 10px 1px" }}
            >
              {randomQuestions[currentQuestion].questionText}
            </span>
          </h1>
        </div>
        <div style={{ margin: "auto" }}>
          <div
            className="m-5"
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 15,
              justifyContent: "center",
              border: "solid aqua 10px",
            }}
          >
            {randomQuestions[currentQuestion].answerOptions
              .sort(() => Math.random() - 0.5)
              .map((answerOptions) => (
                // <Link to={answerOptions.isCorrect ? '':'/result'}>
                <button
                  style={{ width: 250, height: 50 }}
                  disabled={showScore ? "disabled" : ""}
                  key={answerOptions.answerText}
                  className="btn btn-secondary m-2"
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
                // </Link>
              ))}
          </div>
        </div>
        <div>
          {showScore ? (
            <div>
              <h3>
                <span
                  style={{ backgroundColor: "red", width: 200, height: 200 }}
                >
                  GAME OVER
                </span>
              </h3>
              <Link to="/result">
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleShowNavBar()}
                >
                  see result
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Questions;
