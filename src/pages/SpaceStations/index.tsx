import { useCallback, useEffect } from "react";
import { KeyValue, Title } from "@/components/atoms";
import { useGetSpaceStations } from "@/services";
import { useSpaceStationsFilter } from "@/store";
import { Filter } from "@/components/organisms";
import { FilterDefinitions } from "@/components/organisms/Filter/Filter.types";

export const SpaceStations = () => {
  const { data, refetch } = useGetSpaceStations();
  const { setStatus, setType, spaceStationFilterData } =
    useSpaceStationsFilter();

  useEffect(() => {
    refetch();
  }, [spaceStationFilterData, refetch]);

  const onChangeStatus = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStatus({ value: Number(e.target.value) });
    },
    [setStatus]
  );

  const onChangeType = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setType({ value: Number(e.target.value) });
    },
    [setType]
  );

  const teste: FilterDefinitions[] = [
    {
      name: "status",
      label: "Status",
      handleChange: (e) => onChangeStatus(e),
      field: {
        type: "select",
        options: [
          { label: "Selecione o status", value: undefined },
          { label: "Ativa", value: 1 },
          { label: "Desorbitada", value: 2 },
          { label: "Descomissionada", value: 3 },
        ],
      },
    },
    {
      name: "type",
      label: "Type",
      handleChange: (e) => onChangeType(e),
      field: {
        type: "select",
        options: [
          { label: "Selecione o tipo", value: undefined },
          { label: "Comercial", value: 1 },
          { label: "Governo", value: 2 },
        ],
      },
    },
  ];

  return (
    <div className="grid grid-cols-[300px_auto]">
      <section className="px-5">
        <Filter definitions={teste} />
      </section>
      <section className="px-5">
        <Title text="Space Stations" />
        <div>
          <p>Search</p>
        </div>
        <div className="grid my-5 grid-cols-3 gap-8">
          {data?.results.map((spaceStations) => (
            <div className="grid grid-rows-[300px_auto] bg-slate-900 rounded-md gap-y-2 border-2 border-gray-400 border-t-silver border-b-gray-500 hover:bg-gray-800 hover:border-gray-600 transition duration-300">
              <div className="flex justify-center align-middle">
                <img
                  className="h-auto max-h-full w-full bg-slate-500 object-cover rounded-t-md"
                  src={spaceStations.image.image_url}
                  alt={spaceStations.image.name}
                />
              </div>
              <div className="p-3">
                <div>{spaceStations.name}</div>
                <Title text={spaceStations.name} />
                <KeyValue text="Status" value={spaceStations.status.name} />
                <KeyValue text="Type" value={spaceStations.type.name} />
                <KeyValue text="Founded" value={spaceStations.founded} />
                <KeyValue text="Deorbited" value={spaceStations.deorbited} />
                <KeyValue text="Orbit" value={spaceStations.orbit} />
                <div>{spaceStations.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpaceStations;
