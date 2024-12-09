import React, { useEffect, useState } from "react";
import { getRealtorById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, STable, SThead, STbody, STr, SHead, STh, STd, SButton, SForm, SInput } from './styled';
import { deleteRealtor, changeRealtor } from '../../utils/ApiFunctions';
import { useNavigate } from "react-router-dom";

const RealtorInfo = () => {

  const [realtor, setRealtor] = useState({
    id: "",
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: "",
    user: {id: "", email: ""}
})


const { realtorId } = useParams()
const [errorMessage, setErrorMessage] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const navigate = useNavigate();



const fetchRealtor = async () => {
  try {
      const realtorData = await getRealtorById(realtorId)
      setRealtor(realtorData)
  } catch (error) {
      console.error(error)
  }
}


useEffect(() => {
  fetchRealtor()
}, [realtorId])




const handleDelete = async (realtorId) => {
    try {
      const result = await deleteRealtor(realtorId);
      if (result === "Realtor deleted successfully") {
        setSuccessMessage(
          `Риэлтор с id ${realtorId} был удален`
        );
        navigate("/admin/realtors");
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
  };


  const handleChange = async (e) => {
    e.preventDefault()
    try {
      const result = await changeRealtor(realtorId, realtor)
      setSuccessMessage("Вы успешно отредактировали риэлтора")
      fetchRealtor();
      setErrorMessage("")
    } catch (error) {
      setSuccessMessage("")
      setErrorMessage(`Ошибка изменения: ${error.message}`)
    }
    setTimeout(() => {
      setErrorMessage("")
      setSuccessMessage("")
    }, 5000)
  };


  const handleInputChange = (e) => {
    setRealtor({ ...realtor, [e.target.name]: e.target.value })
  }




  return (
    <SSection>
      <SForm onSubmit={handleChange}>
        <STable>
          <SThead>
            <STr>
              <SHead colspan="2">Информация о риэлторе</SHead>
            </STr>
          </SThead>
          <STbody>
            <STr>
              <STh>ID</STh>
              <STd><SInput type="text" className="inp" name="id" disabled="true" value={realtor.id}/></STd>
            </STr>
            <STr>
              <STh>Фамилия</STh>
              <STd><SInput type="text" className="inp" name="secondName" value={realtor.secondName} onChange={handleInputChange}/></STd>
            </STr>
            <STr>
              <STh>Имя</STh>
              <STd><SInput type="text" className="inp" name="firstName" value={realtor.firstName} onChange={handleInputChange}/></STd>
            </STr>
            <STr>
              <STh>Отчество</STh>
              <STd><SInput type="text" className="inp" name="patronymic" value={realtor.patronymic} onChange={handleInputChange}/></STd>
            </STr>
            <STr>
              <STh>Email</STh>
              <STd><SInput type="email" className="inp" name="email" disabled="true" value={realtor.user.email}/></STd>
            </STr>
            <STr>
              <STh>Телефон</STh>
              <STd><SInput type="tel" className="inp" name="phoneNumber" value={realtor.phoneNumber} onChange={handleInputChange}/></STd>
            </STr>
            <STr>
              <STh>Действия</STh>
              <STd>
                <SButton type="submit">Изменить</SButton>
                <SButton onClick={() => handleDelete(realtor.id)}>Удалить</SButton>
              </STd>
            </STr>
          </STbody>
        </STable>
      </SForm>
      <div>
         {successMessage && <p>{successMessage}</p>}
         {errorMessage && <p>Ошибка выполнения запроса</p>}
       </div>
    </SSection>
  );
};

export default RealtorInfo;