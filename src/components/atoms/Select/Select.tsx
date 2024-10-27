import { memo } from "react";
import { SelectProps } from "./Select.types";

export const Select = memo(({ children, ...props }: SelectProps) => (
  <select
    className="block appearance-none w-8/12 bg-white border border-gray-300 hover:border-blue-500 px-4 py-1 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
    {...props}
  >
    {children}
  </select>
));
