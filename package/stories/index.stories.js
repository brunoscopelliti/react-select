import React from "react";

import Select, { StatefulSelect as StatefulSelect_ } from "../src";

export default {
  title: "Select",
  component: Select,
};

const Template = (args) => {
  return (
    <Select
      {...args}
      onChange={
        (option) => {
          alert(`Option selected: "${option.label}"`);
        }
      }
    />
  );
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  label: "Pick a fruit",
  options: [
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
  ],
};

export const ScrollableSelect = Template.bind({});
ScrollableSelect.args = {
  label: "Pick a fruit",
  options: [
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
    {
      id: "d",
      label: "Damson",
    },
    {
      id: "e",
      label: "Emu Berry Fruit",
    },
    {
      id: "f",
      label: "Feijoa",
    },
    {
      id: "g",
      label: "Grapes",
    },
    {
      id: "h",
      label: "Honeysuckle",
    },
    {
      id: "i",
      label: "Indian Fig Fruit",
    },
  ],
  scrollable: true,
};

export const SelectWithPlaceholder = Template.bind({});
SelectWithPlaceholder.args = {
  label: "Pick a fruit",
  options: [
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
  ],
  placeholder: "Fruits",
};

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  label: "Pick a fruit",
  disabled: true,
  options: [
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
  ],
};

const TemplateStatefulSelect = (args) => <StatefulSelect_ {...args} />;

export const StatefulSelect = TemplateStatefulSelect.bind({});
StatefulSelect.args = {
  label: "Pick a fruit",
  onChange (option) {
    alert(`Option selected: "${option.label}"`);
  },
  options: [
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
  ],
};

const EmojiMap = new Map([
  ["a", "🍎"],
  ["b", "🍌"],
  ["c", "🍒"],
]);

export const SelectWithCustomRenders = TemplateStatefulSelect.bind({});
SelectWithCustomRenders.args = {
  label: "Pick a fruit",
  options: [
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
  ],
  renderHook (selectedOption, props) {
    selectedOption = selectedOption || props.options[0];

    return `${EmojiMap.get(selectedOption.id)} ${selectedOption.label}`;
  },
  renderOption (option) {
    return `${EmojiMap.get(option.id)} ${option.label}`;
  },
};

export const SelectWithManyEntries = Template.bind({});
SelectWithManyEntries.args = {
  label: "Pick a fruit",
  options: [
    {
      id: "o1",
      label: "Airplane",
    },
    {
      id: "o2",
      label: "Apple",
    },
    {
      id: "o3",
      label: "Boat",
    },
    {
      id: "o4",
      label: "Car",
    },
    {
      id: "o5",
      label: "Cart",
    },
    {
      id: "o6",
      label: "Eggplant",
    },
    {
      id: "o7",
      label: "Elephant",
    },
    {
      id: "o8",
      label: "Tree",
    },
  ],
};
