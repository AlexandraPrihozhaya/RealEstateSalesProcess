import React from 'react';
import { SSection, SForm, SInput, SLabel, SButton, SDiv, SDivPicture, SDivInput } from './styled';

const RealtorAccountBlock = () => {

  return (
      <SSection>
        <SDiv>
          <SForm>
            <SDivInput>
              <SLabel htmlFor="lastName">Фамилия</SLabel>
              <SInput type="text" id="lastName"/>
            </SDivInput>
            <SDivInput>
              <SLabel htmlFor="firstName">Имя</SLabel>
              <SInput type="text" id="firstName"/>
            </SDivInput>
            <SDivInput>
              <SLabel htmlFor="middleName">Отчество</SLabel>
            < SInput type="text" id="middleName"/>
            </SDivInput>
            <SDivInput>
              <SLabel htmlFor="email">Email</SLabel>
              <SInput type="email" id="email"/>
            </SDivInput>
            <SDivInput>
              <SLabel htmlFor="phone">Телефон</SLabel>
            < SInput type="tel" id="phone"/>
            </SDivInput>
          <SButton>Сохранить</SButton>
        </SForm>
      </SDiv>
      <SDivPicture />
      </SSection>
  );
};

export default RealtorAccountBlock;