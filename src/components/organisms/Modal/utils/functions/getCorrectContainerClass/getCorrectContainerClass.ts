import { getCorrectContainerClassProps } from "./getCorrectContainerClass.types";

const sizeClasses = {
  default: {
    sm: "w-1/3",
    md: "w-1/2",
    lg: "w-2/3",
  },
  side: {
    sm: "w-1/3",
    md: "w-1/2",
    lg: "w-2/3",
  },
  bottom: {
    sm: "h-1/3",
    md: "h-2/5",
    lg: "h-1/2",
  },
};

export function getCorrectContainerClass({
  type,
  size = "md",
  position,
}: getCorrectContainerClassProps) {
  let containerClasses = "";

  const sizeClass = sizeClasses[type]?.[size];

  switch (type) {
    case "side":
      containerClasses = `grid grid-rows-[auto_1fr_auto] fixed top-0 h-full  ${
        position === "right" ? "right-0 rounded-l-lg" : "left-0 rounded-r-lg"
      } ${sizeClass}`;
      break;

    case "bottom":
      containerClasses = `grid grid-rows-[auto_1fr_auto] fixed bottom-0 left-0 w-full rounded-t-xl ${sizeClass}`;
      break;

    default:
      containerClasses = `grid grid-rows-[auto_1fr_auto] rounded-xl max-h-[80%] ${sizeClass}`;
      break;
  }

  return containerClasses;
}
