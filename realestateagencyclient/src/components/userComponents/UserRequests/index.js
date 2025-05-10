import React, { useEffect, useState } from "react";
import { 
    SSection, 
    SPaginationContainer, 
    SDivPages, 
    SDivCount, 
    SDivList, 
    SText, 
    SSelect, 
    SOption, 
    SButton, 
    SDivText,
    STable,
    STHead,
    STHeadRow,
    STH,
    STBody,
    STR,
    STD,
    SButtonTask,
    SModal, SDialog, SBtns, SAiOutlineClose, SClose, SButtonModal
} from './styled';
import { getLeadClientByEmail, deleteRequest } from '../../utils/ApiFunctions';
import { GrPrevious, GrNext } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const UserRequests = () => {
    const userId = localStorage.getItem("userId");

    const [clientInfo, setClientInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const clientData = await getLeadClientByEmail(userId);
            setClientInfo(clientData);
            setRequests(clientData.requests || []); 
            console.log(clientData.requests);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const totalPages = Math.ceil(requests.length / itemsPerPage);

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
    const pageData = requests.slice(startIndex, endIndex);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [requestIdToDelete, setRequestIdToDelete] = useState(null);

    const handleDelete = async (requestId) => {
        setRequestIdToDelete(requestId);
        setIsModalOpen(true);
      };

      const handleModalClose = () => {
        setIsModalOpen(false);
      };

      const handleConfirmDelete = async () => {
        try {
          const result = await deleteRequest(requestIdToDelete);
          if (result === "Request deleted successfully") {
            setSuccessMessage(
              `Заявка с id ${requestIdToDelete} была удалена`
            );
            fetchRequests();
          } else {
            console.error(`Error deleting request : ${result.message}`);
          }
        } catch (error) {
          setErrorMessage(error.message);
        }
        setTimeout(() => {
          setSuccessMessage("");
          setErrorMessage("");
        }, 3000);
        setIsModalOpen(false);
      };

    if (!clientInfo || requests.length === 0) {
        return <SDivText>Нет заявок для отображения</SDivText>;
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
                            <SText>Заявок на странице:</SText>
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
                    <STable>
                        <STHead>
                            <STHeadRow>
                                <STH>Объект</STH>
                                <STH>Дата заявки</STH>
                                <STH>Статус</STH>
                                <STH>Удаление</STH>
                            </STHeadRow>
                        </STHead>
                        <STBody>
                            {pageData.map((request) => (
                                <STR key={request.id}>
                                    <STD>{request.realEstateObject.name}</STD>
                                    <STD>
                                        {request.requestDate && request.requestDate.length > 0 
                                            ? `${request.requestDate[2]}.${request.requestDate[1]}.${request.requestDate[0]} ${request.requestDate[3]}:${request.requestDate[4]}:${request.requestDate[5]}`
                                            : 'Н/A'}
                                    </STD>
                                    <STD style={{ color: request.status === true ? 'green' : request.status === false ? 'red' : 'black' }}>
                                        {request.status === null 
                                            ? "В обработке" 
                                            : request.status === false 
                                            ? "Отклонено" 
                                            : request.status === true 
                                            ? "Принято" 
                                            : "Неизвестный статус"}
                                    </STD>
                                    <STD>
                                        <SButtonTask 
                                            onClick={() => handleDelete(request.id)}
                                            disabled={request.status !== null} 
                                        >
                                            <MdDelete />
                                        </SButtonTask>
                                    </STD>
                                </STR>
                            ))}
                        </STBody>
                    </STable>
                </>
            )}
        </SSection>
        <>{isModalOpen && (
            <SModal>
              <SDialog>
                <SClose>
                    <SAiOutlineClose onClick={handleModalClose} />
                </SClose>
                <SText>Вы действительно хотите удалить заявку?</SText>
                <SBtns>
                    <SButtonModal onClick={handleConfirmDelete}>Да</SButtonModal>
                    <SButtonModal onClick={handleModalClose}>Нет</SButtonModal>
                </SBtns>
              </SDialog>
            </SModal>
          )}</>
        </>
    );
};

export default UserRequests;      