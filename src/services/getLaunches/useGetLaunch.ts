import { useQuery } from "@tanstack/react-query";
import { launchService } from "./getLaunches.service";
import { LaunchResponse } from "./getLaunches.types";

export const useGetLaunches = () => {
  const query = useQuery<LaunchResponse>({
    queryKey: ["getLaunches"],
    queryFn: launchService,
    staleTime: Infinity,
  });

  return { ...query };
};
