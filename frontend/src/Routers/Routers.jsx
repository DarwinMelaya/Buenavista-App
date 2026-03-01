import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Login,
  Signup,
  Home,
  Services,
  News,
  Account,
  BusinessPermits,
} from "../pages";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/account" element={<Account />} />
        <Route path="/news" element={<News />} />

        {/* services */}
        <Route
          path="/services/business-permits"
          element={<BusinessPermits />}
        />
      </Routes>
    </Router>
  );
};
