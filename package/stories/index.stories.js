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
