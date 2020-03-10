import React, { Component } from "react";
import className from "classnames";
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

  handleRadioClick = v => {
    this.setState({
      selectedAnswer: v
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
    const arrQuestions = [
      this.props.questionToAnswer.choice_1,
      this.props.questionToAnswer.choice_2,
      this.props.questionToAnswer.choice_3
    ];
    let answerRender;

    if (this.state.showAnswer === true) {
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

    const btnDisplay = () => {
      if (this.state.selectedAnswer === "") {
        return (
          <button
            className={className("btn", "btn-primary", questionSubmit)}
            type="submit"
            onClick={this.handleSubmitClick}
            disabled
          >
            Submit
          </button>
        );
      } else {
        return (
          <button
            className={className("btn", "btn-primary", questionSubmit)}
            type="submit"
            onClick={this.handleSubmitClick}
          >
            Submit
          </button>
        );
      }
    };

    return (
      <div>
        <h1 className="display-4">{this.props.questionToAnswer.q}</h1>
        <div className="flexAnswers">
          {arrQuestions.map(v => (
            <div key={v}>
              <input
                id={v}
                type="radio"
                name="question"
                // true or false for checked and disabled properties
                checked={this.state.selectedAnswer === v}
                disabled={this.state.showAnswer}
                onChange={() => this.handleRadioClick(v)}
              />
              <label htmlFor={v} className="lead">
                {v}
              </label>
            </div>
          ))}
        </div>
        {this.state.showAnswer ? (
          <button
            className={className("btn", "btn-primary", questionSubmit)}
            type="submit"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        ) : (
          btnDisplay()
        )}
        {answerRender}
      </div>
    );
  }
}
