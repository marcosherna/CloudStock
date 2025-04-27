import { Routes, Route } from "react-router";

import LoginView from "./pages/LoginView";
import Dashboard from "./pages/Dashboard";

// import CategoryView from "./pages/Administration/Catalogs/CategoryView";
import CatalogsView from "./pages/Administration/CatalogsView";

export default function App() {
  return (
    <Routes>
      <Route index element={<LoginView />}></Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="administration">
          <Route path="catalogs" element={<CatalogsView />}>
            {/* <Route path="categories" element={<CategoryView/>} /> */}
            {/* <Route path="products" element={<div>this is a product view</div>} /> */}
          </Route>
          {/* <Route path="roles" element={<div>this is a roles view</div>} /> */} 
        </Route>

      </Route>

    </Routes>
  );
}
