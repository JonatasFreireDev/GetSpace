import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "@/components/templates/Layout";

const Home = lazy(() => import("../pages/Home"));
const SpaceStations = lazy(() => import("../pages/SpaceStations"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="launches" element={<Home />} />
      <Route path="events" element={<Home />} />
      <Route path="space-stations" element={<SpaceStations />} />
      <Route path="astronauts" element={<Home />} />
    </Route>
  )
);
