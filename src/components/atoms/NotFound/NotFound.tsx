import { memo } from "react";
import { Title } from "../Title/Title";
import { NotFoundSVG } from "./NotFound.svg";

export const NotFound = memo(() => (
  <div className="h-full w-full py-10">
    <div className="flex flex-col items-center justify-center">
      <NotFoundSVG width={350} />
      <Title text="Not Found !" />
    </div>
  </div>
));
