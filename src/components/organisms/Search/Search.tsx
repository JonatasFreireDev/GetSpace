import { useCallback } from "react";
import { useSearchStore } from "./store";
import { debounceFunction } from "@/utils/functions";

export const Search = () => {
  const { setSearch } = useSearchStore();

  const handleSearchChange = useCallback(
    debounceFunction((value: string) => {
      setSearch(value);
    }, 500),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  return (
    <div className="flex items-center rounded-md border border-gray-300 p-2 text-white">
      <input
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Search for..."
        className="flex-grow bg-transparent px-2 outline-none"
      />
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m2.1-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        ></path>
      </svg>
    </div>
  );
};
