import { useEffect, useState } from "react";
import { useDebouceProps } from "./useDebouce.types";

export default function useDebounce({ value, delay = 500 }: useDebouceProps) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}
