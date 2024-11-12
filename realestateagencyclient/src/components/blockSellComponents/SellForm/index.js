import React from 'react';
import { SSection, SForm, SInput, SButton, SH1 } from './styled';
    

const SellForm = () => {

  return (
    <SSection>
      <SH1>
        Оставьте заявку - и вам перезвонят
      </SH1>
      <SForm>
        <SInput type="text" placeholder="Имя" />
        <SInput type="tel" placeholder="Телефон" />
        <SButton>Отправить</SButton>
      </SForm>
    </SSection>
  );
};

export default SellForm;