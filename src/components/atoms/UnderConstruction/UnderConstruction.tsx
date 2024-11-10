import { Title } from "../Title/Title";
import { UnderConstructionSVG } from "./UnderConstruction.svg";

export const UnderConstruction = () => (
  <div className="w-full h-full">
    <div className="flex flex-col justify-center items-center bg-gray-800 p-32">
      <UnderConstructionSVG width={500} />
      <Title text="This page is under contruction !" />
    </div>
  </div>
);
