import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import ProjectsSection from "./ProjectsSection"

test("must have text from component render", () => {
  render(<ProjectsSection />)
  expect(screen.getByText("Proyectos")).toBeInTheDocument()
})