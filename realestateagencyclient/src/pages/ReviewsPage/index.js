import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Reviews from '../../components/blockReviewsComponents/Reviews';

const ReviewsPage = () => {

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
      <Reviews />
      <Footer />
    </section>
  );
};

export default ReviewsPage;