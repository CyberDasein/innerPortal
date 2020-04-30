import {  SET_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGE } from "./actions";

const initialState = {
  messages: [
    // {
    //   date: new Date().toLocaleString(),
    //   text: "как дела?",
    //   id: 555 + Date.now().toString(),
    // },
    // {
    //   date: new Date().toLocaleString(),
    //   text: "привет!",
    //   id: 2222 + Date.now().toString(),
    // }
  ]
};

export const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    case FETCH_MESSAGE: 
      return {...state, messages: action.payload}

    default:
      return state;
  }
};
