import React from "react";
import PortfolioGridItem from "./PortfolioGridItem";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  act(() => {
    render(
      <PortfolioGridItem
        title="A Title for the Grid Item"
        imgPath="https://picsum.photos/355"
        description="This is a short description about the project"
      ></PortfolioGridItem>
    );
  });
});

test("renders root of component", () => {
  const rootElement = document.getElementById("#root");
  expect(rootElement).toBeInTheDocument();
});

// test("onClick of GridItem spawns portfolioSlidein Component", () => {
//   const rootElement = document.getElementById("#root");
//   act(() => {
//     rootElement?.click();
//   });

//   expect(
//     document.querySelector("PortfolioSlideInComponent")
//   ).toBeInTheDocument();
// });
