(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,s){e.exports=s(11)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),a=s(3),o=s.n(a),r=s(1),l=s.n(r);s(9);const c="answerBox",u="questionSubmit";class h extends n.Component{constructor(e){super(e),this.handleRadioClick=(e=>{this.setState({selectedAnswer:e})}),this.handleSubmitClick=(()=>{this.setState({showAnswer:!0}),this.props.onHandleQuestionSubmit(this.state.selectedAnswer===this.props.questionToAnswer.a)}),this.handleNextClick=(()=>{this.setState({selectedAnswer:"",showAnswer:!1}),this.props.onHandleQuestionUpdate(this.props.questionIndex+1)}),this.state={selectedAnswer:"",showAnswer:!1}}render(){let e;e=this.state.showAnswer?this.props.questionToAnswer.a===this.state.selectedAnswer?i.a.createElement("h6",{className:l()(c,"bg-success")},"You are correct!"):i.a.createElement("h6",{className:l()(c,"bg-danger")},"Incorrect! This is your answer ",this.state.selectedAnswer,i.a.createElement("br",null),"The correct answer is ",this.props.questionToAnswer.a):null;const t=i.a.createElement("button",{className:l()("btn","btn-primary",u),type:"submit",onClick:this.handleSubmitClick,disabled:!this.state.selectedAnswer},"Submit");return i.a.createElement("div",{className:"questionWrapper"},i.a.createElement("h4",null,this.props.questionToAnswer.q),i.a.createElement("div",{className:"flexAnswers"},this.props.questionToAnswer.choices.map(e=>i.a.createElement("div",{key:e},i.a.createElement("input",{id:e,type:"radio",name:"question",checked:this.state.selectedAnswer===e,disabled:this.state.showAnswer,onChange:()=>this.handleRadioClick(e)}),i.a.createElement("label",{htmlFor:e},e)))),e,this.state.showAnswer?i.a.createElement("button",{className:l()("btn","btn-primary",u),type:"submit",onClick:this.handleNextClick},"Next"):t)}}s(10);const d=e=>e>=75?"Great Work!":e<75&&e>=50?"Not good enough!":"You need to work harder!",m="questionSubmit";const p=document.getElementById("root");o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(class extends n.Component{constructor(e){super(e),this.handleQuestionSubmit=(e=>{e&&this.setState({correctAnswers:this.state.correctAnswers+1})}),this.handleQuestionUpdate=(e=>{e>=this.state.quizQuestions.length?this.setState({quizCompleted:!0,questionIndex:e}):this.setState({questionIndex:e})}),this.handleQuizReset=(()=>{this.setState({correctAnswers:0,questionIndex:0,quizCompleted:!1})}),this.state={quizQuestions:[],correctAnswers:0,questionIndex:0,quizCompleted:!1,loading:!0}}componentDidMount(){fetch("http://localhost:3001/").then(e=>e.json()).then(e=>{e.map(e=>{this.setState({quizQuestions:[...this.state.quizQuestions,{q:e.Question,choices:[e["Choice 1"],e["Choice 2"],e["Choice 3"]],a:e.Answer}]})}),this.setState({loading:!1})})}render(){if(this.state.loading)return i.a.createElement("div",null,"Loading...");let e=this.state.correctAnswers/this.state.quizQuestions.length*100;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"jumbotron"},this.state.quizCompleted?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"Congratulations on finishing the quiz!"),i.a.createElement("div",null,"Here is how you did"),i.a.createElement("h1",{className:"display-1"},e,"%"),i.a.createElement("div",{className:"display-4"},d(e)),i.a.createElement("button",{className:l()("btn","btn-primary",m),type:"submit",onClick:this.handleQuizReset},"Restart Quiz")):i.a.createElement(h,{questionToAnswer:this.state.quizQuestions[this.state.questionIndex],questionIndex:this.state.questionIndex,onHandleQuestionUpdate:this.handleQuestionUpdate,onHandleQuestionSubmit:this.handleQuestionSubmit})))}},null)),p)}],[[4,1,2]]]);
//# sourceMappingURL=main.fdb6927c.chunk.js.map