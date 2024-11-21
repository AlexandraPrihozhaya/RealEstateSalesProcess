import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import OurTeam from '../../components/blockDescriptionComponents/OurTeam';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ImageSlide from '../../components/blockAboutComponents/ImageSlide';

const AboutUsPage = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/company", label: "О компании" },
          { path: "/company/aboutus", label: "О нас" },
        ]}
      />
      
      <ImageSlide />
      <OurTeam />
      <Footer />
    </section>
  );
};

export default AboutUsPage;