import { Select, Title } from "@/components/atoms";
import { FilterProps } from "./Filter.types";
import { memo } from "react";

export const Filter = memo(
  ({ definitions }: FilterProps) => {
    return (
      <>
        <Title text="Filter" />
        {definitions.map((definition) => (
          <div
            key={definition.name}
            className="flex flex-row justify-between my-2 items-center"
          >
            <label htmlFor={definition.name}>{definition.label}:</label>
            {definition.field.type === "select" ? (
              <Select
                name={definition.name}
                id={definition.name}
                onChange={(e) => definition.handleChange(e)}
              >
                {definition.field.options.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            ) : null}
          </div>
        ))}
      </>
    );
  },
  () => false
);
