import React from 'react';
import { SSection } from './styled';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorInfoLeads from '../RealtorInfoLeads';

const RealtorLeads = () => {

  return (
      <SSection>
            <MenuRealtor />
            <RealtorInfoLeads />
      </SSection>
  );
};

export default RealtorLeads;