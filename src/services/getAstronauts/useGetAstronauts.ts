import { useQuery } from "@tanstack/react-query";
import { astronautsService } from "./getAstronauts.service";
import { AstronautsResponse } from "./getAstronauts.types";

export const useGetAstronauts = () => {
  const query = useQuery<AstronautsResponse>({
    queryKey: ["getAstronauts"],
    queryFn: astronautsService,
    staleTime: Infinity,
  });

  return { ...query };
};
