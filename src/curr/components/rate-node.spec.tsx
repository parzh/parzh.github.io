import React from "react";
import { shallow, mount } from "enzyme";

import RateNode from "./rate-node";

jest.mock("../api/rates", () => ({
	"USD": 12.3456,
}));

describe("<RateNode />", () => {
	it("renders without errors", () => {
		expect(() => shallow(<RateNode code="UAH" />)).not.toThrow();
	});

	it("automatically asynchronously shows fetched rate", async (done) => {
		const wrapper = mount(<RateNode code="USD" onFetched={(rate): void => {
			expect(rate).toEqual<number>(12.3456);
			expect(wrapper.text()).toEqual("USD: 12.3456");

			done();
		}} />);

		expect(wrapper!.text()).toEqual("USD: ...");
	});
});
