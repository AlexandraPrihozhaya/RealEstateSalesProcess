import React, { useState, useEffect } from 'react';
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, STable, SThead, 
    STr, STh, STbody, STd, SUl, SLi, STextRole, SButtonTask, 
    SModal, SDialog, SBtns, SAiOutlineClose, SClose, SButtonModal, SLink } from './styled';
import { GrPrevious, GrNext } from "react-icons/gr";
import { getAllUsers, deleteUser } from '../../utils/ApiFunctions';
import { SiQuicklook } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const RealtorInfoLeads = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);
  
  useEffect(() => {
      fetchUsers()
    }, [])
  
    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const result = await getAllUsers()
        setUsers(result)
        setIsLoading(false)
      } catch (error) {
        setErrorMessage(error.message)
        setIsLoading(false)
      }
    }

  const columns = ['№', 'Email', 'Роли', 'Подробная информация', 'Редактирование', 'Удаление'];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(users.length / itemsPerPage);

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
const pageData = users.slice(startIndex, endIndex);

const handleDelete = async (userId) => {
    setUserIdToDelete(userId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const result = await deleteUser(userIdToDelete);
      if (result === "User deleted successfully") {
        setSuccessMessage(
          `Пользователь с email ${userIdToDelete} был удален`
        );
        fetchUsers();
      } else {
        console.error(`Error deleting user : ${result.message}`);
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

  return (
    <>
      <SSection isModalOpen={isModalOpen}>
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
                {pageData.map((user, index) => (
                    <STr key={user.id}>
                        <STd key={index}>{index+1}</STd>
                        <STd>{user.email}</STd>
                        <STd>
                            <SUl>
                                {user.roles.map((role) => (
                                    <SLi key={role.id}>
                                        {role.name === "ROLE_USER" && (
                                            <STextRole>Пользователь</STextRole>
                                        )}
                                        {role.name === "ROLE_MANAGER" && (
                                            <STextRole>Менеджер</STextRole>
                                        )}
                                        {role.name === "ROLE_ADMIN" && (
                                            <STextRole>Администратор</STextRole>
                                        )}
                                    </SLi>
                                ))}
                            </SUl>
                        </STd>
                        <STd>
                        <SButtonTask><SLink to={`/admin/users/${user.id}`}><SiQuicklook /></SLink></SButtonTask>
                        </STd>
                        <STd>
                            <SButtonTask><FaEdit /></SButtonTask>
                        </STd>
                        <STd>
                            <SButtonTask onClick={() => handleDelete(user.email)}><MdDelete /></SButtonTask>
                        </STd>
                        </STr>
                ))}
            </STbody> 
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
            <SText>Вы действительно хотите удалить пользователя с email {userIdToDelete}?</SText>
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

export default RealtorInfoLeads;