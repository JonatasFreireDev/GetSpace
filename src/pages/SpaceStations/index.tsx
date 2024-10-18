import { useGetSpaceStations } from "@/services";
import { useEffect } from "react";

export const SpaceStations = () => {
  const { data, refetch } = useGetSpaceStations();

  useEffect(() => {
    refetch({});
  }, []);

  return (
    <div className="grid grid-cols-[300px_auto]">
      <section>Filter</section>
      <section>
        <div>
          <p>Space Stations</p>
        </div>
        <div>
          <p>Search</p>
        </div>
        <div className="grid p-5 grid-cols-3 gap-8">
          {data?.results.map((spaceStations) => (
            <div className="grid grid-rows-[300px_auto] bg-slate-900 rounded-md gap-y-2 border-2 border-gray-400 border-t-silver border-b-gray-500 hover:bg-gray-800 hover:border-gray-600 transition duration-300">
              <div className="flex justify-center align-middle">
                <img
                  className="h-auto max-h-full w-full bg-slate-500 object-cover  rounded-t-md"
                  src={spaceStations.image.image_url}
                  alt={spaceStations.image.name}
                />
              </div>
              <div className="grid gap-2 p-3 ">
                <div>{spaceStations.name}</div>
                <div>{spaceStations.status.name}</div>
                <div>{spaceStations.type.name}</div>
                <div>{spaceStations.founded}</div>
                <div>{spaceStations.deorbited}</div>
                <div>{spaceStations.orbit}</div>
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
