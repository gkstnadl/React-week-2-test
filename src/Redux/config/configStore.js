import { createStore, combineReducers } from 'redux';
import fanLetterReducer from '../modules/Reducer';

const setLocalState = localStorage.getItem('fanLetters') ? JSON.parse(localStorage.getItem('fanLetters')) : {};

const rootReducer = combineReducers({
  fanLetters: fanLetterReducer // 'fanLetterReducer' 리듀서가 'fanLetters' 상태를 관리
});

// createStore는 deprecated(더 이상 사용하지 않고 redux-toolkit 사용을 권장) https://redux.js.org/api/createstore
const store = createStore(
  rootReducer,
  [{ fanLetters: setLocalState }] // https://redux.js.org/api/createstore 배열의 첫번째 인자로 넣음
);

export default store;
