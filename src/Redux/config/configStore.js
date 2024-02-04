import { createStore } from 'redux';
import { fanLetterReducer } from '../modules/Reducer';

// 리덕스는 단일 스토어로 모든 상태 트리를 관리.
const store = createStore(fanLetterReducer);

export default store;
