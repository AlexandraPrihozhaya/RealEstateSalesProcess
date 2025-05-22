import React, { useEffect, useState } from "react";
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, SCard, SCardContainer, 
    SCardContent, SDivText, SCardName, SCardText } from './styled';
import { getUserByEmail } from '../../utils/ApiFunctions';
import { GrPrevious, GrNext } from "react-icons/gr";
import ModalNotification from "../ModalNotification";


const UserNotifications = () => {
    const userId = localStorage.getItem("userId");

    const [clientInfo, setClientInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [notifications, setNotifications] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);

    useEffect(() => {
        fetchNotifications();
    }, []);
    
    const fetchNotifications = async () => {
        try {
            const clientData = await getUserByEmail(userId);
            setClientInfo(clientData);
            const filteredNotifications = clientData.notifications.filter(notification => notification.status === false);
            setNotifications(filteredNotifications);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3); 


    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const sortedPageData = notifications.sort((a, b) => {
        const dateA = new Date(a.notificationDate[0], a.notificationDate[1] - 1, a.notificationDate[2], a.notificationDate[3], a.notificationDate[4], a.notificationDate[5]);
        const dateB = new Date(b.notificationDate[0], b.notificationDate[1] - 1, b.notificationDate[2], b.notificationDate[3], b.notificationDate[4], b.notificationDate[5]);
        return dateB - dateA;
    });

    const totalPages = Math.ceil(sortedPageData.length / itemsPerPage);

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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = sortedPageData.slice(startIndex, endIndex);

    const openModal = (notification) => {
        setSelectedNotification(notification);
        setModalIsOpen(true);
    };

    if (notifications.length === 0) {
        return <SDivText>Нет уведомлений для отображения</SDivText>;
    }
    return (
        <>
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
                            <SText>Уведомлений на странице:</SText>
                            <SSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <SOption value="3">3</SOption>
                                <SOption value="6">6</SOption>
                                <SOption value="9">9</SOption>
                                <SOption value="12">12</SOption>
                            </SSelect>
                        </SDivPages>
                        <SDivCount>Страница {currentPage} из {totalPages}</SDivCount>
                        <SDivList>
                            <SButton onClick={handlePrevPage} disabled={currentPage === 1}><GrPrevious /></SButton>
                            <SButton onClick={handleNextPage} disabled={currentPage === totalPages}><GrNext /></SButton>
                        </SDivList>
                    </SPaginationContainer>
                    
                    <SCardContainer>
                        {pageData.map((notification) => (
                            <SCard key={notification.id} onClick={() => openModal(notification)}>
                                <SCardContent>
                                    <SCardName>{notification.name}</SCardName>
                                    <SCardText>{notification.notificationDate[3]}:{notification.notificationDate[4]} {notification.notificationDate[2]}.{notification.notificationDate[1]}.{notification.notificationDate[0]}</SCardText>
                                </SCardContent>
                            </SCard>
                        ))}
                    </SCardContainer>
                </>
            )}
        </SSection>

        {modalIsOpen && (
            <ModalNotification 
            onClose={() => {
                setModalIsOpen(false);
                fetchNotifications();
            }}
            notification={selectedNotification}    
        />
        )}
        </>
    );
  };

  export default UserNotifications;