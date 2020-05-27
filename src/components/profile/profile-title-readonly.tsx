import React from "react";
import { useDispatch } from "react-redux";

import Title from "src/components/title";
import TinyButton from "src/components/tiny-button";

import * as user from "src/store/user/actions";
import { useUserName } from "src/store/selectors";
import getRandomName from "src/helpers/get-random-name";

/** @private */
interface Props {
	onRename?: () => void;
}

export default function ProfileTitleReadonly({ onRename }: Props): JSX.Element {
	const username = useUserName();
	const dispatch = useDispatch();

	return (
		<>
			<Title>Greetings, {username}!</Title>

			<span className="text-muted text-center">
				<TinyButton
					icon="create"
					className="text-secondary py-0"
					onClick={onRename}
				>
					Rename
				</TinyButton>

				<TinyButton
					icon="cached"
					className="text-secondary py-0"
					onClick={(): void => {
						dispatch(user.setName(getRandomName()));
					}}
				>
					Random
				</TinyButton>
			</span>
		</>
	);
}
