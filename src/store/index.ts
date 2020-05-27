import type { CombinedState } from "redux";
import { createStore, combineReducers } from "redux";

import type UserState from "./user";
import user from "./user/reducer";

export type State = CombinedState<{
	user: UserState;
}>;

export default createStore(combineReducers({
	user,
}));
