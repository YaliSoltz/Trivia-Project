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
    increaseCounter,
    counter,
  } = props;

  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      handleScore();
    } else increaseCounter();

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < randomQuestions.length) handleCurrentQuestion();
    else setShowScore(true);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${backgroundImg})`, height: "86.2vh",display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div>
          <h1><span className="badge text-bg-info">{randomQuestions[currentQuestion].questionText}</span></h1>
        </div>
        <div style={{ marginLeft: 300, marginRight: 300 }}>
          <div
            className="m-5"
            style={{
              display: "flex",
              flexDirection: "column",
              borderStyle: 'dashed',
              borderRadius: 10,
              justifyContent: 'center'
            }}
          >
            {randomQuestions[currentQuestion].answerOptions
              .sort(() => Math.random() - 0.5)
              .map((answerOptions) => (
                // <Link to={answerOptions.isCorrect ? '':'/result'}>
                <button
                  disabled={showScore ? "disabled" : ""}
                  key={answerOptions.answerText}
                  className="btn btn-secondary m-1"
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
                  End of game
                </span>
              </h3>
              <Link to="/result">
                <button
                  className="btn btn-primary"
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
