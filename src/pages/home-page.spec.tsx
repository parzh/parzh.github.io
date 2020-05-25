import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import HomePage from "./home-page";

describe("<HomePage />", () => {
	const component = shallow(<HomePage />);

	it("shows the correct greeting", () => {
		expect(component.find("#greeting").text()).toEqual("Hello world!");
	});

	it("shows link to /profile page", () => {
		const link = component.find(Link);

		expect(link.text()).toEqual("Go to profile page");
		expect(link.prop("to")).toEqual("/profile");
	});

	it("shows help icon", () => {
		const icon = component.find("i.material-icons");

		expect(icon.text()).toEqual("help_outline");
		expect(icon.prop("title")).toBeTruthy();
	});
});
