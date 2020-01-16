import React from "react";
import { render } from "@testing-library/react";

import App from "./app";

describe("<App /> (index)", () => {
	it("holds the correct text", () => {
		expect(render(<App />).container).toHaveTextContent("Nothing's here, move along!");
	});
});
