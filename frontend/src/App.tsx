import { Routes, Route } from "react-router";

import LoginView from "./pages/LoginView";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route index element={<LoginView />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}
