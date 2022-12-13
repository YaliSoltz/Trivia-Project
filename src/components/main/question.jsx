import { useState } from "react";
import React from "react";
import backgroundImg from "../images/quiz.png";
import { Link } from "react-router-dom";

const Questions = (props) => {
  const { questions, handleScore, currentQuestion,handleCurrentQuestion, handleShowNavBar} = props;
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      alert("correct answer");
      handleScore();} 
    else alert("false answer");

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) 
    handleCurrentQuestion()
    else setShowScore(true);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${backgroundImg})`, height: "80vh" }}>
        <div>
          <h2>{questions[currentQuestion].questionText}</h2>
        </div>
        <div style={{ marginLeft: 300, marginRight: 300 }}>
          <div
            className="m-5"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "aqua",
              borderRadius: 10,
            }}
          >
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              // <Link to={answerOptions.isCorrect ? '':'/result'}>
              <button 
              // disabled={nextQuestionButton ? '':'disbled'}
                key={answerOptions.answerText}
                className="btn btn-secondary m-1"
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
              // </Link>
            ))}
          </div>
        </div>
        <div>
          {/* <button onClick={()=>handleNextQuestionButton()} className="btn btn-dark" disabled={nextQuestionButton ? 'disbled':''}  >Next question</button> */}
          {showScore ? (
            <div>
            <h3>
              <span style={{ backgroundColor: "red", width: 200, height: 200 }}>
                End of game
              </span>
            </h3>
            <Link to='/result'><button className="btn btn-primary" onClick={() => handleShowNavBar(false)}>see result</button></Link>
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
