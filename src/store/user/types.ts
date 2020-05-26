import type { ActionTypeFrom, ActionFrom, ActionCreatorFrom } from "@parzh/typed-redux-actions";

export interface State {
	name: string | null;
}

/** @private */
interface PayloadMap {
	USER$SET_NAME: State["name"];
}

export type ActionType = ActionTypeFrom<PayloadMap>;

export type Action<Type extends ActionType = ActionType> = ActionFrom<PayloadMap, Type>;

export type ActionCreator<Type extends ActionType = ActionType> = ActionCreatorFrom<PayloadMap, Type>;
