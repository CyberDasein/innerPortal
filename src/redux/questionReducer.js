import { ADD_QUESTION, ANSWER_QUESTION, DELETE_QUESTION } from "./actions";

const initialState = {
  questionItem: [
    {
      questionTitle: "Чем заняться на карантине?",
      id: 1 + Date.now().toString(),
      answers: "сделать что-нибудь полезное", 
    },
    {
      questionTitle: "Чем заняться на карантине?",
      id: 2 + Date.now().toString(),
      answers: "прочитать книгу" 
    },
  ],
 
};

export const questionReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questionItem: [...state.questionItem, action.payload],
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        answers: [...state.questionItem, action.payload],
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questionItem: state.questionItem.filter(
          (question) => question.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
