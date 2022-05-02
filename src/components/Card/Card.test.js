import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Card } from "./Card";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("Should show a Card with thumbnail, title and description", () => {
  const props = {
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
    },
    name: "Girls",
    summary:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s."
  };
  const { getByText, getByAltText } = render(<Card {...props} />, {
    wrapper: MemoryRouter
  });

  expect(getByText(props.name)).toBeTruthy();
  expect(getByText(props.summary)).toBeTruthy();
  expect(getByAltText(`${props.name} thumbnail`)).toBeTruthy();
});
