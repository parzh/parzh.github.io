import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";

import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import NotFoundPage from "./pages/not-found-page";

import WrapperFor404RedirectsFromGitHubPages from "./components/wrapper-for-404-redirects-from-github-pages";

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
		</Provider>
	);
}
