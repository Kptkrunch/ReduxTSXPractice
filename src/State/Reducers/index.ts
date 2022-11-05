import { combineReducers } from "redux";
import repoReducers from "./repoReducers";

const reducers = combineReducers({
    repos: combineReducers
});

export default reducers;