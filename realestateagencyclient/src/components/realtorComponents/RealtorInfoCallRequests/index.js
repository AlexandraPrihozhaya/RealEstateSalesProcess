import React, { useState, useEffect } from 'react';
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, STable, SThead, 
    STr, STh, STbody, STd, SSelectStatus, SOptionStatus } from './styled';
import { GrPrevious, GrNext } from "react-icons/gr";
import { getAllCallRequests, updateCallRequest } from '../../utils/ApiFunctions';

const RealtorInfoCallRequests = () => {

    const [callRequests, setCallRequests] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
  
  useEffect(() => {
      fetchCallRequests()
    }, [])
  
    const fetchCallRequests = async () => {
      setIsLoading(true)
      try {
        const result = await getAllCallRequests()
        setCallRequests(result)
        setIsLoading(false)
      } catch (error) {
        setErrorMessage(error.message)
        setIsLoading(false)
      }
    }

  const columns = ['№', 'Имя', 'Телефон', 'Дата заявки', 'Статус'];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(callRequests.length / itemsPerPage);

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
const pageData = callRequests.slice(startIndex, endIndex);

const sortedPageData = pageData.sort((a, b) => {
  const dateA = new Date(a.dateTime[0], a.dateTime[1] - 1, a.dateTime[2], a.dateTime[3], a.dateTime[4], a.dateTime[5]);
  const dateB = new Date(b.dateTime[0], b.dateTime[1] - 1, b.dateTime[2], b.dateTime[3], b.dateTime[4], b.dateTime[5]);
  return dateB - dateA;
});

const handleUpdate = async (callRequestId, status) => {
  try {
      const result = await updateCallRequest(callRequestId, status);
      if (result === "Call Request updated successfully") {
          fetchCallRequests();
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
                {sortedPageData.map((callRequest, index) => (
                    <STr key={callRequest.id}>
                        <STd key={index}>{index+1}</STd>
                        <STd>{callRequest.name}</STd>
                        <STd>{callRequest.phoneNumber}</STd>
                        <STd>{callRequest.dateTime[2]}.{callRequest.dateTime[1]}.{callRequest.dateTime[0]} {callRequest.dateTime[3]}:{callRequest.dateTime[4]}:{callRequest.dateTime[5]}</STd>
                        <STd>
                          <SSelectStatus 
                          onChange={(e) => handleUpdate(callRequest.id, e.target.value)} 
                          id="status" name="status" value={callRequest.status}>
                              <SOptionStatus value="Ожидает выполнения">Ожидает выполнения</SOptionStatus>
                              <SOptionStatus value="В процессе обработки">В процессе обработки</SOptionStatus>
                              <SOptionStatus value="Обработано">Обработано</SOptionStatus>
                          </SSelectStatus>
                        </STd>
                    </STr>
                ))}
            </STbody> 
            </STable>
            </>
            )}
      </SSection>
      </>
  );
}; 

export default RealtorInfoCallRequests;