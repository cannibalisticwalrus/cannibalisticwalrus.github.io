import React from "react";
import PortfolioSlideIn from "./PortfolioSlideIn";
import { render } from "@testing-library/react";


test("renders root of component", () => {
  render(
    <PortfolioSlideIn
      title="A Title for the Grid Item"
      imgPath="https://picsum.photos/355"
      description="This is a short description about the project"
    ></PortfolioSlideIn>
  );
  const rootElement = document.getElementById("#root");
  expect(rootElement).toBeInTheDocument();
});
