
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Buy from './pages/Buy.jsx'
import Rent from './pages/Rent.jsx'
import Shortlets from './pages/Shortlets.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Footer from './components/Footer.jsx'
import PropertyDetails from './pages/Detail.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {
  return (
    <>
    
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/Shortlets" element={<Shortlets/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

