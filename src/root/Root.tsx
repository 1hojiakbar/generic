import React from "react";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Generics from "../view/Generics";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((value) => {
            const Element = value.element;
            return (
              <Route
                key={value.id}
                path={value?.path}
                element={Element ? <Element /> : <div>No Element</div>}
              />
            );
          })}
        </Route>

        <Route path="/components/overview" element={<Generics />} />
        <Route path="/" element={<Navigate to="/components/overview" />} />
        <Route
          path="/components/"
          element={<Navigate to="/components/overview" />}
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
