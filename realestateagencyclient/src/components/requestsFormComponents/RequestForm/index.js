import React, { useState, useEffect } from 'react';
import { SSection, SForm, SInput, SButton, SH1 } from './styled';
    

const RequestForm = () => {

  return (
    <SSection>
      <SH1>
        Оставьте заявку - и вам перезвонят
      </SH1>
      <SForm>
        <SInput type="text" placeholder="Имя" />
        <SInput type="tel" placeholder="Телефон" />
        <SButton>Зарегистрироваться</SButton>
      </SForm>
    </SSection>
  );
};

export default RequestForm;
