import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Review } from "./Review";

afterEach(cleanup);

it("Should render the review", () => {
  const { getByText } = render(<Review rating={6.7} />);

  expect(getByText("6.7")).toBeTruthy();
});

it("Shouldn't render the review if it not available", () => {
  const { getByText } = render(<Review />);

  expect(getByText("N/D")).toBeTruthy();
});
