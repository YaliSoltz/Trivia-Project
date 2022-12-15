import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  const { score, randomQuestions, newGame } = props;
  return (
    <React.Fragment>
      <div className="justify-content-center mt-4" style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "whitesmoke",
            opacity: 0.8,
            width: 500,
            overflowY: "auto",
            height: "80vh",
          }}
        >
          <h1>
            {" "}
            <span
              className={
                score < 10 ? "badge  bg-warning" : "badge lg bg-primary"
              }
            >
              {score < 10 ? "Better luck next time" : "King!!!"}
            </span>
          </h1>
          <h2>
            Your result is: {score} of {randomQuestions.length}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {randomQuestions.map((question, index) => (
              <div key={index}>
                <p style={{ marginTop: 80, fontSize: 18, fontWeight: "bold" }}>
                  {" "}
                  <span style={{ fontSize: 24, fontWeight: "bold" }}>
                    Q{index + 1}
                  </span>
                  : {question.questionText}
                </p>

                {question.answerOptions.map((answerOptions) => (
                  <button
                    key={answerOptions.answerText}
                    style={{
                      borderRadius: 20,
                      margin: 2,
                      backgroundColor: answerOptions.isCorrect
                        ? "green"
                        : "red",
                    }}
                  >
                    {answerOptions.answerText}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <Link to="/game">
            {" "}
            <button onClick={() => newGame()} className="btn btn-primary m-4">
              new game
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Result;
