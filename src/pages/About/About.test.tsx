import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./About";

test("renders learn react link", () => {
  render(<App />);
  const rootElement = document.getElementById('#root');
  expect(rootElement).toBeInTheDocument();
});