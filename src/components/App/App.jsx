import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import AppBar from "../AppBar/AppBar";
import css from "./App.module.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const ProductDetails = lazy(() =>
  import("../../pages/ProductDetails/ProductDetails")
);
const Products = lazy(() => import("../../pages/Products/Products"));
const Mission = lazy(() => import("../Mission/Mission"));
const Team = lazy(() => import("../Team/Team"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
