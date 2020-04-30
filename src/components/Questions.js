import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { answerQuestion, deleteQuestion } from "../redux/actionCreators";

const Questions = ({ questionItem, answerQuestion, deleteQuestion }) => {

  return questionItem.map((question) => (
    <Question
      questionTitle={question.questionTitle}
      key={question.id}
      id = {question.id}
      answers={question.answers}
      answerQuestion={answerQuestion}
      deleteQuestion={deleteQuestion}
    />

  ));
};

const mapDispatchToProps = { answerQuestion, deleteQuestion };

const mapStateToProps = (state) => {
  return {
    questionItem: state.appQuestions.questionItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
