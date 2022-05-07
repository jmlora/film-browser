import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tag } from "./Tag";

afterEach(cleanup);

it("Should show the tag", () => {
  const { getByText } = render(<Tag tag="test" />);

  expect(getByText("test")).toBeTruthy();
});
