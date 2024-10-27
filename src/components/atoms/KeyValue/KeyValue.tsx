import { memo } from "react";
import { KeyValueProps } from "./KeyValue.types";

export const KeyValue: React.FC<KeyValueProps> = memo(
  ({ text, value = "" }) => (
    <div className="flex flex-row justify-between hover:bg-slate-100">
      <div>{text}</div>
      <div className="">{value}</div>
    </div>
  )
);
