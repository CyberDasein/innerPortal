import {combineReducers} from 'redux'
import {questionReducer} from './questionReducer'
import {messageReducer} from './messageReducer'
import {appReducer} from './appReducer'

export const mainReducer = combineReducers({
  appQuestions: questionReducer,
  appChat: messageReducer,
  app: appReducer
})