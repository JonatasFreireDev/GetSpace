import { Loading, NotFound } from "@/components/atoms";
import { LoadingAndEmptyWrapperProps } from "./LoadingAndEmptyWrapper.types";

export const LoadingAndEmptyWrapper = ({
  isData,
  isLoading,
  LoadingSkeleton,
  children,
}: LoadingAndEmptyWrapperProps) => {
  if (isLoading) return LoadingSkeleton ?? <Loading />;

  const isEmptyData =
    (Array.isArray(isData) && isData.length === 0) ||
    (typeof isData === "object" &&
      isData !== null &&
      Object.keys(isData).length === 0) ||
    !isData;

  if (isEmptyData) return <NotFound />;

  return <>{children}</>;
};
