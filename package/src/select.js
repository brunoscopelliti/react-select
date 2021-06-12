import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import cssClass from "@bscop/css-class";
import { ControlledDropdown } from "@bscop/react-dropdown";

import useBool from "@bscop/use-bool";
import useForwardRef from "@bscop/use-forward-ref";
import useKeydown from "@bscop/use-keydown";
import useId from "@bscop/use-id";

import useScrollSelectedIntoView from "./hooks/use-scroll-selected-into-view";

/**
 * @name focusButton
 * @param {HTMLButtonElement} button
 */
const focusButton =
  (button) => {
    /* istanbul ignore else */
    if (button) {
      button.focus();
    }
  };

/**
 * @name findOptionIndex
 * @param {import("./index").Option[]} options
 * @param {any} value
 * @returns {number}
 */
const findOptionIndex =
  (options, value) => {
    return value == null
      ? -1
      : options.findIndex(
        (option) => (option.value || option.id) === value
      );
  };

const rxAlphaNumericChar = /^[a-z0-9]$/i;

/**
 * @name findOptionIndexByLabel
 * @param {import("./index").Option[]} options
 * @param {number} startingIndex
 * @param {string} query
 * @returns {number}
 */
const findOptionIndexByLabel =
  (options, startingIndex, query) => {
    const queryRx = new RegExp("^" + query, "i");

    let currentIndex = startingIndex;

    do {
      currentIndex = currentIndex + 1 === options.length
        ? 0
        : currentIndex + 1;

      if (queryRx.test(options[currentIndex].label)) {
        return currentIndex;
      }
    } while (currentIndex !== startingIndex);

    return 0;
  };

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
      onChange,
      placeholder,
      renderHook = (activeOption) => {
        return activeOption?.label || placeholder || options[0].label;
      },
      renderOption = (option) => {
        return option.label;
      },
      scrollable,
      value,
      ...dropdownProps
    } = props;

    const ref = useForwardRef(maybeRef);

    const instanceId = useId({ prefix: "select" });

    const formatOptionId =
      (option) => {
        return `${instanceId}-${option.id}`;
      };

    const labelId = instanceId + "-label";

    const initiallyActiveOptionIndex = findOptionIndex(options, value);

    const [activeOptionIndex, setActiveOptionIndex] = useState(
      initiallyActiveOptionIndex
    );

    useEffect(
      () => {
        setActiveOptionIndex(
          findOptionIndex(options, value)
        );
      },
      [options, value]
    );

    const [visible, show, hide] = useBool(false);

    const showAndInitActiveOption =
      () => {
        if (activeOptionIndex === -1) {
          setActiveOptionIndex(0);
        }

        show();
      };

    const hideAndRestoreFocus =
      () => {
        hide();
        focusButton(
          ref.current?.querySelector("button")
        );
      };

    const onChangeInternal =
      (option, optionIdx) => {
        hideAndRestoreFocus();

        setActiveOptionIndex(optionIdx);

        if (typeof onChange == "function" && (option.value || option.id) !== value) {
          onChange(option, optionIdx);
        }
      };

    const refTime = useRef(null);
    const refQuery = useRef("");

    const selectByQuery =
      () => {
        const query = refQuery.current;

        refQuery.current = "";
        refTime.current = null;

        setActiveOptionIndex(
          findOptionIndexByLabel(options, activeOptionIndex, query)
        );
      };

    const scheduleSelectByChar =
      (char) => {
        if (refTime.current) {
          clearTimeout(refTime.current);
        }

        refQuery.current += char;

        refTime.current = setTimeout(selectByQuery, 250);
      };

    const onKeydown =
      (event) => {
        switch (event.code) {
          case "ArrowDown":
          case "PageDown":
            event.preventDefault();
            // Activate next
            if (activeOptionIndex < options.length - 1) {
              setActiveOptionIndex(activeOptionIndex + 1);
            }
            break;
          case "ArrowUp":
          case "PageUp":
            event.preventDefault();
            // Activate prev
            if (activeOptionIndex > 0) {
              setActiveOptionIndex(activeOptionIndex - 1);
            }
            break;
          case "End":
            event.preventDefault();
            // Activate last
            setActiveOptionIndex(options.length - 1);
            break;
          case "Home":
            event.preventDefault();
            // Activate first
            setActiveOptionIndex(0);
            break;
          case "Enter":
            event.preventDefault();
            // Select active
            onChangeInternal(options[activeOptionIndex], activeOptionIndex);
            break;
          case "Escape":
            event.preventDefault();
            hideAndRestoreFocus();
            break;
          default:
            if (rxAlphaNumericChar.test(event.key)) {
              scheduleSelectByChar(event.key);
            }
            break;
        }
      };

    useKeydown(onKeydown, { active: visible });

    useScrollSelectedIntoView(
      ref.current?.querySelector("[role='listbox']")
    );

    if (options.length === 0) {
      return null;
    }

    return (
      <div ref={ref} className={cssClass("ui-select", className, { "ui-scrollable": scrollable })}>
        <div className="ui-label" id={labelId}>
          {label}
        </div>
        <ControlledDropdown
          {...dropdownProps}
          aria-activedescendant={
            activeOptionIndex === -1
              ? undefined
              : formatOptionId(options[activeOptionIndex])
          }
          aria-labelledby={labelId}
          hide={hide}
          label={
            renderHook(
              options[initiallyActiveOptionIndex], props
            )
          }
          onBlur={hide}
          role="listbox"
          show={showAndInitActiveOption}
          visible={visible}
        >
          {
            options.map(
              (option, i) => {
                return (
                  <div
                    key={option.id}
                    aria-selected={i === activeOptionIndex ? "true" : undefined}
                    id={formatOptionId(option)}
                    onClick={
                      () => {
                        onChangeInternal(option, i);
                      }
                    }
                    onMouseOver={
                      () => {
                        setActiveOptionIndex(i);
                      }
                    }
                    role="option"
                  >
                    {renderOption(option)}
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
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  renderHook: PropTypes.func,
  renderOption: PropTypes.func,
  scrollable: PropTypes.bool,
  value: PropTypes.string,
};

export default Select;
