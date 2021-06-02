import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select from "./";

describe("Select", () => {
  it("renders the select", () => {
    render(
      <Select
        label="Pick a fruit"
        options={
          [
            {
              id: "a",
              label: "Apple",
            },
            {
              id: "b",
              label: "Banana",
            },
            {
              id: "c",
              label: "Cherry",
            },
          ]
        }
      />
    );

    const label = screen.getByText("Pick a fruit");

    const dropdownHook = screen.getByRole("button");

    expect(dropdownHook).toHaveAttribute("aria-labelledby", `${label.id} ${dropdownHook.id}`);

    expect(dropdownHook).toHaveAttribute("aria-haspopup", "listbox");

    expect(dropdownHook).not.toHaveAttribute("aria-expanded");

    expect(dropdownHook).toHaveTextContent("Apple");

    const dropdownContent = screen.getByRole("listbox", { hidden: true });

    expect(dropdownContent).not.toBeVisible();
  });

  it("opens the select", () => {
    render(
      <Select
        label="Pick a fruit"
        options={
          [
            {
              id: "a",
              label: "Apple",
            },
            {
              id: "b",
              label: "Banana",
            },
            {
              id: "c",
              label: "Cherry",
            },
          ]
        }
      />
    );

    const label = screen.getByText("Pick a fruit");

    const dropdownContent = screen.getByRole("listbox", { hidden: true });

    expect(dropdownContent).not.toBeVisible();

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    expect(dropdownContent).toBeVisible();
    expect(dropdownContent).toHaveFocus();

    expect(dropdownContent).toHaveAttribute("aria-labelledby", label.id);

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", "a");

    expect(dropdownHook).toHaveAttribute("aria-expanded", "true");

    const options = screen.getAllByRole("option");

    expect(options).toHaveLength(3);
  });
});
