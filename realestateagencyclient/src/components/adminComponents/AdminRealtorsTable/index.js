import React, { useState, useEffect } from 'react';
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, STable, SThead, 
    STr, STh, STbody, STd, SUl, SLi, STextRole, SButtonTask, 
    SModal, SDialog, SBtns, SAiOutlineClose, SClose, SButtonModal, SLink,
    SForm, SInput, SButtonForm } from './styled';
import { GrPrevious, GrNext } from "react-icons/gr";
import { getAllRealtors, deleteRealtor, changeRealtor } from '../../utils/ApiFunctions';
import { SiQuicklook } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminRealtorsTable = () => {

    const [realtors, setRealtors] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [realtorIdToDelete, setRealtorIdToDelete] = useState(null);

    const [isModalChangeOpen, setIsModalChangeOpen] = useState(false);
    const [realtorIdToChange, setRealtorIdToChange] = useState(null);
  
  useEffect(() => {
      fetchRealtors()
    }, [])
  
    const fetchRealtors = async () => {
      setIsLoading(true)
      try {
        const result = await getAllRealtors()
        setRealtors(result)
        setIsLoading(false)
      } catch (error) {
        setErrorMessage(error.message)
        setIsLoading(false)
      }
    }

  const columns = ['№', 'Фамилия', 'Имя', 'Отчество', 'Email', 'Телефон', 'Подробная информация', 'Редактирование', 'Удаление'];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(realtors.length / itemsPerPage);

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
const pageData = realtors.slice(startIndex, endIndex);

const handleDelete = async (realtorId) => {
    setRealtorIdToDelete(realtorId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleConfirmDelete = async () => {
    try {
      const result = await deleteRealtor(realtorIdToDelete);
      if (result === "Realtor deleted successfully") {
        setSuccessMessage(
          `Риэлтор с id ${realtorIdToDelete} был удален`
        );
        fetchRealtors();
      } else {
        console.error(`Error deleting realtor : ${result.message}`);
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

  const handleChange = async (realtor) => {
    editing.secondName = realtor.secondName;
    editing.firstName = realtor.firstName;
    editing.patronymic = realtor.patronymic;
    editing.phoneNumber = realtor.phoneNumber;
    setRealtorIdToChange(realtor.id);
    setIsModalChangeOpen(true);
  };

  const handleModalChangeClose = () => {
    setIsModalChangeOpen(false);
  };

  const [editing, setEditing] = useState({
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: ""
  })

  const handleInputChangeEditing = (e) => {
    setEditing({ ...editing, [e.target.name]: e.target.value })
  }
  const handleConfirmEditing = async (e) => {
    e.preventDefault()
    try {
      const result = await changeRealtor(realtorIdToChange, editing)
      setSuccessMessage("Вы успешно отредактировали риэлтора")
      fetchRealtors();
      handleModalChangeClose();
      setErrorMessage("")
      setEditing({ secondName: "", firstName: "", patronymic: "", phoneNumber: "" })
    } catch (error) {
      setSuccessMessage("")
      setErrorMessage(`Ошибка изменения: ${error.message}`)
    }
    setTimeout(() => {
      setErrorMessage("")
      setSuccessMessage("")
    }, 5000)
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
                {pageData.map((realtor, index) => (
                    <STr key={realtor.id}>
                        <STd key={index}>{index+1}</STd>
                        <STd>{realtor.secondName}</STd>
                        <STd>{realtor.firstName}</STd>
                        <STd>{realtor.patronymic}</STd>
                        <STd>{realtor.user.email}</STd>
                        <STd>{realtor.phoneNumber}</STd>
                        <STd>
                        <SButtonTask><SLink to={`/admin/realtors/${realtor.id}`}><SiQuicklook /></SLink></SButtonTask>
                        </STd>
                        <STd>
                            <SButtonTask onClick={() => handleChange(realtor)}><FaEdit /></SButtonTask>
                        </STd>
                        <STd>
                            <SButtonTask onClick={() => handleDelete(realtor.id)}><MdDelete /></SButtonTask>
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
            <SText>Вы действительно хотите удалить риэлтора с id {realtorIdToDelete}?</SText>
            <SBtns>
                <SButtonModal onClick={handleConfirmDelete}>Да</SButtonModal>
                <SButtonModal onClick={handleModalClose}>Нет</SButtonModal>
            </SBtns>
          </SDialog>
        </SModal>
      )}</>
      <>{isModalChangeOpen && (
        <SModal>
          <SDialog>
            <SClose>
                <SAiOutlineClose onClick={handleModalChangeClose} />
            </SClose>
              <SForm onSubmit={handleConfirmEditing}>
              <SInput type="text" id="secondName" name="secondName" placeholder="Фамилия" value={editing.secondName} onChange={handleInputChangeEditing}/>
              <SInput type="text" id="firstName" name="firstName" placeholder="Имя" value={editing.firstName} onChange={handleInputChangeEditing}/>
              <SInput type="text" id="patronymic" name="patronymic" placeholder="Отчество" value={editing.patronymic} onChange={handleInputChangeEditing}/>
              <SInput type="tel" id="phoneNumber" name="phoneNumber" placeholder="Телефон" value={editing.phoneNumber} onChange={handleInputChangeEditing}/>
              <SButtonForm type='submit'>Сохранить</SButtonForm>
            </SForm>
          </SDialog>
        </SModal>
      )}</>
      </>
  );
};

export default AdminRealtorsTable;