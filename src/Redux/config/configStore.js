import { createStore } from "redux";
import { combineReducers } from "redux";
import { fanLetterReducer } from "../modules/Reducer";

const rootReducer = combineReducers({
    fanLetterReducer: fanLetterReducer,
});
const store = createStore(rootReducer);

export default store;