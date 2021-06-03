import React from "react";

type Option = {
  id : string;
  label : string;
  value ?: string | number;
};

export type SelectProps = {
  className ?: string;
  disabled ?: boolean;
  label : string;
  options : Option[];
  placeholder ?: string;
  renderHook ?: () => React.ReactNode;
};

declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;

export default Select;
