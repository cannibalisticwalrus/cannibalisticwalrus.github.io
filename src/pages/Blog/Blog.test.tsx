import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Blog";

test("renders root component", () => {
  render(<App />);
  const rootElement = document.getElementById('#root');
  expect(rootElement).toBeInTheDocument();
});

test("renders header of Blog", () => {
  render(<App />);
  const titleElement = document.getElementsByClassName("BlogHeader");
  expect(titleElement.length).toBe(1);
  expect(titleElement[0].textContent).toBe("Blog");
});

test("renders content of Blog", () => {
  render(<App />);
  const titleElement = document.getElementsByClassName("BlogContent");
  expect(titleElement.length).toBe(1);
  expect(titleElement[0]).toBeInTheDocument();
});