export interface FilterProps {
  definitions: Array<FilterDefinitions>;
}

export interface FilterDefinitions {
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  field: {
    type: FieldType;
    options: Array<{
      label: string;
      value: string | number | boolean | undefined;
    }>;
  };
}

export type FieldType = "select";
