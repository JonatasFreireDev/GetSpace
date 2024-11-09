import { Title } from "@/components/atoms";
import { Filter } from "@/components/molecules";
import { Search } from "@/components/organisms";
import { FilterLayoutProps } from "./FilterLayout.types";

export const FilterLayout = ({
  props: { definitions, title },
  children,
}: FilterLayoutProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-[300px_auto] ">
      <section className="px-5">
        <Filter definitions={definitions} />
      </section>
      <section className="px-5">
        <Title text={title} />
        <Search />
        <div className="grid my-5  gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {children}
        </div>
      </section>
    </div>
  );
};
