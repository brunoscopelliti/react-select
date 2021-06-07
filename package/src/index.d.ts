import React from "react";

export type Option = {
  id : string;
  label : string;
  value ?: string | number;
};

export type SelectProps = {
  className ?: string;
  disabled ?: boolean;
  label : string;
  options : Option[];
  onChange ?: (option : Option, optionIndex : number) => void;
  placeholder ?: string;
  renderHook ?: () => React.ReactNode;
  value ?: string;
};

declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;

export default Select;

declare const StatefulSelect: React.FC<SelectProps>;

export { StatefulSelect };
