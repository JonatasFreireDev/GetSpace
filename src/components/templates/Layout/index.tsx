import { Outlet } from "react-router-dom";

import backgroundImage from "@/assets/background.webp";
import { Suspense } from "react";
import { Menu } from "@/components/molecules";

export const Layout = () => {
  return (
    <div className="bg-background text-text-primary w-full h-full">
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Menu />
      </div>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
