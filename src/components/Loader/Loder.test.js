import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Loader } from "./Loader";

afterEach(cleanup);

it("Should render the loader", () => {
  const { container } = render(<Loader />);

  expect(container.querySelector("#loader")).toBeTruthy();
});
