import React from "react";
import { cleanup, render } from "@testing-library/react";
import { FilmInfo } from "./FilmInfo";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("Should render the film info", () => {
  const props = {
    info: {
      id: 139,
      genres: ["Drama", "Comedy"],
      rating: 5.6,
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
      },
      name: "Girls",
      summary:
        "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s."
    }
  };

  const { getByText, getByAltText } = render(<FilmInfo {...props} />, {
    wrapper: MemoryRouter
  });

  expect(getByText(props.info.name)).toBeTruthy();
  expect(getByAltText(props.info.name)).toBeTruthy();
  expect(getByText(props.info.summary)).toBeTruthy();
});
