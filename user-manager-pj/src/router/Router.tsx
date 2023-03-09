import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {HomeRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={`home${route.path}`}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        );
      })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
