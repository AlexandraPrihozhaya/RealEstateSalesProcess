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
        <SA href='/catalog'>Каталог недвижимости</SA>
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
        <SA href='/services'>Услуги</SA>
        <SDivContent isOpen={openDropdown === 'services'}>
          <SADiv href="#">Покупка недвижимости</SADiv>
          <SADiv href="#">Продажа недвижимости</SADiv>
          <SADiv href="#">Стоимость услуг</SADiv>
        </SDivContent>
      </SDivDropdown>

      <SSpacer></SSpacer>

      <SDivDropdown 
        onMouseOver={() => handleMouseOver('company')} 
        onMouseLeave={handleMouseLeave}
      >
        <SA href='/company'>О компании</SA>
        <SDivContent isOpen={openDropdown === 'company'}>
          <SADiv href="#">О нас</SADiv>
          <SADiv href="#">Контакты</SADiv>
          <SADiv href="#">Преимущества</SADiv>
          <SADiv href="#">Отзывы</SADiv>
        </SDivContent>
      </SDivDropdown>

      <SSpacer></SSpacer>
      <SA href='/information'>Информация</SA>
      <SSpacer></SSpacer>
      <SA href='/register'>Аккаунт</SA>
    </SSection>
  );
};

export default Menu;