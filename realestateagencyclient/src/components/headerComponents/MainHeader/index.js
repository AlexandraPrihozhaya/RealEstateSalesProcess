import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SSection, SSlider, SSlide, SSlideContent, STitle, SText, SImage, SArrow, SDots } from './styled';

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
            <STitle>Slide 1 Title</STitle>
            <SText>На самом деле жизнь проста, но мы настойчиво её усложняем.</SText>
          </SSlideContent>
          <SImage src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649677081_17-vsegda-pomnim-com-p-tsveti-chyorno-belie-foto-30.jpg" alt="Slide 1" />
        </SSlide>

        <SSlide>
          <SSlideContent>
            <STitle>Slide 2 Title</STitle>
            <SText>Slide 2 Description</SText>
          </SSlideContent>
          <SImage src="https://baldezh.top/uploads/posts/2022-08/1661269525_52-funart-pro-p-cherno-belie-tsveti-pinterest-53.jpg" alt="Slide 2" />
        </SSlide>

        <SSlide>
          <SSlideContent>
            <STitle>Slide 3 Title</STitle>
            <SText>Slide 3 Description</SText>
          </SSlideContent>
          <SImage src="https://baldezh.top/uploads/posts/2022-08/1661269571_70-funart-pro-p-cherno-belie-tsveti-pinterest-72.jpg" alt="Slide 3" />
        </SSlide>
      </SSlider>
    </SSection>
  );
};

export default MainHeader;