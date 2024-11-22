import { memo } from "react";
import { TitleProps } from "./Title.types";

export const Title: React.FC<TitleProps> = memo(({ text }) => (
  <div>
    <h2 className="mt-5 text-2xl font-semibold">{text}</h2>
  </div>
));
