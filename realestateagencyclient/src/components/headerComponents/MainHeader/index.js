import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SSection, SSlider, SSlide, SSlideContent, STitle, SText, SImage, SArrow, SDots, SButton, SLink } from './styled';
import picture1 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture1.jpg"
import picture2 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture2.jpg"
import picture3 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture3.jpg"

const MainHeader = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000, 
    arrows: true,
    prevArrow: <SArrow direction="left" />, 
    nextArrow: <SArrow direction="right" />,
    appendDots: (dots) => (
      <SDots>
        {dots}
      </SDots>
    )
  };

  return (
    <SSection>
      <SSlider {...settings}>

        <SSlide>
          <SSlideContent>
          <STitle>Адрес успеха</STitle>
            <SText>Найдите свой дом, создайте свою историю</SText>
            <SButton><SLink to='/catalog'>Перейти в каталог</SLink></SButton>
          </SSlideContent>
          <SImage src={picture1} alt="Slide 1" />
        </SSlide>

        <SSlide>
          <SSlideContent>
          <STitle>Адрес успеха</STitle>
            <SText>Найдите свой дом, создайте свою историю</SText>
            <SButton><SLink to='/catalog'>Перейти в каталог</SLink></SButton>
          </SSlideContent>
          <SImage src={picture2} alt="Slide 2" />
        </SSlide>

        <SSlide>
          <SSlideContent>
          <STitle>Адрес успеха</STitle>
            <SText>Найдите свой дом, создайте свою историю</SText>
            <SButton><SLink to='/catalog'>Перейти в каталог</SLink></SButton>
          </SSlideContent>
          <SImage src={picture3} alt="Slide 3" />
        </SSlide>
      </SSlider>
    </SSection>
  );
};

export default MainHeader;