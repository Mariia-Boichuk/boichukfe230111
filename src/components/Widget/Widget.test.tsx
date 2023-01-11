import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import { Widget } from "./Widget";
import userEvent from "@testing-library/user-event";

const mockedData = {
  phone: "902-782-3286",
  name: "Brazil Izair",
  nickname: "@brazilizair",
  email: "brazil.izair@fallinhay.com",
  position: "Managing Director",
  photo: "2.jpg",
};

describe("UserRow", () => {
  beforeEach(() => {
    render(<Widget userData={mockedData} setWidgetShown={jest.fn} />);
  });

  afterEach(cleanup);

  it("should render btn without errors", () => {
    const name = screen.getByText(/Brazil Izair/i);
    expect(name).toBeInTheDocument();
  });

  it("should render nickname without errors", () => {
    const nickname = screen.getByText(/brazilizair/i);
    expect(nickname).toBeInTheDocument();
  });

  it("should render position without errors", () => {
    const position = screen.getByText(/Managing Director/i);
    expect(position).toBeInTheDocument();
  });

  it("should render widget", async () => {
    const widg = screen.getByTestId("widget");
    expect(widg).toBeInTheDocument();
  });
});
