import { FilterDefinitions } from "@/components/molecules/Filter/Filter.types";

export interface FilterLayoutProps {
  children: React.ReactNode;
  props: {
    title: string;
    definitions: FilterDefinitions[];
  };
}
