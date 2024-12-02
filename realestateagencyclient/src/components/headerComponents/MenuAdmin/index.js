import React, { useContext } from "react"
import { AuthContext } from "../../auth/AuthProvider"
import {useNavigate } from "react-router-dom"
import { SSection, SA, SSpacer, SImage, SExit, SIoMdExit, SADiv } from './styled';
import logo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/logo_footer.png"


const MenuAdmin = () => {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.handleLogout()
    navigate("/", { state: { message: " You have been logged out!" } })
  }


  return (
    <SSection>

      <SA href='/'>
        <SImage src={logo}/>
      </SA>
      

      <SADiv>
        <SA href='/admin/users' isActive={window.location.pathname === '/admin/users'}>Пользователи</SA>
        <SA href='/admin/realtors' isActive={window.location.pathname === '/admin/realtors'}>Риэлторы</SA>
      </SADiv>


      <SSpacer></SSpacer>
      <SA onClick={handleLogout}>
        <SExit>Выйти <SIoMdExit /></SExit>
      </SA>
      
    </SSection>
  );
};

export default MenuAdmin;