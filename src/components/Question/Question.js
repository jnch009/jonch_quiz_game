import className from "classnames";
import React, { Component } from "react";

import "./Question.css";

const answerBox = "answerBox";
const questionSubmit = "questionSubmit";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: "",
      showAnswer: false
    };
  }

  handleRadioClick = radio => {
    this.setState({
      selectedAnswer: radio
    });
  };

  handleSubmitClick = () => {
    this.setState({ showAnswer: true });
    this.props.onHandleQuestionSubmit(
      this.state.selectedAnswer === this.props.questionToAnswer.a
    );
  };

  handleNextClick = () => {
    this.setState({
      selectedAnswer: "",
      showAnswer: false
    });
    this.props.onHandleQuestionUpdate(this.props.questionIndex + 1);
  };

  render() {
    let answerRender;

    if (this.state.showAnswer) {
      this.props.questionToAnswer.a === this.state.selectedAnswer
        ? (answerRender = (
            <h6 className={className(answerBox, "bg-success")}>
              You are correct!
            </h6>
          ))
        : (answerRender = (
            <h6 className={className(answerBox, "bg-danger")}>
              Incorrect! This is your answer {this.state.selectedAnswer}
              <br />
              The correct answer is {this.props.questionToAnswer.a}
            </h6>
          ));
    } else {
      answerRender = null;
    }

    const btnDisplay = (
      <button
        className={className("btn", "btn-primary", questionSubmit)}
        type="submit"
        onClick={this.handleSubmitClick}
        disabled={!this.state.selectedAnswer}
      >
        Submit
      </button>
    );

    return (
      <div className="questionWrapper">
        <h4>{this.props.questionToAnswer.q}</h4>
        <div className="flexAnswers">
          {this.props.questionToAnswer.choices.map(choice => (
            <div key={choice}>
              <input
                id={choice}
                type="radio"
                name="question"
                checked={this.state.selectedAnswer === choice}
                disabled={this.state.showAnswer}
                onChange={() => this.handleRadioClick(choice)}
              />
              <label htmlFor={choice}>{choice}</label>
            </div>
          ))}
        </div>
        {answerRender}
        {this.state.showAnswer ? (
          <button
            className={className("btn", "btn-primary", questionSubmit)}
            type="submit"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        ) : (
          btnDisplay
        )}
      </div>
    );
  }
}
