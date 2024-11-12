import { ReactNode } from "react";

export interface LoadingAndEmptyWrapperProps {
  children: ReactNode;
  isLoading: boolean;
  LoadingSkeleton?: ReactNode;
  isData: any;
}
