import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
const Catalog = lazy(() => import("src/pages/Catalog/Catalog"));
const Home = lazy(() => import("src/pages/Home/Home"));
const Favorites = lazy(() => import("src/pages/Favorites/Favorites"));

function App() {
  return (
    <BrowserRouter basename="/choose_your_camper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
