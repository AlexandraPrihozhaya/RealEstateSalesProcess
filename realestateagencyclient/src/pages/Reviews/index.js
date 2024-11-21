import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const Reviews = () => {
  return (
    <section>
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/company", label: "О компании" },
          { path: "/company/reviews", label: "Отзывы" },
        ]}
      />
      <Footer />
    </section>
  );
};

export default Reviews;