import React from "react";
import { render, screen } from "@testing-library/react";
import NavTabs from "./NavTabs";

test("renders root of component", () => {
  render(<NavTabs />);
  const rootElement = document.getElementById('#root');
  expect(rootElement).toBeInTheDocument();
});