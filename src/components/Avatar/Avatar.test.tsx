import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  render(
    <Avatar avatarUrl="https://avatars.dicebear.com/api/human/avatar12.svg?background=%23EBEDF5&radius=50" />
  );

  it("should render component without errors", () => {
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("src");
    expect(avatar).toHaveAttribute("alt", "Avatar of the user.");
  });
});
