import { Skeleton } from "@/components/atoms/Skeleton";

export const FilterSkeleton = () => (
  <Skeleton.Root>
    <Skeleton.Container className="gap-2">
      <Skeleton.Title />
      <Skeleton.Row.Row13outOf5 />
      <Skeleton.Row.Row13outOf5 />
      <Skeleton.Row.Row13outOf5 />
    </Skeleton.Container>
  </Skeleton.Root>
);
