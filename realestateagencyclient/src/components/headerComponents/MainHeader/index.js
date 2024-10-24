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
          <SImage src="https://images2.nplod.ru/gen_images/Fp1tJgEVo4IBTTefhttNqD6aufexO2gh.jpg" alt="Slide 1" />
        </SSlide>

        <SSlide>
          <SSlideContent>
            <STitle>Slide 2 Title</STitle>
            <SText>Slide 2 Description</SText>
          </SSlideContent>
          <SImage src="https://images2.nplod.ru/gen_images/l3dRyhAaqKE7WOTuZ5NCQQqI3SQJeEiV.jpg" alt="Slide 2" />
        </SSlide>

        <SSlide>
          <SSlideContent>
            <STitle>Slide 3 Title</STitle>
            <SText>Slide 3 Description</SText>
          </SSlideContent>
          <SImage src="https://images2.nplod.ru/gen_images/oGVTKMOCPHbTbZNVCwun92F9hjdnBC1z.jpg" alt="Slide 3" />
        </SSlide>
      </SSlider>
    </SSection>
  );
};

export default MainHeader;