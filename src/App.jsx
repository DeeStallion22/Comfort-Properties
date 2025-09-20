import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Buy from "./pages/Buy.jsx";
import Rent from "./pages/Rent.jsx";
import Shortlets from "./pages/Shortlets.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";
import PropertyDetails from "./pages/Detail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageWrapper from "./components/Pagewrapper.jsx"; 


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/Buy" element={<PageWrapper><Buy /></PageWrapper>} />
        <Route path="/Rent" element={<PageWrapper><Rent /></PageWrapper>} />
        <Route path="/Shortlets" element={<PageWrapper><Shortlets /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/Services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/property/:id" element={<PageWrapper><PropertyDetails /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
