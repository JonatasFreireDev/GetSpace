import { MotionProps } from "framer-motion";
import { getModalAnimationProps } from "./getModalAnimation.types";

export function getModalAnimation({
  type,
  position,
}: getModalAnimationProps): MotionProps {
  switch (type) {
    case "default":
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.3 },
      };

    case "bottom":
      return {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { duration: 0.3, ease: "easeOut" },
      };

    case "side":
      if (position === "right") {
        return {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { duration: 0.3, ease: "easeOut" },
        };
      }
      if (position === "left") {
        return {
          initial: { x: "-100%" },
          animate: { x: 0 },
          exit: { x: "-100%" },
          transition: { duration: 0.3, ease: "easeOut" },
        };
      }
      throw new Error("Position is required for side modals.");

    default:
      throw new Error("Invalid modal type.");
  }
}
