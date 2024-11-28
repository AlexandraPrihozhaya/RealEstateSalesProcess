import React from 'react';
import { SSection, SImage, SH1, SP } from './styled';
import admin from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/admin.png"

const RealtorMainBlock = () => {

  return (
      <SSection>
        <SImage src={admin}/>
        <SH1>Добро пожаловать!</SH1>
        <SP>Это панель риэлтора. Здесь вы можете управлять лидами, клиентами, заявками и сделками.</SP>
      </SSection>
  );
};

export default RealtorMainBlock;