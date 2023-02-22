import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { HashRouter } from "react-router-dom";

/* This test is a blank test.  TODO: Learn how to properly test the router component*/
test("renders learn react link", () => {
  expect(true).toBe(true);
});

describe("Default page...", () => {
  test("renders", () => {
    render(
      <HashRouter>
        <Layout></Layout>
      </HashRouter>
    );
    const rootElement = document.getElementById("#root");
    expect(rootElement).toBeInTheDocument();
  });
});
