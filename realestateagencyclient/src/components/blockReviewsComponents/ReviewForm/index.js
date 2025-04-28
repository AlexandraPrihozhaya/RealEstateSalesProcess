import React, { useState } from 'react';
import { SSection, SForm, SFormData, SInput, SButton, STextarea, SLabel, SStarContainer, SStar, SText, SA } from './styled';
import { addReview } from '../../utils/ApiFunctions';  

const ReviewForm = ({ onSubmitAttempt }) => {
    const userEmail = localStorage.getItem("userId");
  
    const [review, setReview] = useState({
      name: "",
      review: "",
      rating: ""
    });
  
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [hoveredStar, setHoveredStar] = useState(null); // Состояние для хранения наведения

    const handleInputChange = (e) => {
      setReview({ ...review, [e.target.name]: e.target.value });
    };
  
    const handleStarClick = (rating) => {
      setReview({ ...review, rating });
    };
  
    const handleAddReview = async (e) => {
      e.preventDefault(); // Предотвращаем стандартное поведение формы
      try {
        const result = await addReview(userEmail, review);
        setSuccessMessage("Вы успешно добавили отзыв");
        setErrorMessage("");
        setReview({
          name: "",
          review: "",
          rating: ""
        });
      } catch (error) {
        setSuccessMessage("");
        setErrorMessage(`Ошибка добавления: ${error.message}`);
      }
      setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 5000);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Предотвращаем стандартное поведение формы
      onSubmitAttempt(); // Вызываем функцию из props
      handleAddReview(e); // Вызываем функцию для добавления отзыва
    };
  
    return (
      <SSection>
        <SForm onSubmit={handleSubmit}>
          <SFormData>
            <SLabel>Ваше имя</SLabel>
            <SInput
              type="text"
              name="name"
              value={review.name}
              onChange={handleInputChange}
              placeholder="Введите имя"
              required
            />
  
            <SLabel>Ваш отзыв</SLabel>
            <STextarea
              name="review"
              value={review.review}
              onChange={handleInputChange}
              placeholder="Напишите отзыв..."
              required
            />
  
            <SLabel>Оценка</SLabel>
            <SStarContainer>
              {[1, 2, 3, 4, 5].map((star) => (
                <SStar
                  key={star}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoveredStar(star)} // Устанавливаем hoveredStar при наведении
                  onMouseLeave={() => setHoveredStar(null)} // Сбрасываем hoveredStar при уходе
                  selected={star <= (hoveredStar || review.rating)} // Используем hoveredStar для выделения
                >
                  ★
                </SStar>
              ))}
            </SStarContainer>
  
            <SButton type="submit">Отправить отзыв</SButton>
  
            {/* {successMessage && <SMessage success>{successMessage}</SMessage>}
            {errorMessage && <SMessage>{errorMessage}</SMessage>} */}
          </SFormData>
          <SText>Не авторизованы? <SA href="/register">авторизуйтесь</SA>, чтобы оставить отзыв</SText>
        </SForm>
      </SSection>
    );
};

export default ReviewForm;