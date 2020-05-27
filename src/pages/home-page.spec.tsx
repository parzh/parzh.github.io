import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import HomePage from "./home-page";

describe("<HomePage />", () => {
	const component = shallow(<HomePage />);
	const links = component.find(Link);

	it("shows link to /profile", () => {
		const link = links.get(0);

		expect(link.props.children).toEqual("Go to profile page");
		expect(link.props).toHaveProperty("to", "/profile");
	});

	it("shows link to /launch", () => {
		const link = links.get(1);

		expect(link.props.children).toEqual("launch a rocket 🚀 to Mars");
		expect(link.props).toHaveProperty("to", "/launch");
	});

	it("shows help icon", () => {
		const icon = component.find("i.material-icons");

		expect(icon.text()).toEqual("help_outline");
		expect(icon.prop("title")).toBeTruthy();
	});
});
