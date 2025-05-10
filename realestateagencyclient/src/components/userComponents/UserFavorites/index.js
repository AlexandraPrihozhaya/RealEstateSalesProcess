import React, { useEffect, useState } from "react";
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, 
    SDivText, SCardContainer } from './styled';
import { getUserByEmail } from '../../utils/ApiFunctions';
import { GrPrevious, GrNext } from "react-icons/gr";
import ObjectCard from "../ObjectCard";

const UserFavorites = () => {
    const userId = localStorage.getItem("userId");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetchAds();
    }, []);
    
    const fetchAds = async () => {
        try {
            const userData = await getUserByEmail(userId);
            console.log(userData);
            if (userData.favorites && userData.favorites.length > 0) {
                console.log("Избранные объекты:", userData.favorites);
                setAds(userData.favorites.map(fav => fav.realEstateObject));
            } else {
                console.log("Нет избранных объектов");
            }
    
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const totalPages = Math.ceil(ads.length / itemsPerPage);

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
    const pageData = ads.slice(startIndex, endIndex);

    if (ads.length === 0) {
        return <SDivText>Нет избранных объектов для отображения</SDivText>;
    }

    return (
        <SSection>
            <div>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>Ошибка выполнения запроса</p>}
            </div>
            {isLoading ? (
                <text>Загрузка данных...</text>
            ) : (
                <>
                    <SPaginationContainer>
                        <SDivPages>
                            <SText>Объектов на странице:</SText>
                            <SSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <SOption value="3">3</SOption>
                                <SOption value="6">6</SOption>
                                <SOption value="9">9</SOption>
                                <SOption value="12">12</SOption>
                            </SSelect>
                        </SDivPages>
                        <SDivCount>Страница {currentPage} из {totalPages}</SDivCount>
                        <SDivList>
                            <SButton onClick={handlePrevPage}><GrPrevious /></SButton>
                            <SButton onClick={handleNextPage}><GrNext /></SButton>
                        </SDivList>
                    </SPaginationContainer>
                    
                    <SCardContainer>
                        {pageData.map((reobject) => (
                            <ObjectCard key={reobject.id} object={reobject} />
                        ))}
                    </SCardContainer>
                </>
            )}
        </SSection>
    );
  };

  export default UserFavorites;