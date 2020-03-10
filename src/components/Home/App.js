import React, { Component } from "react";
import Question from "../Question/Question";

import "./App.css";

// defining questions in global scope so that it doesn't get redefined every single time
// store by reference vs store by value
// reference can still be updated even if it's defined as const
const quizQuestions = [
  { q: "Question 1", choice_1: "1", choice_2: "2", choice_3: "3", a: "2" },
  { q: "Question 2", choice_1: "1", choice_2: "2", choice_3: "3", a: "1" },
  { q: "Question 3", choice_1: "1", choice_2: "2", choice_3: "3", a: "3" },
  { q: "Question 4", choice_1: "1", choice_2: "2", choice_3: "3", a: "3" }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // below userAnswers not needed if only score is provided at the end. Will think about adding this later.
      // userAnswers: [],
      correctAnswers: Array(quizQuestions.length).fill(false),
      questionIndex: 0
    };
  }

  // after the user submits
  handleQuestionUpdate = index => {
    console.log("handleQuestionUpdate");
    this.setState(
      {
        questionIndex: index
      },
      () => {
        console.log(this.state.questionIndex);
      }
    );
  };

  render() {
    // next button or timeout to show next question
    return (
      <div className="App">
        <div className="jumbotron">
          <Question
            questionToAnswer={quizQuestions[this.state.questionIndex]}
            questionIndex={this.state.questionIndex}
            onHandleQuestionUpdate={this.handleQuestionUpdate}
          />
        </div>
      </div>
    );
  }
}
