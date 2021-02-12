import React from "react";
import ContactForm from "./ContactForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("renders with no errors", () => {
  render(<ContactForm />);
});

test("inputs render without error", () => {
  // ARRANGE
  act(() => {
    render(<ContactForm />);
  });
  // ACT
  const firstName = screen.getByPlaceholderText("Edd");
  const lastName = screen.getByPlaceholderText("Burke");
  const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
  const message = screen.getByLabelText(/message/i);

  userEvent.type(firstName, "Edd");
  userEvent.type(lastName, "Burke");
  userEvent.type(email, "bluebill1049@hotmail.com");
  userEvent.type(message, "Hello World!");

  expect(firstName).toHaveValue("Edd");
  expect(firstName).toBeInTheDocument();

  const submit = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submit);

  expect(submit).toMatchObject({});
  expect(submit).toBeInTheDocument();

  // ASSERT
});
