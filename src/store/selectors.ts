import { useSelector } from "react-redux";

import type { State } from ".";

export function useUserName(): string {
	return useSelector<State, string>(({ user }) => user.name);
}
