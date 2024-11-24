import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import Services from './pages/Services';
import Catalog from './pages/Catalog';
import Company from './pages/Company';
import InformationPage from './pages/InformationPage';
import BuyerPage from './pages/BuyerPage';
import SellerPage from './pages/SellerPage';
import PricePage from './pages/PricePage';
import AboutUsPage from './pages/AboutUsPage';
import Advantages from './pages/Advantages';
import { AuthProvider } from './components/auth/AuthProvider';
import ReviewsPage from './pages/ReviewsPage';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/company" element={<Company />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/services/buyer" element={<BuyerPage />} />
          <Route path="/services/seller" element={<SellerPage />} />
          <Route path="/services/price" element={<PricePage />} />
          <Route path="/company/aboutus" element={<AboutUsPage />} />
          <Route path="/company/advantages" element={<Advantages />} />
          <Route path="/company/reviews" element={<ReviewsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );

}

export default App;