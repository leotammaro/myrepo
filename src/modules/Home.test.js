import React from "react";
import "@testing-library/jest-dom"
import Home from "./Home"
import { render, screen } from "@testing-library/react";

const renderHome = () => render(<Home />)
test("must get text from component render", () => {
  renderHome()
  expect(screen.getByText("Soy Leo")).toBeInTheDocument()
})
