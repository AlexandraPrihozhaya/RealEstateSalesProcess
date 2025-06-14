import React, { useContext } from "react"
import { AuthContext } from "../../auth/AuthProvider"
import {useNavigate } from "react-router-dom"
import { SSection, SA, SSpacer, SImage, SExit, SIoMdExit, SADiv } from './styled';
import logo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/logo_footer.png"


const MenuRealtor = () => {

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
        <SA href='/realtor/account' isActive={window.location.pathname === '/realtor/account'}>Профиль</SA>
        <SA href='/realtor/leads' isActive={window.location.pathname === '/realtor/leads'}>Лиды</SA>
        <SA href='/admin/users' isActive={window.location.pathname === '/admin/users'}>Клиенты</SA>
        <SA href='/realtor/callRequests' isActive={window.location.pathname === '/realtor/callRequests'}>Звонки</SA>
        <SA href='/realtor/requests' isActive={window.location.pathname === '/realtor/requests'}>Заявки</SA>
        <SA href='/realtor/transactions' isActive={window.location.pathname === '/realtor/transactions'}>Сделки</SA>
        <SA href='/realtor/statistics' isActive={window.location.pathname === '/realtor/statistics'}>Аналитика</SA>
      </SADiv>
      <SSpacer></SSpacer>
      <SA onClick={handleLogout}>
        <SExit>Выйти <SIoMdExit /></SExit>
      </SA>
      
    </SSection>
  );
};

export default MenuRealtor;