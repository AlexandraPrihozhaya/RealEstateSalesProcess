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
    STD
} from './styled';
import { getLeadClientByEmail } from '../../utils/ApiFunctions';
import { GrPrevious, GrNext } from "react-icons/gr";

const UserTransactions = () => {
    const userId = localStorage.getItem("userId");

    const [clientInfo, setClientInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const clientData = await getLeadClientByEmail(userId);
            setClientInfo(clientData);
            setTransactions(clientData.transactions || []); 
            console.log(clientData.transactions);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

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

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1); 
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = transactions.slice(startIndex, endIndex);

    if (!clientInfo || transactions.length === 0) {
        return <SDivText>Нет сделок для отображения</SDivText>;
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
                                <STH>Объект недвижимости</STH>
                                <STH>Дата начала</STH>
                                <STH>Этап</STH>
                            </STHeadRow>
                        </STHead>
                        <STBody>
                            {pageData.map((transaction) => (
                                <STR key={transaction.id}>
                                    <STD>{transaction.realEstateObject.name}</STD>
                                    <STD>
                                    {transaction.transactionDate && transaction.transactionDate.length > 0 
                                            ? `${transaction.transactionDate[2]}.${transaction.transactionDate[1]}.${transaction.transactionDate[0]}`
                                            : 'Н/A'}
                                    </STD>
                                    <STD>{transaction.stageDisplayName}</STD>
                                </STR>
                            ))}
                        </STBody>
                    </STable>
                </>
            )}
        </SSection>
    );
};
export default UserTransactions;