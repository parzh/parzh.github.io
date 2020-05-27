import type { State, Action } from "./types";

/** @private */
const initial: State = {
	name: "My Profile",
};

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		case "USER$SET_NAME":
			return { ...state, name: action.payload };

		default:
			return state;
	}
}
