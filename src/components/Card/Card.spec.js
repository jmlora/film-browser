import { cleanup, render } from "@testing-library/react";
import { Card } from "./Card";

afterEach(cleanup);

it("Should show a Card with thumbnail, title and description", () => {
  const props = {
    thumbnail:
      "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
    title: "Girls",
    description:
      "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s."
  };
  const { getByText } = render(<Card {...props} />);

  expect(getByText(props.title)).toBeTruthy();
});
