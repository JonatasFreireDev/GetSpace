import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "@/components/templates/Layout";
import { DashboardLayout } from "@/components/templates/DashboardLayout";
import { UnderConstruction } from "@/components/atoms";

const Home = lazy(() => import("../pages/Home"));
const SpaceStations = lazy(() => import("../pages/SpaceStations/SpaceStations.wrapper"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<UnderConstruction />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="launches" element={<UnderConstruction />} />
        <Route path="events" element={<UnderConstruction />} />
        <Route path="space-stations" element={<SpaceStations />} />
        <Route path="astronauts" element={<UnderConstruction />} />
      </Route>
    </Route>
  )
);
