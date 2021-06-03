import React from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";
import { ControlledDropdown } from "@bscop/react-dropdown";

import useBool from "@bscop/use-bool";
import useForwardRef from "@bscop/use-forward-ref";
import useKeydown from "@bscop/use-keydown";
import useId from "@bscop/use-id";

const Select = React.forwardRef(
  /**
   * @param {import("./index").SelectProps} props
   * @param {React.ForwardedRef<HTMLDivElement>} maybeRef
   */
  (props, maybeRef) => {
    const {
      className,
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

    const ref = useForwardRef(maybeRef);

    const [visible, show, hide] = useBool(false);

    const hideInternal =
      () => {
        hide();

        if (ref.current) {
          const dropdownHook = ref.current.querySelector("button");

          dropdownHook?.focus();
        }
      };

    useKeydown(hideInternal, { active: visible, keys: "Escape" });

    const labelId = useId({ prefix: "select-label" });

    /**
     * TODO
     * Set (and update) only after the select
     * is open the first time.
     */
    const activeOptionIndex = 0;

    return (
      <div ref={ref} className={cssClass("ui-select", className)}>
        <div className="ui-label" id={labelId}>
          {label}
        </div>
        <ControlledDropdown
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
  }
);

const OptionShape = PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
});

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(OptionShape).isRequired,
  placeholder: PropTypes.string,
  renderHook: PropTypes.func,
};

export default Select;
