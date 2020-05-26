import type { ActionTypeFrom, ActionFrom, ActionCreatorFrom } from "@parzh/typed-redux-actions";
import Breadcrumbs from "src/typings/breadcrumbs";

export interface State {
	breadcrumbs: Breadcrumbs;
}

/** @private */
interface PayloadMap {
	APP$SET_BREADCRUMBS: Breadcrumbs;
	APP$REMOVE_BREADCRUMBS: never;
}

export type ActionType = ActionTypeFrom<PayloadMap>;
export type Action<Type extends ActionType = ActionType> = ActionFrom<PayloadMap, Type>;
export type ActionCreator<Type extends ActionType = ActionType> = ActionCreatorFrom<PayloadMap, Type>;
