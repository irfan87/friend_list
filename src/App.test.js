import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("FriendList should have snapshot", () => {
	const { asFragment } = render(<App />);

	expect(asFragment(<App />)).toMatchSnapshot();
});
