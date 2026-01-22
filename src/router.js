import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import Terms from "./Pages/Terms";
import Interview from "./Pages/Interview";
import Development from "./Pages/Development";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/interview-prep" element={<Interview />} />
        <Route path="/development" element={<Development />} />
      </Route>
    </Routes>
  );
}