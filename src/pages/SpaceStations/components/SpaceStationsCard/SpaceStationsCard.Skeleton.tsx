import { Skeleton } from "@/components/atoms/Skeleton";

const CardDescriptionSkeleton = () => (
  <div className="h-40 rounded bg-gray-400" />
);

const CardSkeleton = () => (
  <Skeleton.Container className="border-t-silver grid grid-rows-[300px_auto] gap-y-2 rounded-md border-2 border-gray-400 border-b-gray-500 bg-gray-700">
    <Skeleton.Image />
    <div className="grid gap-2 p-3">
      <Skeleton.Title className="mt-5 w-2/4" />
      <Skeleton.Row.Row1outOf3 />
      <Skeleton.Row.Row1outOf3 />
      <Skeleton.Row.Row1outOf3 />
      <Skeleton.Row.Row1outOf3 />
      <Skeleton.Title className="mt-5" />
      <CardDescriptionSkeleton />
    </div>
  </Skeleton.Container>
);

export const SpaceStationsCardSkeleton = () => (
  <Skeleton.Root>
    <Skeleton.Container className="my-5 mt-0 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Skeleton.Container>
  </Skeleton.Root>
);
