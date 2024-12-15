import React from 'react';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import LeadInfo from '../LeadInfo';
import { SSection } from './styled';

const LeadInfoBlock = () => {

  return (
      <SSection>
            <MenuRealtor />
            <LeadInfo />
      </SSection>
  );
};

export default LeadInfoBlock;