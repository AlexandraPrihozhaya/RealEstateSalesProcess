import React, {useState} from 'react';
import { SSection, SA, SSpacer, SDivDropdown, SDivContent, SADiv } from './styled';


const Menu = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseOver = (id) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <SSection>
      <SDivDropdown 
        onMouseOver={() => handleMouseOver('catalog')} 
        onMouseLeave={handleMouseLeave} 
      >
        <SA href='/catalog' isActive={window.location.pathname === '/catalog'}>Каталог недвижимости</SA>
        <SDivContent isOpen={openDropdown === 'catalog'}>
          <SADiv href="#">Квартиры</SADiv>
          <SADiv href="#">Дома, коттеджи</SADiv>
          <SADiv href="#">Комнаты</SADiv>
        </SDivContent>
      </SDivDropdown>

      <SSpacer></SSpacer>
        
      <SDivDropdown 
        onMouseOver={() => handleMouseOver('services')} 
        onMouseLeave={handleMouseLeave} 
      >
        <SA href='/services' isActive={window.location.pathname === '/services'}>Услуги</SA>
        <SDivContent isOpen={openDropdown === 'services'}>
          <SADiv href="/services/buyer">Покупка недвижимости</SADiv>
          <SADiv href="/services/seller">Продажа недвижимости</SADiv>
          <SADiv href="/services/price">Стоимость услуг</SADiv>
        </SDivContent>
      </SDivDropdown>

      <SSpacer></SSpacer>

      <SDivDropdown 
        onMouseOver={() => handleMouseOver('company')} 
        onMouseLeave={handleMouseLeave}
      >
        <SA href='/company' isActive={window.location.pathname === '/company'}>О компании</SA>
        <SDivContent isOpen={openDropdown === 'company'}>
          <SADiv href="/company/aboutus">О нас</SADiv>
          <SADiv href="/company/contacts">Контакты</SADiv>
          <SADiv href="/company/advantages">Преимущества</SADiv>
          <SADiv href="/company/reviews">Отзывы</SADiv>
        </SDivContent>
      </SDivDropdown>

      <SSpacer></SSpacer>
      <SA href='/information' isActive={window.location.pathname === '/information'}>Информация</SA>
      <SSpacer></SSpacer>
      <SA href='/register' isActive={window.location.pathname === '/register'}>Аккаунт</SA>
    </SSection>
  );
};

export default Menu;