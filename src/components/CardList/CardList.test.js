import React from "react";
import { cleanup, render } from "@testing-library/react";
import { CardList } from "./CardList";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("Should show a CardList with thumbnails, titles and descriptions", () => {
  const props = {
    isLoading: false,
    filmData: [
      {
        show: {
          id: 139,
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
          },
          name: "Girls",
          summary:
            "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s."
        }
      },
      {
        show: {
          id: 49334,
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg"
          },
          name: "Shining Girls",
          summary:
            "Shining Girls is a metaphysical thriller, which follows a Chicago reporter who survived a brutal assault only to find her reality shifting as she hunts down her attacker."
        }
      }
    ]
  };

  const { container, getByText, getByAltText } = render(
    <CardList {...props} />,
    { wrapper: MemoryRouter }
  );

  for (let film of props.filmData) {
    expect(container.querySelector(`#film-${film.id}`)).toBeDefined();
    expect(getByText(film.show.name)).toBeTruthy();
    expect(getByAltText(`${film.show.name} thumbnail`)).toBeTruthy();
    expect(getByText(film.show.summary)).toBeTruthy();
  }
});

it("Should show a message when data is not found in the server", () => {
  const props = {
    filmData: [],
    isLoading: false
  };

  const { getByText } = render(<CardList {...props} />, {
    wrapper: MemoryRouter
  });

  expect(getByText("No data found")).toBeTruthy();
});

it("Should show a spinner while data is being fetching", () => {
  const props = {
    filmData: [],
    isLoading: true
  };

  const { container } = render(<CardList {...props} />, {
    wrapper: MemoryRouter
  });
  expect(container.querySelector("#loader")).toBeDefined();
});
