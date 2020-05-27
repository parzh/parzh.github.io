import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import * as user from "src/store/user/actions";
import { useName } from "src/store/selectors";

import ProfileTitleReadonly from "./profile-title-readonly";
import ProfileTitleEditable from "./profile-title-editable";

export default function ProfileTitle(): JSX.Element {
	const currentName = useName();
	const [ name, setName ] = useState(currentName);
	const [ editable, setEditable ] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (name !== currentName)
			dispatch(user.setName(name));
	}, [ name, currentName, editable, dispatch ]);

	return (
		<header className="d-flex flex-column">
			{editable ? (
				<ProfileTitleEditable onEdit={(name): void => {
					setName(name);
					setEditable(false);
				}} />
			) : (
				<ProfileTitleReadonly onRename={(): void => setEditable(true)} />
			)}
		</header>
	);
}
