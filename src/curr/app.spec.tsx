import React from "react";
import { shallow } from "enzyme";

import App from "./app";

describe("<App /> (curr)", () => {
	it("renders without errors", () => {
		expect(() => shallow(<App />)).not.toThrow();
	});
});
