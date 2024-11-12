import { memo } from "react";
import { Select, Title } from "@/components/atoms";
import { FilterProps } from "./Filter.types";

export const Filter = memo(
  ({ definitions }: FilterProps) => {
    return (
      <>
        <Title text="Filter" />
        {definitions.map((definition) => (
          <div
            key={definition.name}
            className="my-2 flex flex-row items-center justify-between"
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
  () => true,
);
