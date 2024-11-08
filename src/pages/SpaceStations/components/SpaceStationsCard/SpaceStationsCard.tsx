import { KeyValue, Title } from "@/components/atoms";
import { SpaceStationsCardProps } from "./SpaceStationsCard.types";

export const SpaceStationsCard = ({ spaceStation }: SpaceStationsCardProps) => (
  <div className="grid grid-rows-[300px_auto] bg-slate-900 rounded-md gap-y-2 border-2 border-gray-400 border-t-silver border-b-gray-500 hover:bg-gray-800 hover:border-gray-600 transition duration-300">
    <div className="flex justify-center align-middle">
      <img
        className="h-auto max-h-full w-full bg-slate-500 object-cover rounded-t-md"
        src={spaceStation.image.image_url}
        alt={spaceStation.image.name}
      />
    </div>
    <div className="p-3">
      <Title text={spaceStation.name} />
      <KeyValue text="Status" value={spaceStation.status.name} />
      <KeyValue text="Type" value={spaceStation.type.name} />
      <KeyValue text="Founded" value={spaceStation.founded} />
      <KeyValue text="Deorbited" value={spaceStation.deorbited} />
      <KeyValue text="Orbit" value={spaceStation.orbit} />
      <p className="mt-5">Description: </p>
      <div>{spaceStation.description}</div>
    </div>
  </div>
);
