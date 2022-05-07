import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LinkButton } from "./LinkButton";

afterEach(cleanup);

it("Should render the link and its content", () => {
  const { getByText, getByRole } = render(
    <LinkButton to="/test">TEST</LinkButton>,
    {
      wrapper: MemoryRouter
    }
  );

  expect(getByText("TEST")).toBeTruthy();
  expect(getByRole("link")).toHaveProperty("href");
  expect((getByRole("link") as HTMLAnchorElement).href).toContain("/test");
});
