import React from "react";
import { useLocation } from "react-router-dom";

const Generics: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <h1>{location.pathname} coming soon...</h1>
    </div>
  );
};

export default Generics;
