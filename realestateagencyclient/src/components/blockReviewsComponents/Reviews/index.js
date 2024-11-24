import React, { useState } from 'react';
import { SSection, SButton, SDivReview, SImg, SH3, SText, SFontAwesomeIcon, SStars } from './styled';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {

    const [reviews, setReviews] = useState([
        {
          id: 1,
          name: "Ольга",
          image:
            "//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg",
          review:
            "Я очень благодарна Зель Наталье Михайловне, Виктории Марецкой и Елене Дмитриевой за работу. Все прошло быстро, качественно. Всегда очень профессионально, внимательно, понятно объясняла. Всегда на связи, в том числе и в выходные. Желаю здоровья, счастья и хороших клиентов.",
          rating: 5,
        },
        {
          id: 2,
          name: "Татьяна",
          image:
            "https://i.postimg.cc/ydBjdm20/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.jpg",
          review:
            "Выражаю огромную благодарность коллективу ОДО'Твоя столицаконсалт', в частности Лужинской Александре Олеговне и Гатилло Светлане Владимировне, за оперативно, качественно, слаженно проделанную работу, профессионализм, всестороннюю поддержку и личное человеческое участие. Заслуживают уважение и буду рекомендовать друзьям.",
          rating: 4,
        },
      ]);
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
      };
    
      const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
      };

  return (
    <SSection>
      <SButton onClick={handlePrevClick}>&lt;</SButton>    
      <SDivReview>
        <SImg src={reviews[currentIndex].image}/>
        <SH3>{reviews[currentIndex].name}</SH3>
        <SStars>
            {Array(reviews[currentIndex].rating)
                .fill()
                .map((_, i) => (
                    <SFontAwesomeIcon key={i} icon={faStar} />
            ))}
        </SStars>
        <SText>{reviews[currentIndex].review}</SText>
      </SDivReview>
      <SButton onClick={handleNextClick}>&gt;</SButton>
    </SSection>
  );
};

export default Reviews;