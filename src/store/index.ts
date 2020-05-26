import { createStore, combineReducers } from "redux";
import app from "./app/reducer";

export default createStore(combineReducers({
	app,
}));
