import { useMemo } from "react";
import { Outlet } from "react-router-dom";

import backgroundImage from "@/assets/background.webp";
import { Menu } from "@/components/molecules";

export const Layout = () => {
  const memoImage = useMemo(() => `url(${backgroundImage})`, []);

  return (
    <div className="h-full w-full bg-background text-text-primary">
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: memoImage }}
      >
        <Menu />
      </div>
      <Outlet />
    </div>
  );
};
