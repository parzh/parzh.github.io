import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./app";

/** @private */
const app = (
	<HashRouter>
		<App />
	</HashRouter>
);

/** @private */
const root = document.getElementById("root");

ReactDOM.render(app, root);
