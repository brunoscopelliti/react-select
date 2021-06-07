import React from "react";

import Select from "../src";

export default {
  title: "Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

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
