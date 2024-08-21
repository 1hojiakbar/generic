import React from "react";
import sidebar from "../utils/sidebar";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {sidebar.map((item) => {
          const Element = item.element as React.ElementType;

          if (item.sidebar) {
            return (
              <Route key={item.id} element={<Sidebar />}>
                <Route
                  path={item.path}
                  element={Element ? <Element /> : <div>No Element</div>}
                />
              </Route>
            );
          } else {
            return (
              <Route key={item.id} element={<Navbar />}>
                <Route
                  key={item.id}
                  path={item.path}
                  element={Element ? <Element /> : <div>No Element</div>}
                />
              </Route>
            );
          }
        })}

        <Route path="/" element={<Navigate to="/components/overview" />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
