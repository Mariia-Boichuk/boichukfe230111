import React from "react";
import { render, screen } from "@testing-library/react";

import { Widget } from "./Widget";

const mockedData = {
  phone: "902-782-3286",
  name: "Brazil Izair",
  nickname: "@brazilizair",
  email: "brazil.izair@fallinhay.com",
  position: "Managing Director",
  photo: "2.jpg",
};

const setup = () =>
  render(<Widget userData={mockedData} setWidgetShown={jest.fn} />);

describe("UserRow", () => {
  it("should render btn without errors", () => {
    setup();

    const name = screen.getByText(/Brazil Izair/i);
    expect(name).toBeInTheDocument();
  });

  it("should render nickname without errors", () => {
    setup();

    const nickname = screen.getByText(/brazilizair/i);
    expect(nickname).toBeInTheDocument();
  });

  it("should render position without errors", () => {
    setup();

    const position = screen.getByText(/Managing Director/i);
    expect(position).toBeInTheDocument();
  });

  it("should render widget", async () => {
    setup();

    const widg = screen.getByTestId("widget");
    expect(widg).toBeInTheDocument();
  });
});
