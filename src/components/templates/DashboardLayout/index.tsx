import { Outlet } from "react-router-dom";

import backgroundImage from "@/assets/background.webp";
import { Suspense } from "react";
import { Menu } from "@/components/molecules";
import { Loading } from "@/components/atoms";

export const DashboardLayout = () => {
  return (
    <div className="h-full w-full bg-background text-text-primary">
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Menu />
      </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
