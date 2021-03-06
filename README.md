# react-select

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/react-select/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/react-select.svg?style=flat)](https://www.npmjs.com/package/@bscop/react-select)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/react-select.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/react-select)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/react-select)](https://app.codecov.io/gh/brunoscopelliti/react-select/)

Accessible select (in React).

## Install

```
npm i @bscop/react-select
```

## Usage

```js
import Select from "@bscop/react-select";

function App () {
  return (
    <Select
      label="Pick a fruit"
      onChange={
        (option) => {
          alert(`Option selected: "${option.label}"`);
        }
      }
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
}
```

### Props

- [className]

Optional. Additional css class that is going to be applied on the select root element.

- [disabled]

Optional. Default `false`. Determine whether the selected should be selected.

- label

A label that describes the purpose of the select component.

- options

List of options.\
Each option should have shape as `{ id : string; label : string; value ?: string | number; }`

- [onChange]

Optional. Handler executed when the selected option change.\
Receive the new selected option, and its index, as argument.

- [placeholder]

Optional. Determine the label rendered in the select hook button when there's no selected option.

- [renderHook]

Optional. Permits to customise the content of the select hook button.

- [renderOption]

Optional. Permits to customise how each option is rendered.

- [scrollable]

Optional. Default `false`. Determine whether the option list should be scrollable, in case the select contains a large number of options.

- [value]

Optional. Value of the selected option.

### CSS Custom properties

You can set the following CSS Custom properties to customize the look of the dropdown component:

```css
:root {
  --main-color: black;
  --main-bg-color: white;
  --dropdown-hook-border-color: #000;
  --dropdown-hook-disabled-border-color: #bababa;
  --dropdown-border-color: #bababa;
  --select-caret: url("data:image/png;base64,...");
  --select-active-option-bg-color: #eaeaea;
}
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
