import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Login, Signup, Home } from "../pages";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
