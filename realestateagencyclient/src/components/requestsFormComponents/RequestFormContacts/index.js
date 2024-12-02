import React from 'react';
import { SSection, SForm, SInput, SButton, SH1, SText, STextArea } from './styled';
    

const RequestFormContacts = () => {

  return (
    <SSection>
      <SH1>
        Свяжитесь с нами
      </SH1>
      <SText>Мы всегда рады помочь вам найти дом вашей мечты или продать вашу нынешнюю недвижимость.</SText>
      <SForm>
        <SInput type="text" placeholder="Имя" />
        <SInput type="email" placeholder="Email" />
        <SInput type="tel" placeholder="Телефон" />
        <STextArea type="tel" placeholder="Ваше сообщение" />
        <SButton>Отправить</SButton>
      </SForm>
    </SSection>
  );
};

export default RequestFormContacts;