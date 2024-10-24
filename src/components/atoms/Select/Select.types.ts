import { Children } from "@/utils/types";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: Children;
}
