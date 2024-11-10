import { Title } from "../Title/Title";
import { LoadingSVG } from "./Loading.svg";

export const Loading = () => (
  <div className="w-full h-full">
    <div className="flex flex-col justify-center items-center">
      <LoadingSVG width={250} />
      <Title text="Loading..." />
    </div>
  </div>
);
