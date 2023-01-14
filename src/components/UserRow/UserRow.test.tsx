import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { UserRow } from "./UserRow";

const mockedData = {
  phone: "902-782-3286",
  name: "Brazil Izair",
  nickname: "@brazilizair",
  email: "brazil.izair@fallinhay.com",
  position: "Managing Director",
  photo: "2.jpg",
};

const setup = () => render(<UserRow userData={mockedData} />);

describe("UserRow", () => {
  it("should render  without errors", () => {
    setup();

    const row = screen.getByTestId("userInfoRow");
    expect(row).toBeInTheDocument();
  });

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

  it("should render widget after clicking button", async () => {
    setup();

    const Btn = screen.getByText(/view/i);
    await userEvent.click(Btn);
    const widg = screen.getByTestId("widget");
    expect(widg).toBeInTheDocument();
  });

  it("should close widget after clicking close button", async () => {
    setup();

    const Btn = screen.getByText(/view/i);
    await userEvent.click(Btn);
    const widg = screen.getByTestId("widget");
    const closeBtn = screen.getByText(/x/i);
    await userEvent.click(closeBtn);
    expect(widg).not.toBeInTheDocument();
  });
});
