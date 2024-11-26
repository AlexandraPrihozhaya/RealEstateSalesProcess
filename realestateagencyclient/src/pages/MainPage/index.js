import React from 'react';
import Header from '../../components/headerComponents/Header';
import MainHeader from '../../components/headerComponents/MainHeader';
import BlockInfo from '../../components/blockInfoComponents/BlockInfo';
import BlockDescription from '../../components/blockDescriptionComponents/BlockDescription';
import BlockAbout from '../../components/blockAboutComponents/BlockAbout';
import RequestForm from '../../components/requestsFormComponents/RequestForm';
import AllServices from '../../components/blockServices/AllServices';
import Footer from '../../components/footerComponents/Footer';
import MoreReviews from '../../components/blockReviewsComponents/MoreReviews';
import AdminMain from '../../components/adminComponents/AdminMain';

const MainPage = () => {

  const userRole = localStorage.getItem("userRole")

  return (
    <>
    {userRole !== "ROLE_ADMIN" && ( 
    <section>
      <Header />
      <MainHeader />
      <BlockInfo />
      <RequestForm />
      <AllServices />
      <BlockDescription />
      <BlockAbout />
      <MoreReviews />
      <Footer />
    </section>
    )}

    {userRole === "ROLE_ADMIN" && ( 
      <section>
        <AdminMain />
      </section>
      )}
</>
  );
};

export default MainPage;