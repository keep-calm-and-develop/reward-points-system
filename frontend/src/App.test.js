import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test('renders main app component', () => {
  render(<App />);
  const title = screen.getByText(/reward points system/i);
  expect(title).toBeInTheDocument();
});
