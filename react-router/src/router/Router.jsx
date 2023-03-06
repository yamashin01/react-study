import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {page1Routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={`page1${route.path}`}
            element={route.children}
          />
        );
      })}
      {Page2Routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={`page2${route.path}`}
            element={route.children}
          />
        );
      })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
