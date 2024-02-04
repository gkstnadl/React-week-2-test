import { createStore } from "redux";
import { combineReducers } from "redux";

// 리덕스는 단일 스토어로 모든 상태 트리를 관리.
const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;