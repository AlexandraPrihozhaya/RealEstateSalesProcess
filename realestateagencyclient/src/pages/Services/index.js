import React from 'react';
import Header from '../../components/headerComponents/Header';
import AgencyServices from '../../components/blockAgencyServices/AgencyServices';
import RequestForm from '../../components/requestsFormComponents/RequestForm';
import Advantages from '../../components/blockAdvantages/Advantages';
import OurServices from '../../components/blockServices/OurServices';
import Footer from '../../components/footerComponents/Footer';


const Services = () => {
  return (
    <section>
      <Header />
      <AgencyServices />
      <Advantages />
      <RequestForm />
      <OurServices />
      <Footer />
    </section>
  );
};

export default Services;