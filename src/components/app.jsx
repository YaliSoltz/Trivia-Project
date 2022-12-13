import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
import Sider from "./sider/help";
class App extends Component {
  state = {
    questions: [
      {
        questionText: "What is the capital of France?",
        answerOptions: [
          { answerText: "New York", isCorrect: false },
          { answerText: "London", isCorrect: false },
          { answerText: "Paris", isCorrect: true },
          { answerText: "Dublin", isCorrect: false },
        ],
      },
      {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false },
        ],
      },
      {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
          { answerText: "Apple", isCorrect: true },
          { answerText: "Intel", isCorrect: false },
          { answerText: "Amazon", isCorrect: false },
          { answerText: "Microsoft", isCorrect: false },
        ],
      },
      {
        questionText: "How many Harry Potter books are there?",
        answerOptions: [
          { answerText: "1", isCorrect: false },
          { answerText: "4", isCorrect: false },
          { answerText: "6", isCorrect: false },
          { answerText: "7", isCorrect: true },
        ],
      },
    ],
    score: 0,
    currentQuestion: 0,
    showNavBar: false,
    nextQuestionButton: true,
  };
  render() {
    return (
      <React.Fragment>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <Header
                score={this.state.score}
                currentQuestion={this.state.currentQuestion}
                questions={this.state.questions}
                showNavBar={this.state.showNavBar}
                handleShowNavBar={(val) => this.handleShowNavBar(val)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <Sider />
            </div>
            <div className="col">
              <Main
                questions={this.state.questions}
                handleScore={() => this.handleScore()}
                currentQuestion={this.state.currentQuestion}
                handleCurrentQuestion={() => this.handleCurrentQuestion()}
                resetGame={() => this.resetGame()}
                score={this.state.score}
                handleShowNavBar={(val) => this.handleShowNavBar(val)}
                nextQuestionButton={this.state.nextQuestionButton}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  handleScore = () => {
    this.setState({ score: this.state.score + 1 });
  };
  handleCurrentQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  };
  resetGame = () => {
    this.setState({ score: 0 });
    this.setState({ currentQuestion: 0 });
    this.setState({ showNavBar: true });
  };
  handleShowNavBar = (val) => {
    this.setState({ showNavBar: val });
    this.setState({ score: 0 });
    this.setState({ currentQuestion: 0 });
  };
}

export default App;
