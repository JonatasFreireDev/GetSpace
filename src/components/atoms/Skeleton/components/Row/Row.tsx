import { SkeletonProps } from "../../Skeleton.types";

export const Row = ({ className }: SkeletonProps) => (
  <div className="mb-2 flex w-full flex-row items-center">
    <div className={`h-9 w-full rounded bg-gray-400 ${className}`} />
  </div>
);

Row.displayName = "SkeletonRow";

export const Row13outOf5 = () => (
  <div className="flex w-full flex-row items-center">
    <div className="h-5 w-1/5 rounded bg-gray-400" />
    <div className="w-1/5" />
    <div className="h-8 w-3/5 rounded bg-gray-400" />
  </div>
);

Row13outOf5.displayName = "SkeletonRow13outOf5";

export const Row1outOf3 = () => (
  <div className="flex w-full">
    <div className="h-5 w-1/3 rounded bg-gray-400" />
    <div className="h-5 w-1/3" />
    <div className="h-5 w-1/3 rounded bg-gray-400" />
  </div>
);

Row1outOf3.displayName = "SkeletonRow1outOf3";
