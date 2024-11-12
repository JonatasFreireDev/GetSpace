import { Title } from "../Title/Title";
import { UnderConstructionSVG } from "./UnderConstruction.svg";

export const UnderConstruction = () => (
  <div className="h-full w-full">
    <div className="flex flex-col items-center justify-center bg-gray-800 p-32">
      <UnderConstructionSVG width={400} />
      <Title text="This page is under contruction !" />
    </div>
  </div>
);
