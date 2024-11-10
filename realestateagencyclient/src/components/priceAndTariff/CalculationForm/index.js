import React from 'react';
import { SH1 } from './styled';
import { SSection, SForm, SInput, SButton } from '../../requestsFormComponents/RequestForm/styled';



const CalculationForm = () => {
  return (
    <SSection>
      <SH1>
        Рассчитать стоимость риэлторских услуг
      </SH1>
      <SForm>
        <SInput type="text" placeholder="Имя" />
        <SInput type="tel" placeholder="Телефон" />
        <SInput type="text" placeholder="Стоимость объекта, USD" />
        <SButton>Рассчитать</SButton>
      </SForm>
    </SSection>
  );
};

export default CalculationForm;