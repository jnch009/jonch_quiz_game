import React, { Component } from "react";

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

    return (
      <div>
        <h1 className="display-4">{this.state.questionToAnswer.q}</h1>
        {arrQuestions.map(v => (
          <div key={v}>
            <input
              id={v}
              type="radio"
              name="question"
              onClick={() => this.handleRadioClick(v)}
            />
            <label htmlFor={v} className="lead">
              {v}
            </label>
          </div>
        ))}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={this.handleSubmitClick}
        >
          Submit
        </button>
        {this.state.showAnswer ? (
          <div>{this.state.questionToAnswer.a}</div>
        ) : null}
      </div>
    );
  }
}
