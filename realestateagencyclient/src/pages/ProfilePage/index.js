import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import UserAccount from '../../components/userComponents/UserAccount';

const ProfilePage = () => {
  return (
    <section className="profile-page">
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/profile", label: "Профиль" },
        ]}
      />
      <UserAccount />
      <Footer />
    </section>
  );
};

export default ProfilePage;