import { Skeleton } from "@/components/atoms/Skeleton";

export const SearchSkeleton = () => (
  <Skeleton.Root>
    <Skeleton.Container>
      <Skeleton.Title />
      <Skeleton.Row />
    </Skeleton.Container>
  </Skeleton.Root>
);
