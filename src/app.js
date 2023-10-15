import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Backdrop from "./components/backdrop";
import Footer from "./components/footer";
import TopBar from "./components/top-bar";
import Home from "./pages/home";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import More from "./pages/more";
import "./styles/app.scss";

function App() {
  const location = useLocation();

  return (
    <>
      <Backdrop />
      <TopBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
