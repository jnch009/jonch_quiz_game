import React, { Component } from "react";
import className from "classnames";
import "./Question.css";

const answerBox = "answerBox";
const questionSubmit = "questionSubmit";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionToAnswer: this.props.questionToAnswer,
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
  };

  render() {
    const arrQuestions = [
      this.state.questionToAnswer.choice_1,
      this.state.questionToAnswer.choice_2,
      this.state.questionToAnswer.choice_3
    ];
    let answerRender;

    if (this.state.showAnswer === true) {
      this.state.questionToAnswer.a === this.state.selectedAnswer
        ? (answerRender = (
            <h6 className={className(answerBox, "bg-success")}>
              You are correct!
            </h6>
          ))
        : (answerRender = (
            <h6 className={className(answerBox, "bg-danger")}>
              Incorrect! This is your answer {this.state.questionToAnswer.a}
              <br />
              The correct answer is {this.state.selectedAnswer}
            </h6>
          ));
    } else {
      answerRender = null;
    }

    return (
      <div>
        <h1 className="display-4">{this.state.questionToAnswer.q}</h1>
        <div className="flexAnswers">
          {arrQuestions.map(v => (
            <div key={v}>
              {this.state.showAnswer ? (
                <input
                  id={v}
                  type="radio"
                  name="question"
                  disabled
                  onClick={() => this.handleRadioClick(v)}
                />
              ) : (
                <input
                  id={v}
                  type="radio"
                  name="question"
                  onClick={() => this.handleRadioClick(v)}
                />
              )}
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
            onClick
          >
            Next
          </button>
        ) : (
          <button
            className={className("btn", "btn-primary", questionSubmit)}
            type="submit"
            onClick={this.handleSubmitClick}
          >
            Submit
          </button>
        )}

        {answerRender}
      </div>
    );
  }
}
