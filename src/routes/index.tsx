import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/new"
        element={<div style={{ flex: 1, height: "80vh" }}></div>}
      />
      <Route
        path="/movies"
        element={<div style={{ flex: 1, height: "80vh" }}></div>}
      />
      <Route
        path="/series"
        element={<div style={{ flex: 1, height: "80vh" }}></div>}
      />
      <Route
        path="/cartoons"
        element={<div style={{ flex: 1, height: "80vh" }}></div>}
      />
    </Routes>
  );
};

export default AppRouter;
