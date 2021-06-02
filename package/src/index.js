import React, { useRef } from "react";
import PropTypes from "prop-types";

import { ControlledDropdown } from "@bscop/react-dropdown";
import useBool from "@bscop/use-bool";
import useId from "@bscop/use-id";

const Select =
  (props) => {
    const {
      label,
      options,
      renderHook = () => {
        /**
         * TODO
         * active option | placeholder | first option
         */
        return options[0].label;
      },
      ...dropdownProps
    } = props;

    const [visible, show, hide] = useBool(false);

    const labelId = useId({ prefix: "select-label" });

    const ref = useRef(null);

    /**
     * TODO
     * Set (and update) only after the select
     * is open the first time.
     */
    const activeOptionIndex = 0;

    return (
      <div>
        <div id={labelId}>
          {label}
        </div>
        <ControlledDropdown
          ref={ref}
          {...dropdownProps}
          aria-activedescendant={options[activeOptionIndex].id}
          aria-labelledby={labelId}
          label={
            renderHook()
          }
          role="listbox"
          show={show}
          visible={visible}
        >
          {
            options.map(
              (option) => {
                return (
                  <div
                    key={option.id}
                    role="option"
                  >
                    {option.label}
                  </div>
                );
              }
            )
          }
        </ControlledDropdown>
      </div>
    );
  };

Select.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    })
  ).isRequired,
  placeholder: PropTypes.string,
  renderHook: PropTypes.func,
};

export default Select;
