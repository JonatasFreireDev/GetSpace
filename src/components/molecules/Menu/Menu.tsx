import { memo, useMemo } from "react";

export const Menu = memo(
  () => {
    const paths = useMemo(
      () => [
        {
          label: "home",
          path: "/",
        },
        {
          label: "Launches",
          path: "/launches",
        },
        {
          label: "Events",
          path: "/events",
        },
        {
          label: "Space Stations",
          path: "/space-stations",
        },
        {
          label: "Astronauts",
          path: "/astronauts",
        },
      ],
      [],
    );

    return (
      <div className="flex flex-col justify-center bg-background bg-opacity-60 sm:fixed sm:w-full sm:flex-row">
        {paths.map(({ label, path }) => (
          <a
            key={path}
            href={path}
            className="relative mx-2 mb-2 flex flex-row border-0 border-b-2 border-transparent px-5 py-4 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-500 after:content-[''] hover:after:left-0 hover:after:w-full"
          >
            {String(label).toUpperCase()}
          </a>
        ))}
      </div>
    );
  },
  () => true,
);

Menu.displayName = "Menu";
