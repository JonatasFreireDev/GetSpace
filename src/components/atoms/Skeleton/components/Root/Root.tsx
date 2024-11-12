import { SkeletonProps } from "../../Skeleton.types";

export const Root = ({ className, children }: SkeletonProps) => (
  <div className={`animate-pulse py-4 ${className}`}>{children}</div>
);

Root.displayName = "SkeletonRoot";
