import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import Partners from '@/pages/Partners';
import Contact from '@/pages/Contact';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
