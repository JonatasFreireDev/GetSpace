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
      <section className="grid gap-y-5 px-5">
        <Title text={title} />
        <Search />
        {children}
      </section>
    </div>
  );
};
