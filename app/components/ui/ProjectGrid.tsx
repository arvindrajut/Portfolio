import { HoverEffect } from "../ui/CardHoverEffect";
import { projects } from "../../data/index";

export function CardHoverEffectDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      <HoverEffect items={projects} />
    </div>
  );
}
