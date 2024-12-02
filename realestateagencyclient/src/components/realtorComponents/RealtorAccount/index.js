import React from 'react';
import { SSection } from './styled';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorAccountBlock from '../RealtorAccountBlock';

const RealtorAccount = () => {

  return (
      <SSection>
          <MenuRealtor />
          <RealtorAccountBlock />
      </SSection>
  );
};

export default RealtorAccount;