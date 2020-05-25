import React from "react";
import { shallow } from "enzyme";

import HomePage from "./home-page";

describe("<HomePage />", () => {
	const component = shallow(<HomePage />);

	it("shows the correct greeting", () => {
		expect(component.find("#greeting").text()).toEqual("Hello world!");
	});

	it("shows link to /profile page", () => {
		const link = component.find("a");

		expect(link.text()).toEqual("Go to profile page");
		expect(link.prop("href")).toEqual("/profile");
	});

	it("shows help icon", () => {
		const icon = component.find("i.material-icons");

		expect(icon.text()).toEqual("help_outline");
		expect(icon.prop("title")).toBeTruthy();
	});
});
