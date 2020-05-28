import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";

import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import NotFoundPage from "./pages/not-found-page";

import WrapperFor404RedirectsFromGitHubPages from "./components/wrapper-for-404-redirects-from-github-pages";

import { createStyleFor } from "./helpers/styles";

/** @private */
const styleFor = createStyleFor({
	footer: {
		cursor: "pointer",
		width: "90%",
		margin: "0 5%",
		animation: "slide-up-from-bottom 2s 8s both"
	},
});

export default function App(): JSX.Element {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<WrapperFor404RedirectsFromGitHubPages>
							<HomePage />
						</WrapperFor404RedirectsFromGitHubPages>
					</Route>
					<Route exact path="/profile">
						<ProfilePage />
					</Route>
					<Route path="*">
						<NotFoundPage />
					</Route>
				</Switch>
			</BrowserRouter>

			<footer
				className="bg-primary rounded-top"
				style={styleFor.footer}
			>
				<a
					className="d-block"
					href="https://github.com/parzh/parzh.github.io"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="bg-transparent border-0 w-100 p-0 text-white py-4 lead">
						Visit the code repository of this site
					</button>
				</a>
			</footer>
		</Provider>
	);
}
