import { SkeletonProps } from "../../Skeleton.types";

export const Title = ({ className }: SkeletonProps) => (
  <div className={`h-8 w-1/3 rounded bg-gray-400 ${className}`} />
);

Title.displayName = "SkeletonTitle";
