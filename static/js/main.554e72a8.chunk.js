(this["webpackJsonpreact-quiz-game"]=this["webpackJsonpreact-quiz-game"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(7),o=n.n(i),r=n(8),c=n(2),u=n(3),l=n(5),d=n(4),h=n(1),m=n.n(h),p=(n(14),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleRadioClick=function(e){s.setState({selectedAnswer:e})},s.handleSubmitClick=function(){s.setState({showAnswer:!0}),s.props.onHandleQuestionSubmit(s.state.selectedAnswer===s.props.questionToAnswer.a)},s.handleNextClick=function(){s.setState({selectedAnswer:"",showAnswer:!1}),s.props.onHandleQuestionUpdate(s.props.questionIndex+1)},s.state={selectedAnswer:"",showAnswer:!1},s}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this;e=this.state.showAnswer?this.props.questionToAnswer.a===this.state.selectedAnswer?a.a.createElement("h6",{className:m()("answerBox","bg-success")},"You are correct!"):a.a.createElement("h6",{className:m()("answerBox","bg-danger")},"Incorrect! This is your answer ",this.state.selectedAnswer,a.a.createElement("br",null),"The correct answer is ",this.props.questionToAnswer.a):null;var n=a.a.createElement("button",{className:m()("btn","btn-primary","questionSubmit"),type:"submit",onClick:this.handleSubmitClick,disabled:!this.state.selectedAnswer},"Submit");return a.a.createElement("div",{className:"questionWrapper"},a.a.createElement("h4",null,this.props.questionToAnswer.q),a.a.createElement("div",{className:"flexAnswers"},this.props.questionToAnswer.choices.map((function(e){return a.a.createElement("div",{key:e},a.a.createElement("input",{id:e,type:"radio",name:"question",checked:t.state.selectedAnswer===e,disabled:t.state.showAnswer,onChange:function(){return t.handleRadioClick(e)}}),a.a.createElement("label",{htmlFor:e},e))}))),e,this.state.showAnswer?a.a.createElement("button",{className:m()("btn","btn-primary","questionSubmit"),type:"submit",onClick:this.handleNextClick},"Next"):n)}}]),n}(s.Component)),w=(n(15),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleQuestionSubmit=function(e){e&&s.setState({correctAnswers:s.state.correctAnswers+1})},s.handleQuestionUpdate=function(e){e>=s.state.quizQuestions.length?s.setState({quizCompleted:!0,questionIndex:e}):s.setState({questionIndex:e})},s.handleQuizReset=function(){s.setState({correctAnswers:0,questionIndex:0,quizCompleted:!1})},s.state={quizQuestions:[],correctAnswers:0,questionIndex:0,quizCompleted:!1,loading:!0},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://protected-lake-37101.herokuapp.com/")).then((function(e){return e.json()})).then((function(t){t.map((function(t){return e.setState({quizQuestions:[].concat(Object(r.a)(e.state.quizQuestions),[{q:t.Question,choices:[t["Choice 1"],t["Choice 2"],t["Choice 3"]],a:t.Answer}])})})),e.setState({loading:!1})}))}},{key:"render",value:function(){if(this.state.loading)return a.a.createElement("div",null,"Loading...");var e,t=this.state.correctAnswers/this.state.quizQuestions.length*100;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"jumbotron"},this.state.quizCompleted?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"Congratulations on finishing the quiz!"),a.a.createElement("div",null,"Here is how you did"),a.a.createElement("h1",{className:"display-1"},t,"%"),a.a.createElement("div",{className:"display-4"},(e=t)>=75?"Great Work!":e<75&&e>=50?"Not good enough!":"You need to work harder!"),a.a.createElement("button",{className:m()("btn","btn-primary","questionSubmit"),type:"submit",onClick:this.handleQuizReset},"Restart Quiz")):a.a.createElement(p,{questionToAnswer:this.state.quizQuestions[this.state.questionIndex],questionIndex:this.state.questionIndex,onHandleQuestionUpdate:this.handleQuestionUpdate,onHandleQuestionSubmit:this.handleQuestionSubmit})))}}]),n}(s.Component)),b=document.getElementById("root");o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),b)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.554e72a8.chunk.js.map