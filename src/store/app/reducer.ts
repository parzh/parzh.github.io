import type Breadcrumbs from "src/typings/breadcrumbs";
import type { State, Action } from "./types";

/** @private */
const empty: Breadcrumbs = Object.create(null);

/** @private */
const initial: State = {
	breadcrumbs: empty,
};

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		case "APP$SET_BREADCRUMBS":
			return { ...state, breadcrumbs: action.payload };

		case "APP$REMOVE_BREADCRUMBS":
			return { ...state, breadcrumbs: empty };

		default:
			return state;
	}
}
