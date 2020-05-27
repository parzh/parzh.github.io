import React from "react";

import Page from "src/pages/page";
import Profile from "src/components/profile";

export default function ProfilePage(): JSX.Element {
	return (
		<Page
			className="justify-content-center align-items-center py-1"
			breadcrumbs={{
				home: {
					text: "Home",
					link: "/",
				},
				todo: {
					text: "Profile",
				},
			}}
		>
			<Profile />
		</Page>
	);
}
