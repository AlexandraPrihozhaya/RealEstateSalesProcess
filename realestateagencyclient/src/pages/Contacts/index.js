import React from 'react';
import Header from '../../components/headerComponents/Header';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Footer from '../../components/footerComponents/Footer';
import MapBlock from '../../components/blockAboutComponents/MapBlock';
import ContactsBlock from '../../components/blockAboutComponents/ContactsBlock';
import RequestFormContacts from '../../components/requestsFormComponents/RequestFormContacts';

const Contacts = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/company", label: "О компании" },
          { path: "/company/contacts", label: "Контакты" },
        ]}
      />
      
      <RequestFormContacts />
      <ContactsBlock />
      <MapBlock address={"ул. Притыцкого, 78"}/>
      <Footer />
    </section>
  );  
};

export default Contacts;