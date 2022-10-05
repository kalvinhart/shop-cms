import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  test("Renders app title", () => {
    render(<Header />);

    const titleElement = screen.getByText("eShop CMS");

    expect(titleElement).toBeInTheDocument();
  });
});
