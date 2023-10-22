import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import Backdrop from "./components/backdrop";
import Footer from "./components/footer";
import TopBar from "./components/top-bar";
import Transition from "./components/transition";
import Cursor from "./components/cursor";
import Home from "./pages/home";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import { lightModeAtom } from "./state";
import "./styles/app.scss";

function App() {
  const location = useLocation();
  const [lightMode] = useAtom(lightModeAtom);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }

    return () => document.body.classList.remove("light");
  }, [lightMode]);

  return (
    <>
      <Cursor />
      <Backdrop />
      <TopBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Transition />
      <Footer />
    </>
  );
}

export default App;
