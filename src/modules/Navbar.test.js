import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Navbar from "./Navbar";

const scrollToAboutMock = jest.fn()
const scrollToProjectMock = jest.fn()
const scrollToContactMock = jest.fn()
const renderNavbar = () => render(<Navbar scrollToAbout={scrollToAboutMock} scrollToProjects={scrollToProjectMock} scrollToContact={scrollToContactMock} />)


test("must get text´s that component have", () => {
  renderNavbar()
  expect(screen.getByText("Sobre mi")).toBeInTheDocument()
  expect(screen.getByText("Proyectos")).toBeInTheDocument()
  expect(screen.getByText("Contactame")).toBeInTheDocument()
})

test("must call scrollToAboutMock one time when click about button", () => {
  renderNavbar()
  const buttonAboutMe = screen.getByText("Sobre mi")
  fireEvent.click(buttonAboutMe)
  expect(scrollToAboutMock).toBeCalledTimes(1)
})

test("must call scrollToProjectMock one time when click about button", () => {
  renderNavbar()
  const buttonProject = screen.getByText("Proyectos")
  fireEvent.click(buttonProject)
  expect(scrollToProjectMock).toBeCalledTimes(1)
})

test("must call scrollToContactMock one time when click about button", () => {
  renderNavbar()
  const contactButton = screen.getByText("Contactame")
  fireEvent.click(contactButton)
  expect(scrollToContactMock).toBeCalledTimes(1)
})




