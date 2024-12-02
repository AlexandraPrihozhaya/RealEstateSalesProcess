import React from 'react';
import { SSection, SDivText, SDivPictures, SH1 } from './styled';
import Service from '../../blockServices/Service';
import map from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/map.png"
import phone from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/phone.png"
import email from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/email.png"

const ContactsBlock = () => {
  return (
    <SSection>
      <SDivText>
        <SH1>
            Наши контакты
        </SH1>
      </SDivText>
      <SDivPictures>
        <Service name="Адрес" photoUrl={map} text="улица Притыцкого, 94"  />
        <Service name="Телефон" photoUrl={phone} text="+8 (029) 141-22-23"  />
        <Service name="Email" photoUrl={email} text="adres_uspeha@realtor.ru" />
      </SDivPictures>
    </SSection>
  );
};

export default ContactsBlock;