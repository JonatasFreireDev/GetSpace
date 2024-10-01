import { useQuery } from "@tanstack/react-query";
import { launchService } from "./launchService";
import { LaunchResponse } from "./getLaunches.types";

export const useGetLaunches = () => {
  const query = useQuery<LaunchResponse>({
    queryKey: ["getLaunches"],
    queryFn: launchService,
  });

  return { ...query };
};
