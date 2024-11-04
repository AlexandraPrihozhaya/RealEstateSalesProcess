import React from 'react';
import { SSection, SDiv, SCol, SImage, SH4, SLinks, SLi, SA, SForm, SInput, SButton, SP, SALogo } from './styled';
import logo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/logo_footer.png"



const Footer = () => {
  return (
    <SSection>
    <SDiv>
        <SCol>
          <SALogo href='/'><SImage src={logo} alt="Логотип" /></SALogo>
        </SCol>
        <SCol>
          <SH4>Полезные ссылки</SH4>
          <SLinks>
            <SLi><SA href="/catalog">Каталог</SA></SLi>
            <SLi><SA href="/services">Услуги</SA></SLi>
            <SLi><SA href="/company">О компании</SA></SLi>
            <SLi><SA href="/information">Информация</SA></SLi>
          </SLinks>
        </SCol>
        <SCol>
          <SH4>Подпишитесь на новости</SH4>
          <SForm>
            <SInput type="email" placeholder="Введите ваш email" />
            <SButton type="submit" >Подписаться</SButton>
          </SForm>
        </SCol>
    </SDiv>
    <SP>Copyright © 2024 Ваша компания. Все права защищены.</SP>
    </SSection>
  );
};

export default Footer;