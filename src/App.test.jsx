import { render, waitFor, screen, cleanup } from "@testing-library/react";
import { test, expect, afterEach } from "vitest";
import App from "./App";

afterEach(cleanup);

test('The heading should be "User List"', () => {
  render(<App />);
  const header = screen.getByText("User List");
  expect(header).toBeTruthy();
});

test("The list should contain 10 users", async () => {
    render(<App />);
    await waitFor(() => {
      const list = screen.getByRole("list");
      expect(list.children.length).toBe(10);
    });
});

test('Fetch and render users', async () => {
    render(<App />);
    await waitFor(() => {
        const list = screen.getByRole("list");
        expect(list.children.length).toBe(10);
        expect(list.className).toBe("userlist");

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(10);
        expect(listItems[0].textContent).toBe("Leanne Graham");
        expect(listItems[1].textContent).toBe("Ervin Howell");
    });
});
