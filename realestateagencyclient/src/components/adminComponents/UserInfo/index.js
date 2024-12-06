import React, { useEffect, useState } from "react";
import { getUserById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, STable, SThead, STbody, STr, SHead, STh, STd, SUl, SLi, SText, SButton } from './styled';
import { deleteUser, updateUser } from '../../utils/ApiFunctions';
import { useNavigate } from "react-router-dom";

const UserInfo = () => {

  const [user, setUser] = useState({
    id: "",
    email: "",
    roles: [{ id: "", name: "" }]
})


const { userId } = useParams()
const [errorMessage, setErrorMessage] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const navigate = useNavigate();




const fetchUser = async () => {
  try {
      const userData = await getUserById(userId)
      setUser(userData)
  } catch (error) {
      console.error(error)
  }
}


useEffect(() => {
    fetchUser()
}, [userId])


const handleDelete = async (userId) => {
    try {
      const result = await deleteUser(userId);
      if (result === "User deleted successfully") {
        setSuccessMessage(
          `Пользователь с email ${userId} был удален`
        );
        navigate("/admin/users");
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
  };

  const handleUpdate = async (userId) => {
    try {
        const result = await updateUser(userId)
        if (result === "User updated successfully") {
            setSuccessMessage(`User with email ${userId} was update`)
            fetchUser();
        } else {
            console.error(`Error updating user : ${result.message}`)
        }
    } catch (error) {
        setErrorMessage(error.message)
    }
    setTimeout(() => {
        setSuccessMessage("")
        setErrorMessage("")
    }, 3000)
  }


  return (
    <SSection>
      <STable>
        <SThead>
          <STr>
            <SHead colspan="2">Информация о пользователе</SHead>
          </STr>
        </SThead>
        <STbody>
          <STr>
            <STh>ID</STh>
            <STd>{user.id}</STd>
          </STr>
          <STr>
            <STh>Email</STh>
            <STd>{user.email}</STd>
          </STr>
          <STr>
            <STh>Роли</STh>
            <STd>
              <SUl>
                {user.roles.map((role) => (
                  <SLi key={role.id}>
                    {role.name === "ROLE_USER" && (
                      <SText>Пользователь</SText>
                      )}
                    {role.name === "ROLE_REALTOR" && (
                      <SText>Риэлтор</SText>
                      )}
                    {role.name === "ROLE_ADMIN" && (
                      <SText>Администратор</SText>
                      )}
                  </SLi>
                ))}
              </SUl>
            </STd>
          </STr>
          <STr>
            <STh>Действия</STh>
            <STd>
              <SButton onClick={() => handleUpdate(user.email)}>Изменить</SButton>
              <SButton onClick={() => handleDelete(user.email)}>Удалить</SButton>
            </STd>
          </STr>
        </STbody>
      </STable>
    </SSection>
  );
};

export default UserInfo;