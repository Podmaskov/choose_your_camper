import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/pages/Home/Home";
import Catalog from "src/pages/Catalog/Catalog";
import Favorites from "src/pages/Favorites/Favorites";
import Layout from "src/components/Layout/Layout";

function App() {
  return (
    <BrowserRouter basename="choose_your_camper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
