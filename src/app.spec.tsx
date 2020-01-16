import React from "react";
import { shallow } from "enzyme";

import App from "./app";

describe("<App /> (index)", () => {
	it("holds the correct text", () => {
		expect(shallow(<App />).text()).toEqual<string>("Nothing's here, move along!");
	});
});
