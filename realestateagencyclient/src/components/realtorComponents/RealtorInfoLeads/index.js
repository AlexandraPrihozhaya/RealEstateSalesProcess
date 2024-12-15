import React, { useState, useEffect } from 'react';
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, STable, SThead, 
    STr, STh, STbody, STd, SButtonTask, SLink } from './styled';
import { GrPrevious, GrNext } from "react-icons/gr";
import { getAllLeads } from '../../utils/ApiFunctions';
import { SiQuicklook } from "react-icons/si";

const RealtorInfoLeads = () => {

    const [leads, setLeads] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
  
  useEffect(() => {
      fetchLeads()
    }, [])
  
    const fetchLeads = async () => {
      setIsLoading(true)
      try {
        const result = await getAllLeads()
        setLeads(result)
        setIsLoading(false)
      } catch (error) {
        setErrorMessage(error.message)
        setIsLoading(false)
      }
    }

  const columns = ['№', 'Фамилия', 'Имя', 'Отчество', 'Телефон', 'Email', 'Подробная информация'];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(leads.length / itemsPerPage);

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
const pageData = leads.slice(startIndex, endIndex);

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
                {pageData.map((lead, index) => (
                    <STr key={lead.id}>
                        <STd key={index}>{index+1}</STd>
                        <STd>{lead.secondName}</STd>
                        <STd>{lead.firstName}</STd>
                        <STd>{lead.patronymic}</STd>
                        <STd>{lead.phoneNumber}</STd>
                        <STd>{lead.user.email}</STd>
                        <STd>
                        <SButtonTask><SLink to={`/realtor/leads/${lead.id}`}><SiQuicklook /></SLink></SButtonTask>
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

export default RealtorInfoLeads;