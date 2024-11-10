import React from 'react';
import { SSection } from './styled';
import TariffContract from '../TariffsContract';
import TariffRealEstateObject from '../TariffsRealEstateObject';
import CalculationForm from '../CalculationForm';



const PriceServices = () => {
  return (
    <SSection>
      <CalculationForm/>
      <TariffContract/>
      <TariffRealEstateObject />
    </SSection>
  );
};

export default PriceServices;