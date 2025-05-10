import React, { useEffect, useState } from "react";
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, SCard, SCardContainer, 
    SCardContent, SDivText, SCardName, SStars, SCardText, SFontAwesomeIcon } from './styled';
import { getUserByEmail } from '../../utils/ApiFunctions';
import { GrPrevious, GrNext } from "react-icons/gr";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const UserReviews = () => {
    const userId = localStorage.getItem("userId");

    const [clientInfo, setClientInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);
    
    const fetchReviews = async () => {
        try {
            const clientData = await getUserByEmail(userId);
            setClientInfo(clientData);
            setReviews(clientData.reviews || []);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2); 

    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = reviews.slice(startIndex, endIndex);

    if (reviews.length === 0) {
        return <SDivText>Нет отзывов для отображения</SDivText>;
    }

    return (
        <SSection>
            <div>
                {errorMessage && <p>Ошибка выполнения запроса: {errorMessage}</p>}
            </div>
            {isLoading ? (
                <text>Загрузка данных...</text>
            ) : (
                <>
                    <SPaginationContainer>
                        <SDivPages>
                            <SText>Отзывов на странице:</SText>
                            <SSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <SOption value="2">2</SOption>
                                <SOption value="4">4</SOption>
                                <SOption value="6">6</SOption>
                                <SOption value="8">8</SOption>
                            </SSelect>
                        </SDivPages>
                        <SDivCount>Страница {currentPage} из {totalPages}</SDivCount>
                        <SDivList>
                            <SButton onClick={handlePrevPage} disabled={currentPage === 1}><GrPrevious /></SButton>
                            <SButton onClick={handleNextPage} disabled={currentPage === totalPages}><GrNext /></SButton>
                        </SDivList>
                    </SPaginationContainer>
                    
                    <SCardContainer>
                        {pageData.map((review) => (
                            <SCard key={review.id}>
                                <SCardContent>
                                    <SCardName>{review.name}</SCardName>
                                    <SStars>
                                        {Array(review.rating)
                                            .fill()
                                            .map((_, i) => (
                                                <SFontAwesomeIcon key={i} icon={faStar} />
                                            ))}
                                    </SStars>
                                    <SCardText>{review.review}</SCardText>
                                </SCardContent>
                            </SCard>
                        ))}
                    </SCardContainer>
                </>
            )}
        </SSection>
    );
  };

  export default UserReviews;