import { combineReducers } from "redux";
import sizeReducer from "./sizeReducer";
import apiReducer from "./apiReducer";


export default combineReducers({sizeReducer, apiReducer});