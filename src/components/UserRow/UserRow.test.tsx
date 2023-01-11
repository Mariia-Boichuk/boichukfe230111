import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import { UserRow } from "./UserRow";
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
    render(<UserRow userData={mockedData} />);
  });

  it("should render  without errors", () => {
    const row = screen.getByTestId("userInfoRow");
    expect(row).toBeInTheDocument();
  });

  it("should render btn without errors", () => {
    const name = screen.getByText(/Brazil Izair/i);
    expect(name).toBeInTheDocument();
  });

  it("should render nickname without errors", () => {
    const nickname = screen.getByText(/brazilizair/i);
    expect(nickname).toBeInTheDocument();
  });

  it("should render widget after clicking button", async () => {
    const Btn = screen.getByText(/view/i);
    await userEvent.click(Btn);
    const widg = screen.getByTestId("widget");
    expect(widg).toBeInTheDocument();
  });
});
