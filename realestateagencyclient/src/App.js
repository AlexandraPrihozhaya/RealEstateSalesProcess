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
import AdminUsersPage from './pages/AdminUsersPage';
import AdminUserPage from './pages/AdminUserPage';
import RealtorLeadsPage from './pages/RealtorLeadsPage';
import Contacts from './pages/Contacts';
import RealtorAccountPage from './pages/RealtorAccountPage';
import AdminRealtorsPage from './pages/AdminRealtorsPage';
import AdminRealtorPage from './pages/AdminRealtorPage';

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
          <Route path="/company/contacts" element={<Contacts />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/realtors" element={<AdminRealtorsPage />} />
          <Route path="/admin/users/:userId" element={<AdminUserPage />} />
          <Route path="/realtor/leads" element={<RealtorLeadsPage />} />
          <Route path="/realtor/account" element={<RealtorAccountPage />} />
          <Route path="/admin/realtors/:realtorId" element={<AdminRealtorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );

}

export default App;