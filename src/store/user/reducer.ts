import type { State, Action } from "./types";
import getRandomName from "src/helpers/get-random-name";

/** @private */
const initial: State = {
	name: getRandomName(),
};

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		case "USER$SET_NAME":
			return { ...state, name: action.payload };

		default:
			return state;
	}
}
