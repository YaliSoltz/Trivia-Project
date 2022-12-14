import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  const { score, randomQuestions, newGame } = props;
  return (
    <React.Fragment>
      <div>
      <h1>  <span className={score<10 ? "badge  bg-warning": "badge lg bg-info"}>{score<10 ? 'Better luck next time':'King!!!'}</span></h1>
        <h2>
          your result is: {score} of {randomQuestions.length}
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {randomQuestions.map((question, index) => (
            <div key={index}>
            <p  style={{marginTop: 80}}> <span style={{fontSize:20, fontWeight: 'bold'}}>Q{index+1}</span> : {question.questionText}</p>

            {question.answerOptions.map((answerOptions) => (
              <button
                key={answerOptions.answerText}
                style={{borderRadius: 20, margin: 2, backgroundColor: answerOptions.isCorrect ?  'green':'red'}}
              
              
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
    </React.Fragment>
  );
};

export default Result;
