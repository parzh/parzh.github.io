import React from "react";

import Page from "src/pages/page";
import Profile from "src/components/profile";

export default function ProfilePage(): JSX.Element {
	return (
		<Page breadcrumbs={{
			"home": {
				text: "Home",
				link: "/",
			},
			"todo": {
				text: "Profile",
			},
		}}>
			<Profile />
		</Page>
	);
}
