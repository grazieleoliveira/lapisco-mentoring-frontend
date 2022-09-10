import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/new" element={<></>} />
        <Route path="/movies" element={<></>} />
        <Route path="/series" element={<></>} />
        <Route path="/cartoons" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};