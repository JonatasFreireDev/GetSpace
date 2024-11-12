import { Title } from "@/components/atoms";
import { Filter, FilterSkeleton } from "@/components/molecules";
import { Search, SearchSkeleton } from "@/components/organisms";
import { FilterLayoutProps } from "./FilterLayout.types";
import { Suspense } from "react";

export const FilterLayout = ({
  props: { definitions, title },
  children,
}: FilterLayoutProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-[300px_auto]">
      <section className="px-5">
        <Suspense fallback={<FilterSkeleton />}>
          <Filter definitions={definitions} />
        </Suspense>
      </section>
      <section className="grid gap-y-5 px-5">
        <Suspense fallback={<SearchSkeleton />}>
          <Title text={title} />
          <Search />
        </Suspense>
        {children}
      </section>
    </div>
  );
};
