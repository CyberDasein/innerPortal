import {
  ADD_QUESTION,
  ANSWER_QUESTION,
  DELETE_QUESTION,
  FETCH_MESSAGE,
  SET_MESSAGE,
  DELETE_MESSAGE,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./actions";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: question,
  };
}
export function answerQuestion(answer) {
  return {
    type: ANSWER_QUESTION,
    payload: answer,
  };
}
export function deleteQuestion(id) {
  return {
    type: DELETE_QUESTION,
    payload: id,
  };
}
export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchedMessage(message) {
  return (dispatch) => {
    dispatch(showLoader());

    dispatch({ type: FETCH_MESSAGE, payload: message });

    dispatch(hideLoader());
  };
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    payload: id,
  };
}
