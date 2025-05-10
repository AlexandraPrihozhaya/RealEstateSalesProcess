import React, { useState, useEffect } from 'react';
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, STable, SThead, 
    STr, STh, STbody, STd, SButtonTask, SLink, AcceptButton, RejectButton, SSpan } from './styled';
import { GrPrevious, GrNext } from "react-icons/gr";
import { getAllRequests, updateRequest, addNotificationLeadClient } from '../../utils/ApiFunctions';
import ModalObject from '../ModalObject';

const RealtorInfoRequests = () => {
    const [requests, setRequests] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
    const [selectedObject, setSelectedObject] = useState(null); // Данные объекта недвижимости

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        setIsLoading(true);
        try {
            const result = await getAllRequests();
            setRequests(result);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const handleObjectClick = (realEstateObject) => {
        setSelectedObject(realEstateObject);
        setIsModalOpen(true);
    };


  const columns = ['№', 'Объект недвижимости', 'Пользователь', 'Дата заявки', 'Статус', 'Действия'];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
if (startIndex < 0) {
  startIndex = 0;
}
const endIndex = startIndex + itemsPerPage;
const pageData = requests.slice(startIndex, endIndex);

const sortedPageData = pageData.sort((a, b) => {
    const dateA = new Date(a.requestDate[0], a.requestDate[1] - 1, a.requestDate[2], a.requestDate[3], a.requestDate[4], a.requestDate[5]);
    const dateB = new Date(b.requestDate[0], b.requestDate[1] - 1, b.requestDate[2], b.requestDate[3], b.requestDate[4], b.requestDate[5]);
    return dateB - dateA;
});

const handleUpdate = async (requestId, status, leadClientId) => {
    try {
        const result = await updateRequest(requestId, status);
        if (result === "Request updated successfully") {
          if (status === true) {
            const result2 = await addNotificationLeadClient(leadClientId, notificationObjectTrue);
          } else {
            const result2 = await addNotificationLeadClient(leadClientId, notificationObjectFalse);
          }
            fetchRequests();
        } else {
            console.error(`Error updating call request: ${result.message}`);
        }
    } catch (error) {
        setErrorMessage(error.message);
    }
    setTimeout(() => {
        setSuccessMessage(""); 
        setErrorMessage("");
    }, 3000);
}

const [notificationObjectTrue, setNotificationObjectTrue] = useState({
  name: "Заявка одобрена",
  notification: "Поздравляем, Ваша заявка на покупку объекта недвижимости одобрена. Можете следить за ходом сделки в личном кабинете"
});

const [notificationObjectFalse, setNotificationObjectFalse] = useState({
  name: "Заявка отклонена",
  notification: "К сожалению, Ваша заявка на покупку объекта недвижимости отклонена"
});
return (
    <>
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
            <SText>Строк на странице:</SText>
            <SSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <SOption value="5">5</SOption>
                <SOption value="10">10</SOption>
                <SOption value="20">20</SOption>
                <SOption value="50">50</SOption>
            </SSelect>
            </SDivPages>
            <SDivCount>Страница {currentPage} из {totalPages}</SDivCount>
            <SDivList>
                <SButton onClick={handlePrevPage}><GrPrevious /></SButton>
                <SButton onClick={handleNextPage}><GrNext /></SButton>
            </SDivList>
        </SPaginationContainer>
        <STable>
            <SThead>
                <STr>
                    {columns.map((column) => (
                        <STh key={column}>{column}</STh>
                    ))}
                </STr> 
            </SThead>
            <STbody>
                {sortedPageData.map((request, index) => (
                    <STr key={request.id} status={request.status}>
                        <STd key={index}>{index+1}</STd>
                        <STd>
                        <SSpan 
                            onClick={() => handleObjectClick(request.realEstateObject)}
                        >
                            {request.realEstateObject.name}
                        </SSpan>
                        </STd>
                        <STd>{request.leadClient.secondName} {request.leadClient.firstName}</STd>
                        <STd>{request.requestDate[2]}.{request.requestDate[1]}.{request.requestDate[0]} {request.requestDate[3]}:{request.requestDate[4]}:{request.requestDate[5]}</STd>
                        <STd>
                        {request.status === null ? "В обработке" : request.status === true ? "Принято" : request.status === false ? "Отклонено" : "Неизвестный статус"}
                        </STd>
                        <STd>
                        <AcceptButton 
                            onClick={() => handleUpdate(request.id, true, request.leadClient.id)}
                            disabled={request.status !== null} 
                        >
                            Принять
                        </AcceptButton>
                        <RejectButton 
                            onClick={() => handleUpdate(request.id, false, request.leadClient.id)}
                            disabled={request.status !== null} 
                        >
                            Отклонить
                        </RejectButton>
                        </STd>
                    </STr>
                ))}
            </STbody> 
            </STable>
            </>
            )}
      </SSection>

      {isModalOpen && (
                <ModalObject 
                    onClose={() => setIsModalOpen(false)}
                    realEstateObject = {selectedObject}    
                />
            )}

      </>
  );
};

export default RealtorInfoRequests;