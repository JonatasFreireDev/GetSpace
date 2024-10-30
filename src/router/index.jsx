import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "@/components/templates/Layout";
import { DashboardLayout } from "@/components/templates/DashboardLayout";

const Home = lazy(() => import("../pages/Home"));
const SpaceStations = lazy(() => import("../pages/SpaceStations"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="launches" element={<Home />} />
        <Route path="events" element={<Home />} />
        <Route path="space-stations" element={<SpaceStations />} />
        <Route path="astronauts" element={<Home />} />
      </Route>
    </Route>
  )
);
