import React from 'react';
import { SSection, SDivPictures, SA} from './styled';
import AgencyService from '../AgencyService';
import aboutus from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/aboutus.png"
import contacts from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/contacts.png"
import advantages from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/advantages.png"
import reviews from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/reviews.png"

const AboutCompany = () => {
  return (
    <SSection>
      <SDivPictures>
        <SA href='/company/aboutus'><AgencyService name="О нас" photoUrl={aboutus} /></SA>
        <SA href='/company/contacts'><AgencyService name="Контакты" photoUrl={contacts} /></SA>
        <SA href='/company/advantages'><AgencyService name="Преимущества" photoUrl={advantages} /></SA>
        <SA href='/company/reviews'><AgencyService name="Отзывы" photoUrl={reviews} /></SA>
      </SDivPictures>
    </SSection>
  );
};

export default AboutCompany;