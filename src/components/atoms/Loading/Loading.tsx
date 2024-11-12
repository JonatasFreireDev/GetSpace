import { memo } from "react";
import { Title } from "../Title/Title";
import { LoadingSVG } from "./Loading.svg";

export const Loading = memo(() => (
  <div className="h-full w-full py-10">
    <div className="flex flex-col items-center justify-center">
      <LoadingSVG width={250} />
      <Title text="Loading..." />
    </div>
  </div>
));
