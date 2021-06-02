import React from "react";

type Option = {
  id : string;
  label : string;
  value ?: string | number;
};

export type SelectProps = {
  disabled ?: boolean;
  label : string;
  options : Option[];
  placeholder ?: string;
  renderHook ?: () => React.ReactNode;
};

declare const Select: React.FC<SelectProps>;

export default Select;
