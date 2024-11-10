import { Title } from "../Title/Title";
import { NotFoundSVG } from "./NotFound.svg";

export const NotFound = () => (
  <div className="w-full h-full">
    <div className="flex flex-col justify-center items-center">
      <NotFoundSVG width={350} />
      <Title text="Not Found !" />
    </div>
  </div>
);
