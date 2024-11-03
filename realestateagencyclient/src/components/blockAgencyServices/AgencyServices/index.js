import React from 'react';
import { SSection, SDivPictures, SA} from './styled';
import AgencyService from '../AgencyService';
import buyer from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/buyer.png"
import seller from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/seller.png"
import price from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/price.png"

const AgencyServices = () => {
  return (
    <SSection>
      <SDivPictures>
        <SA href='/buyer'><AgencyService name="Покупка недвижимости" photoUrl={buyer} /></SA>
        <SA href='/seller'><AgencyService name="Продажа недвижимости" photoUrl={seller} /></SA>
        <SA href='/price'><AgencyService name="Стоимость услуг" photoUrl={price} /></SA>
      </SDivPictures>
    </SSection>
  );
};

export default AgencyServices;