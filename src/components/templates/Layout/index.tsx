import { Outlet } from "react-router-dom";

import * as S from "./styles";
import backgroundImage from "@/assets/background.webp";
import { Suspense } from "react";

export const Layout = () => {
  const paths = [
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
  ];

  return (
    <div className="bg-background text-text-primary w-full h-full">
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <S.NavBar className="fixed w-full flex flex-row justify-center bg-background bg-opacity-35">
          {paths.map(({ label, path }) => {
            return (
              <a
                href={path}
                className="flex flex-row px-5 py-4 mx-2 mb-2 relative border-0 border-b-2 border-transparent after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
              >
                {String(label).toUpperCase()}
              </a>
            );
          })}
        </S.NavBar>
      </div>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
