import React from "react";
import PortfolioSlideIn from "./PortfolioSlideIn";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container: HTMLDivElement;
const togglePopUp = () => {
  //empty method to make the test happy (not being tested atm)
}


beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe("renders...", () => {
  beforeEach(() => {
    act(() => {
      render(
        <PortfolioSlideIn
          title="TestTitle"
          imgPath="https://picsum.photos/355"
          description="TestDescription"
          togglePopUp={togglePopUp}
        ></PortfolioSlideIn>
      );
    });
  });

  test("...root of component", () => {
    const rootElement = document.getElementById("#root");

    expect(rootElement).toBeInTheDocument();
  });

  test("...expected image src", () => {
    const imgElement = document.querySelector("img") as HTMLImageElement;
    expect(imgElement.src).toBe("https://picsum.photos/355");
  });

  test("...title of the project", () => {
    const titleElement = document.getElementsByClassName("SlideinHeader");
    expect(titleElement[0].textContent).toBe("TestTitle");
  });

  test("...description of the project", () => {
    const descriptionElement = document.getElementsByClassName("SlideinDescription");
    expect(descriptionElement[0].textContent).toBe("TestDescription");
  })
});
