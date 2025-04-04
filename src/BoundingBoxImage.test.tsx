import { render, screen } from "@testing-library/react";
import BoundingBox from "./index";

test("renders the component correctly", () => {
  render(<BoundingBox src="a" />);
  expect(screen.getByText("Hello World!!!")).toBeInTheDocument();
});
