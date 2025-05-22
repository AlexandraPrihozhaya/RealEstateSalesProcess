import React from 'react';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorInfoTransactions from '../RealtorInfoTransactions';
import { SSection } from './styled';

const RealtorTransactions = () => {

  return (
      <SSection>
            <MenuRealtor />
            <RealtorInfoTransactions />
      </SSection>
  );
};

export default RealtorTransactions;