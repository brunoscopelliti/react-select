import React, { useState } from "react";

import Select from "./select";

const StatefulSelect =
  (props) => {
    const {
      onChange,
      value: initialValue,
      ...selectProps
    } = props;

    const [value, setValue] = useState(initialValue);

    return (
      <Select
        {...selectProps}
        onChange={
          (option, optionIdx) => {
            setValue(option.value || option.id);

            /* istanbul ignore else */
            if (typeof onChange == "function") {
              onChange(option, optionIdx);
            }
          }
        }
        value={value}
      />
    );
  };

StatefulSelect.propTypes = Select.propTypes;

export default StatefulSelect;
