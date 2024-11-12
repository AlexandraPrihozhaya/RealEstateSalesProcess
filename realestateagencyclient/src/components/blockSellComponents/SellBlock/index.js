import React, { useState } from 'react';
import { SSection, SButton, SH1, SDiv, SDiv1, SDiv2 } from './styled';
import SellForm from '../SellForm';
    

const SellBlock = () => {

  const [showFormOffers, setShowFormOffers] = useState(false);

  const handleButtonClick = () => {
    setShowFormOffers(!showFormOffers);
  };

  return (
    <SSection>
     <SDiv>
      <SDiv1></SDiv1>
      <SDiv2>
      <SH1>Желаете продать недвижимость?</SH1> 
      <SButton onClick={handleButtonClick}>
        {showFormOffers ? 'Скрыть' : 'Продать'}
      </SButton>
      </SDiv2>
      </SDiv>
      {showFormOffers && <SellForm/>}
    </SSection>
  );
};

export default SellBlock;