import React, { Component } from "react";
import className from "classnames";
import Question from "../Question/Question";

import "./App.css";

// defining questions in global scope so that it doesn't get redefined every single time
// store by reference vs store by value
// reference can still be updated even if it's defined as const
const quizQuestions = [
  {
    q: "How many sides does an octagon have?",
    choice_1: "6",
    choice_2: "8",
    choice_3: "5",
    a: "6"
  },
  {
    q: "What is a synonym for careless?",
    choice_1: "Negligent",
    choice_2: "Dishonest",
    choice_3: "Unworthy",
    a: "Negligent"
  },
  {
    q: "What is the derivative of 3x^2?",
    choice_1: "6x^2",
    choice_2: "x^3",
    choice_3: "6x",
    a: "6x"
  },
  {
    q: "What famous phenomenon is Sir Isaac Newton known for?",
    choice_1: "Inventor of Electricity",
    choice_2: "The equation for the speed of light",
    choice_3: "Three laws of motion",
    a: "Three laws of motion"
  }
];

const scoreMessage = score => {
  if (score >= 75) {
    return "Great Work!";
  } else if (score < 75 && score >= 50) {
    return "Not good enough!";
  } else {
    return "You need to work harder!";
  }
};
const questionSubmit = "questionSubmit";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // below userAnswers not needed if individual question scores is provided at the end. Will think about adding this later.
      // userAnswers: [],
      correctAnswers: 0,
      questionIndex: 0,
      quizCompleted: false
    };
  }

  //after the user submits
  handleQuestionSubmit = correct => {
    if (correct) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1
      });
    }
  };

  // after the user hits 'Next' button
  handleQuestionUpdate = index => {
    if (index >= quizQuestions.length) {
      this.setState({
        quizCompleted: true,
        questionIndex: index
      });
    } else {
      this.setState({
        questionIndex: index
      });
    }
  };

  handleQuizReset = () => {
    this.setState({
      correctAnswers: 0,
      questionIndex: 0,
      quizCompleted: false
    });
  };

  render() {
    // next button or timeout to show next question
    let currentScore = (this.state.correctAnswers / quizQuestions.length) * 100;
    return (
      <div className="App">
        <div className="jumbotron">
          {this.state.quizCompleted ? (
            <>
              <div>Congratulations on finishing the quiz!</div>
              <div>Here is how you did</div>
              <h1 className="display-1">{currentScore}%</h1>
              <div className="display-4">{scoreMessage(currentScore)}</div>
              <button
                className={className("btn", "btn-primary", questionSubmit)}
                type="submit"
                onClick={this.handleQuizReset}
              >
                Restart Quiz
              </button>
            </>
          ) : (
            <Question
              questionToAnswer={quizQuestions[this.state.questionIndex]}
              questionIndex={this.state.questionIndex}
              onHandleQuestionUpdate={this.handleQuestionUpdate}
              onHandleQuestionSubmit={this.handleQuestionSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}
