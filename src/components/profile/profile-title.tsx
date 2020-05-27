import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as user from "src/store/user/actions";

import ProfileTitleReadonly from "./profile-title-readonly";
import ProfileTitleEditable from "./profile-title-editable";

export default function ProfileTitle(): JSX.Element {
	const [ editable, setEditable ] = useState(false);
	const dispatch = useDispatch();

	const finish = (action: "submit" | "cancel") => (name?: string): void => {
		if (action === "submit") dispatch(user.setName(name!));
		setEditable(false);
	};

	return (
		<header className="d-flex flex-column">
			{editable ? (
				<ProfileTitleEditable
					onSubmit={finish("submit")}
					onCancel={finish("cancel")}
				/>
			) : (
				<ProfileTitleReadonly
					onRename={(): void => setEditable(true)}
				/>
			)}
		</header>
	);
}
