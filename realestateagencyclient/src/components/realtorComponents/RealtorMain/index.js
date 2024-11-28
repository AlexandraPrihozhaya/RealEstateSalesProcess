import React from 'react';
import { SSection } from './styled';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorMainBlock from '../RealtorMainBlock';

const RealtorMain = () => {

  return (
      <SSection>
          <MenuRealtor />
          <RealtorMainBlock />
      </SSection>
  );
};

export default RealtorMain;