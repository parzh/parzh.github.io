import type { ActionCreator } from "./types";

export const setName: ActionCreator<"USER$SET_NAME"> = (name) => ({
	type: "USER$SET_NAME",
	payload: name,
});
