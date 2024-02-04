import { createStore, combineReducers } from 'redux';
import fanLetterReducer from '../modules/Reducer';

const setLocalState = localStorage.getItem('fanLetters')
    ? JSON.parse(localStorage.getItem('fanLetters'))
    : {};

const rootReducer = combineReducers({
    fanLetters: fanLetterReducer, // 'fanLetterReducer' 리듀서가 'fanLetters' 상태를 관리
});

const store = createStore(
    rootReducer,
    { fanLetters: setLocalState }, // 초기 상태 설정
);

// Store의 상태가 변경될 때마다 로컬 스토리지에 저장
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('fanLetters', JSON.stringify(state.fanLetters));
});

export default store;
