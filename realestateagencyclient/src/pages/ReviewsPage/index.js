import React, { useState } from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Reviews from '../../components/blockReviewsComponents/Reviews';
import ReviewForm from '../../components/blockReviewsComponents/ReviewForm';
import RequireAuth from '../../components/auth/RequireAuth';


const ReviewsPage = () => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleSubmitAttempt = () => {
    setAttemptedSubmit(true);
  };

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
      {attemptedSubmit ? (
        <RequireAuth>
          <ReviewForm />
        </RequireAuth>
      ) : (
        <ReviewForm onSubmitAttempt={handleSubmitAttempt} />
      )}
      <Reviews />
      <Footer />
    </section>
  );
};

export default ReviewsPage;