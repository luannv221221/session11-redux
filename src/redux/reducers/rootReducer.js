import { combineReducers } from "redux";
import { counter } from "./count";
import { dcm } from "./dcm";

const rootReducer = combineReducers({
    counter1:counter,
    dcm:dcm
});
export default rootReducer;