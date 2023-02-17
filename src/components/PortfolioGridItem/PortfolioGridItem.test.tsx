import React from "react";
import PortfolioGridItem from "./PortfolioGridItem";
import { render } from "@testing-library/react";


test("renders root of component", () => {
  render(
    <PortfolioGridItem
      title="A Title for the Grid Item"
      imgPath="https://picsum.photos/355"
      description="This is a short description about the project"
    ></PortfolioGridItem>
  );
  const rootElement = document.getElementById("#root");
  expect(rootElement).toBeInTheDocument();
});
