import { Select, Title } from "@/components/atoms";
import { FilterProps } from "./Filter.types";

export const Filter = ({ definitions }: FilterProps) => {
  return (
    <>
      <Title text="Filter" />
      {definitions.map((definition) => (
        <div className="flex flex-row justify-between my-2 items-center">
          <label for={definition.name}>{definition.label}:</label>
          {definition.field.type === "select" ? (
            <Select
              name={definition.name}
              id={definition.name}
              onChange={(e) => definition.handleChange(e)}
            >
              {definition.field.options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </Select>
          ) : null}
        </div>
      ))}
    </>
  );
};
