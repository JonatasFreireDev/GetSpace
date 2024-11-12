import { SkeletonProps } from "../../Skeleton.types";

export const Container = ({ className, children }: SkeletonProps) => (
  <div className={`mt-5 grid gap-3 ${className}`}>{children}</div>
);

Container.displayName = "SkeletonContainer";
