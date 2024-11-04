import React from 'react';
import { SSection, SDivPictures, SA} from './styled';
import AgencyService from '../AgencyService';
import buyer from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/buyer.png"
import seller from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/seller.png"
import price from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/price.png"

const AboutCompany = () => {
  return (
    <SSection>
      <SDivPictures>
        <SA href='/aboutus'><AgencyService name="О нас" photoUrl={buyer} /></SA>
        <SA href='/contacts'><AgencyService name="Контакты" photoUrl={seller} /></SA>
        <SA href='/advantages'><AgencyService name="Преимущества" photoUrl={price} /></SA>
        <SA href='/reviews'><AgencyService name="Отзывы" photoUrl={price} /></SA>
      </SDivPictures>
    </SSection>
  );
};

export default AboutCompany;