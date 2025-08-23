import { createBrowserRouter } from "react-router";
import { Basics } from "../pages/Basics";
import { Professionals } from "../pages/Professionals";
import { Dashboard } from "../pages/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/Basics", element: <Basics /> },
  { path: "/Professionals", element: <Professionals /> },
]);
