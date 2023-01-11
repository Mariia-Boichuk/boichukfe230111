import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render btn without errors", () => {
    const viewAllBtn = screen.getByText(/view all/i);
    expect(viewAllBtn).toBeInTheDocument();
  });

  it("should render 3 users", () => {
    const users = screen.getAllByTestId("userInfoRow");
    expect(users).toHaveLength(3);
  });

  it("should render all users after clicking button", async () => {
    const viewAllBtn = screen.getByText(/view all/i);
    await userEvent.click(viewAllBtn);
    const users = screen.getAllByTestId("userInfoRow");
    expect(users).toHaveLength(10);
  });
});
