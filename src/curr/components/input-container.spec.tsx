import React from "react";
import { shallow, render } from "enzyme";

import InputContainer from "./input-container";

describe("<InputContainer />", () => {
	it("renders without errors", () => {
		expect(() => shallow(<InputContainer />)).not.toThrow();
	});

	it("initially inputs default expression", () => {
		const listener = jest.fn();

		render(<InputContainer onChange={listener} />);

		expect(listener).toHaveBeenCalledWith<[string]>("(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH");
	});
});
