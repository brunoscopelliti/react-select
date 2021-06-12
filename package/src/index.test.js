import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select, { StatefulSelect } from "./";

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

  it("renders the select / with value", () => {
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
        value="b"
      />
    );

    const dropdownHook = screen.getByRole("button");

    expect(dropdownHook).toHaveTextContent("Banana");
  });

  it("renders the select / no options", () => {
    const { container } = render(
      <Select
        label="Pick a fruit"
        options={[]}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders the select / disabled", () => {
    render(
      <Select
        disabled
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

    const dropdownHook = screen.getByRole("button");

    expect(dropdownHook).toHaveAttribute("disabled", "");
  });

  it("renders the select / placeholder", () => {
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
        placeholder="Fruits"
      />
    );

    const dropdownHook = screen.getByRole("button");

    expect(dropdownHook).toHaveTextContent("Fruits");
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

    expect(dropdownContent).not.toHaveAttribute("aria-activedescendant");

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    expect(dropdownContent).toBeVisible();
    expect(dropdownContent).toHaveFocus();

    expect(dropdownContent).toHaveAttribute("aria-labelledby", label.id);

    expect(dropdownHook).toHaveAttribute("aria-expanded", "true");

    const options = screen.getAllByRole("option");

    expect(options).toHaveLength(3);

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[0].id);
  });

  it("closes the select when Escape is pressed", () => {
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

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    const dropdownContent = screen.getByRole("listbox");

    expect(dropdownContent).toBeVisible();
    expect(dropdownContent).toHaveFocus();

    fireEvent.keyDown(document, { code: "Escape" });

    expect(dropdownContent).not.toBeVisible();

    expect(dropdownHook).toHaveFocus();
  });

  it("closes the select when user clicks outside", () => {
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

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    const dropdownContent = screen.getByRole("listbox");

    expect(dropdownContent).toBeVisible();
    expect(dropdownContent).toHaveFocus();

    userEvent.click(document.body);

    expect(dropdownContent).not.toBeVisible();

    expect(dropdownHook).not.toHaveFocus();
  });

  it("selects option", () => {
    const spy = jest.fn();

    render(
      <StatefulSelect
        label="Pick a fruit"
        onChange={spy}
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

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    const dropdownContent = screen.getByRole("listbox");

    const options = screen.getAllByRole("option");

    userEvent.click(options[1]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ id: "b", label: "Banana" }, 1);
    spy.mockReset();

    expect(dropdownContent).not.toBeVisible();

    expect(dropdownHook).toHaveTextContent("Banana");

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[1].id);

    userEvent.click(dropdownHook);
    userEvent.click(options[1]);

    expect(spy).not.toHaveBeenCalled();

    userEvent.click(dropdownHook);
    userEvent.click(options[2]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ id: "c", label: "Cherry" }, 2);
  });

  it("selects option / keyboard", () => {
    const spy = jest.fn();

    render(
      <StatefulSelect
        label="Pick a fruit"
        onChange={spy}
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

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    const dropdownContent = screen.getByRole("listbox");

    const options = screen.getAllByRole("option");

    fireEvent.keyDown(document, { code: "ArrowDown" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[1].id);

    fireEvent.keyDown(document, { code: "ArrowDown" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[2].id);

    fireEvent.keyDown(document, { code: "ArrowUp" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[1].id);

    expect(spy).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { code: "Enter" });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ id: "b", label: "Banana" }, 1);
    spy.mockReset();

    expect(dropdownContent).not.toBeVisible();

    expect(dropdownHook).toHaveTextContent("Banana");

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[1].id);

    userEvent.click(dropdownHook);

    fireEvent.keyDown(document, { code: "End" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[2].id);

    fireEvent.keyDown(document, { code: "Home" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[0].id);

    fireEvent.keyDown(document, { code: "Enter" });

    expect(dropdownContent).not.toBeVisible();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ id: "a", label: "Apple" }, 0);
    spy.mockReset();
  });

  it("selects option / keyboard edges", () => {
    render(
      <StatefulSelect
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

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    const dropdownContent = screen.getByRole("listbox");

    const options = screen.getAllByRole("option");

    fireEvent.keyDown(document, { code: "End" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[2].id);

    fireEvent.keyDown(document, { code: "ArrowDown" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[2].id);

    fireEvent.keyDown(document, { code: "Home" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[0].id);

    fireEvent.keyDown(document, { code: "ArrowUp" });

    expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[0].id);
  });

  it("selects option / char", async () => {
    const spy = jest.fn();

    render(
      <Select
        label="Pick a pet"
        onChange={spy}
        options={
          [
            {
              id: "o1",
              label: "Bear",
            },
            {
              id: "o2",
              label: "Cat",
            },
            {
              id: "o3",
              label: "Chicken",
            },
            {
              id: "o4",
              label: "Crocodile",
            },
            {
              id: "o5",
              label: "Dog",
            },
            {
              id: "o6",
              label: "Elephant",
            },
            {
              id: "o7",
              label: "Lion",
            },
            {
              id: "o8",
              label: "Monkey",
            },
            {
              id: "o9",
              label: "Rabbit",
            },
            {
              id: "o10",
              label: "Wolf",
            },
          ]
        }
      />
    );

    const dropdownHook = screen.getByRole("button");

    userEvent.click(dropdownHook);

    const dropdownContent = screen.getByRole("listbox");

    const options = screen.getAllByRole("option");

    fireEvent.keyDown(document, { code: "KeyD", key: "d" });

    await waitFor(() => {
      expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[4].id);
    });

    fireEvent.keyDown(document, { code: "KeyC", key: "c" });
    fireEvent.keyDown(document, { code: "KeyR", key: "r" });

    await waitFor(() => {
      expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[3].id);
    });

    fireEvent.keyDown(document, { code: "KeyR", key: "r" });

    await waitFor(() => {
      expect(dropdownContent).toHaveAttribute("aria-activedescendant", options[8].id);
    });

    fireEvent.keyDown(document, { code: "Enter" });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ id: "o9", label: "Rabbit" }, 8);
    spy.mockReset();
  });
});
