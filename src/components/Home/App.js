import className from 'classnames';
import React, { Component } from 'react';

import Question from '../Question/Question';

import './App.css';

// defining questions in global scope so that it doesn't get redefined every single time
// store by reference vs store by value
// reference can still be updated even if it's defined as const
// const quizQuestions = [];
const scoreMessage = score => {
  if (score >= 75) {
    return 'Great Work!';
  } else if (score < 75 && score >= 50) {
    return 'Not good enough!';
  } else {
    return 'You need to work harder!';
  }
};
const questionSubmit = 'questionSubmit';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // below userAnswers not needed if individual question scores is provided at the end. Will think about adding this later.
      // userAnswers: [],
      quizQuestions: [],
      correctAnswers: 0,
      questionIndex: 0,
      quizCompleted: false,
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_FETCH_API}`)
      .then(res => res.json())
      .then(data => {
        data.map(quizQuestion =>
          this.setState({
            quizQuestions: [
              ...this.state.quizQuestions,
              {
                q: quizQuestion['Question'],
                choices: [
                  quizQuestion['Choice 1'],
                  quizQuestion['Choice 2'],
                  quizQuestion['Choice 3'],
                ],
                a: quizQuestion['Answer'],
              },
            ],
          }),
        );
        this.setState({ loading: false });
      });
  }

  //after the user submits
  handleQuestionSubmit = correct => {
    if (correct) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
      });
    }
  };

  // after the user hits 'Next' button
  handleQuestionUpdate = index => {
    if (index >= this.state.quizQuestions.length) {
      this.setState({
        quizCompleted: true,
        questionIndex: index,
      });
    } else {
      this.setState({
        questionIndex: index,
      });
    }
  };

  handleQuizReset = () => {
    this.setState({
      correctAnswers: 0,
      questionIndex: 0,
      quizCompleted: false,
    });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    // next button or timeout to show next question
    let currentScore =
      (this.state.correctAnswers / this.state.quizQuestions.length) * 100;
    return (
      <div className='App'>
        <div className='jumbotron'>
          {this.state.quizCompleted ? (
            <>
              <div>Congratulations on finishing the quiz!</div>
              <div>Here is how you did</div>
              <h1 className='display-1'>{currentScore}%</h1>
              <div className='display-4'>{scoreMessage(currentScore)}</div>
              <button
                className={className('btn', 'btn-primary', questionSubmit)}
                type='submit'
                onClick={this.handleQuizReset}
              >
                Restart Quiz
              </button>
            </>
          ) : (
            <Question
              questionToAnswer={
                this.state.quizQuestions[this.state.questionIndex]
              }
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
