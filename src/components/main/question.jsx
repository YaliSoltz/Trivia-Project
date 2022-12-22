import { useState } from "react";
import React from "react";
import backgroundImg from "../images/quiz.png";
import { Link, useNavigate } from "react-router-dom";
import '../trivYali.css'

const Questions = (props) => {
  const {
    randomQuestions,
    handleScore,
    currentQuestion,
    handleCurrentQuestion,
    handleShowNavBar,
    counter,
    increaseCounter,
  } = props;
//------------------------------------
  const [showScore, setShowScore] = useState(false); // מציג את הכפתור של סוף המשחק
//------------------------------------
const navigate = useNavigate() // מעביר לעמוד סיום
//------------------------------------
  const [help, SetHelp] = useState(false); // מציג 4 תשובות או 2
//------------------------------------
  const [helpDisabled, setHelpDisabled] = useState(false); // כפתור עזרה דלוק או כבוי
//------------------------------------
  const arr = randomQuestions[currentQuestion].answerOptions.sort( // מערך של 4 תשובות מבולגנות
    () => Math.random() - 0.5);
//------------------------------------
  const helpArr = [...arr] .sort((a, b) =>{ // מערך של 2 תשובות מבולגנות
    if (a.isCorrect === b.isCorrect)
      return 0;
      return a.isCorrect ? -1 : 1;
    }).slice(0, 2).sort(() => Math.random() - 0.5);
//------------------------------------
  const handleAnswerButtonClick = (isCorrect) => { // פונקציה המעבירה לשאלה הבאה או מציגה כפתור סיום|סופרת ניקוד|מחזירה ל4 תשובות|
    if (isCorrect) handleScore();
    else {increaseCounter()}
    if (currentQuestion + 1 < randomQuestions.length) handleCurrentQuestion();
    else setShowScore(true);
    if(counter==2 & isCorrect==false) navigate('/result')
    SetHelp(false);
  };
//------------------------------------
  const helpButton = () => { // מציג 2 תשובה ומכבה את כפתור העזרה
    SetHelp(true);
    setHelpDisabled(true);
  };
//------------------------------------
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
        <span>
          <button
            disabled={helpDisabled}
            onClick={() => helpButton()}
            className="btn btn-primary"
          >
            HELP?
          </button>
        </span>
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
            {help
              ? helpArr.map((answerOptions, index) => (
                  <button
                    style={{ width: 250, height: 50 }}
                    disabled={showScore ? "disabled" : ""}
                    key={index}
                    
                    className="glow-on-hover m-2"
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                  >
                    {answerOptions.answerText}
                  </button>
                ))
              : arr.map((answerOptions) => (
                  <button
                    style={{ width: 250, height: 50 }}
                    disabled={showScore ? "disabled" : ""}
                    key={answerOptions.answerText}
                    className="glow-on-hover m-2"
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                  >
                    {answerOptions.answerText}
                  </button>
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
                 Congratulations, you are the winner of TrivYali! Your knowledge and skills have truly shone through.
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
