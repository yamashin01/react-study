import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "/user-management",
    children: <UserManagement />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
];
