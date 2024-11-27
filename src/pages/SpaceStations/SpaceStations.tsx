import { useCallback, useEffect } from "react";
import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";
import { useGetSpaceStations } from "@/services";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { LoadingAndEmptyWrapper } from "@/components/molecules";
import { SpaceStationsCardSkeleton } from "./components/SpaceStationsCard/SpaceStationsCard.Skeleton";
import { useSpaceStationsStore } from "@/store";
import { Pagination } from "./components/Pagination/Pagination";
import { useModal } from "@/components/organisms/Modal/store";

export const SpaceStations = () => {
  const { data, refetch, isLoading } = useGetSpaceStations();
  const {
    filterData,
    paginationData: { offset },
  } = useSpaceStationsStore();

  useEffect(() => {
    refetch();
  }, [filterData, offset, refetch]);

  const filterFunc = useCallback(
    (search: string) =>
      data?.results.filter(
        (station) =>
          station.name.toLowerCase().includes(search) ||
          station.founded.toLowerCase().includes(search),
      ),
    [data?.results],
  );

  const { mapedData } = useFilterResponse<SpaceStation>(
    data?.results,
    filterFunc,
  );

  const PaginationWrapper = useCallback(
    () => <Pagination totalCount={data?.count} />,
    [data?.count],
  );

  const { openModal } = useModal();

  const handleModal = () => {
    openModal({
      id: "SpaceStation",
      content: (
        <div className="bg-slate-600">
          <div>content</div>
          <button
            onClick={() => {
              openModal({
                id: "SpaceStation2",
                content: (
                  <div>
                    novo modal{" "}
                    <button
                      onClick={() => {
                        openModal({
                          id: "spaceStation3",
                          content: <div>desisto</div>,
                          type: "default",
                          isDialog: true,
                        });
                      }}
                    >
                      nooovo{" "}
                    </button>
                  </div>
                ),
                type: "side",
                position: "right",
              });
            }}
          >
            novo modal
          </button>
        </div>
      ),
      type: "bottom",
      size: "md",
      isDialog: true,
    });
  };

  return (
    <>
      <button onClick={handleModal}>Modal</button>
      <LoadingAndEmptyWrapper
        isData={mapedData}
        isLoading={isLoading}
        LoadingSkeleton={<SpaceStationsCardSkeleton />}
      >
        <PaginationWrapper />
        <div className="my-5 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {mapedData?.map((spaceStation) => (
            <SpaceStationsCard
              spaceStation={spaceStation}
              key={spaceStation.id}
            />
          ))}
        </div>
        <PaginationWrapper />
      </LoadingAndEmptyWrapper>
    </>
  );
};
