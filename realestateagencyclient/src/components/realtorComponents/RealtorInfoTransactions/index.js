import React, { useState, useEffect } from 'react';
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, STable, SThead, 
    STr, STh, STbody, STd, SSpan, Button, SDivStages, SStages, SList, SStagesButton, SHr } from './styled';
import { GrPrevious, GrNext } from "react-icons/gr";
import { getAllTransactions, updateTransaction, addNotificationLeadClient, getAllTransactionStages } from '../../utils/ApiFunctions';
import ModalObject from '../ModalObject';

const RealtorInfoTransactions = () => {
    const userId = localStorage.getItem("userId");
    const [transactions, setTransactions] = useState([]);
    const [transactionStages, setTransactionStages] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedObject, setSelectedObject] = useState(null);
    const [isLastStage, setLastStage] = useState(false);

    useEffect(() => {
        fetchTransactions();
        fetchTransactionStages();
    }, []);

    const fetchTransactions = async () => {
        setIsLoading(true);
        try {
            const result = await getAllTransactions();
            console.log(result);
            setTransactions(result);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const fetchTransactionStages = async () => {
      setIsLoading(true);
      try {
          const result = await getAllTransactionStages();
          console.log(result);
          setTransactionStages(result);
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

  const columns = ['№', 'Объект недвижимости', 'Клиент', 'Дата этапа', 'Этап', ''];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };


const totalPages = Math.ceil(transactions.length / itemsPerPage);

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
if (startIndex < 0) {
  startIndex = 0;
}
const endIndex = startIndex + itemsPerPage;
const pageData = transactions.slice(startIndex, endIndex);
const handleUpdate = async (transaction) => {
  try {
      const result = await updateTransaction(transaction.id, transaction.transactionStage.id);
      console.log(result)
      if (result === "Transaction updated successfully") {
          const result3 = await addNotificationLeadClient(transaction.leadClient.id, notificationNextStage);
          fetchTransactions();
      } else {
        if (result === "Transaction finished") {
          const result3 = await addNotificationLeadClient(transaction.leadClient.id, notificationTransactionFinished);
          fetchTransactions();
        } else console.error(`Error updating transaction: ${result.message}`);
      }
  } catch (error) {
      setErrorMessage(error.message);
  }
  setTimeout(() => {
      setSuccessMessage(""); 
      setErrorMessage("");
  }, 3000);
}
const [notificationNextStage, setnotificationNextStage] = useState({
  name: "Новый этап сделки",
  notification: "Сделка с объектом недвижимости перешла на новый этап"
});
const [notificationTransactionFinished, setNotificationTransactionFinished] = useState({
    name: "Сделка завершена",
    notification: "Поздравляем, Ваша сделка на покупку объекта недвижимости успешно завершена. Были рады видеть Вас в качестве нашего клиента"
  });
  
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleList = () => {
      setIsOpen(!isOpen);
    };
  
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
          <SList>
        <SStagesButton onClick={toggleList}>
          {isOpen ? 'Скрыть список этапов' : 'Показать список этапов'}
        </SStagesButton>
        {isOpen && (
          <>
          <SDivStages>
            {transactionStages.map((transactionStage) => (
              <SStages key={transactionStage.id}>
                {transactionStage.id} {transactionStage.stageName}
              </SStages>
            ))}
          </SDivStages>
          <SHr />
          </>
        )}
      </SList>
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
                  {pageData.map((transaction, index) => (
                      <STr key={transaction.id}>
                          <STd key={index}>{index+1}</STd>
                          <STd>
                          <SSpan 
                              onClick={() => handleObjectClick(transaction.realEstateObject)}
                          >
                              {transaction.realEstateObject.name}
                          </SSpan>
                          </STd>
                          <STd>{transaction.leadClient.secondName} {transaction.leadClient.firstName}</STd>
                          <STd>{transaction.stageDate[2]}.{transaction.stageDate[1]}.{transaction.stageDate[0]}</STd>
                          <STd>{transaction.transactionStage.id == transactionStages.length ? "Сделка завершена" : transaction.transactionStage.stageName}</STd>                       
                          <STd>
                          <STd>
                          <Button 
                              onClick={() => handleUpdate(transaction)}
                              disabled={transaction.transactionStage.id == transactionStages.length} 
                              >
                              Следующий этап
                            </Button>
                          </STd>
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
    
    export default RealtorInfoTransactions;