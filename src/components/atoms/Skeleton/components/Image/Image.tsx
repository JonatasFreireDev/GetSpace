import { SkeletonProps } from "../../Skeleton.types";

export const Image = ({ className }: SkeletonProps) => (
  <div
    className={`flex h-full w-full rounded-t bg-gray-400 p-5 ${className}`}
  />
);

Image.displayName = "SkeletonImage";
