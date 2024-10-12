import { useQuery } from "@tanstack/react-query";
import { eventsService } from "./getEvents.service";
import { EventResponse } from "./getEvents.types";

export const useGetEvents = () => {
  const query = useQuery<EventResponse>({
    queryKey: ["getEvents"],
    queryFn: eventsService,
    staleTime: Infinity,
  });

  return { ...query };
};
