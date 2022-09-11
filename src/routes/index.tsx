import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<></>} />
      <Route path="/movies" element={<></>} />
      <Route path="/series" element={<></>} />
      <Route path="/cartoons" element={<></>} />
    </Routes>
  );
};

export default AppRouter;
