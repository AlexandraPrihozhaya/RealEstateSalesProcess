import React, { useState, useEffect } from 'react';
import { SSection, SButton, SDivReview, SImg, SH3, SText, SFontAwesomeIcon, SStars, SDivText } from './styled';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getAllReviews } from '../../utils/ApiFunctions';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const result = await getAllReviews();
            setReviews(result);
            // Устанавливаем currentIndex в 0 только если есть отзывы
            if (result.length > 0) {
                setCurrentIndex(0);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleNextClick = () => {
        if (reviews.length > 0) {
            setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
        }
    };

    const handlePrevClick = () => {
        if (reviews.length > 0) {
            setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
        }
    };

    // Проверяем наличие отзывов перед рендерингом
    if (reviews.length === 0) {
        return <SDivText>Нет отзывов для отображения.</SDivText>;
    }

    return (
        <SSection>
            <SButton onClick={handlePrevClick}>&lt;</SButton>
            <SDivReview>
                {/* Проверяем наличие текущего отзыва */}
                {reviews[currentIndex] && (
                    <>
                        {/* <SImg src={reviews[currentIndex].image}/> */}
                        <SH3>{reviews[currentIndex].name}</SH3>
                        <SStars>
                            {Array(reviews[currentIndex].rating)
                                .fill()
                                .map((_, i) => (
                                    <SFontAwesomeIcon key={i} icon={faStar} />
                                ))}
                        </SStars>
                        <SText>{reviews[currentIndex].review}</SText>
                    </>
                )}
            </SDivReview>
            <SButton onClick={handleNextClick}>&gt;</SButton>
        </SSection>
    );
};

export default Reviews;