import React from 'react';
import MenuAdmin from '../../headerComponents/MenuAdmin';
import { SSection } from './styled';
import RealtorInfo from '../RealtorInfo';

const RealtorInfoBlock = () => {

  return (
      <SSection>
            <MenuAdmin />
            <RealtorInfo />
      </SSection>
  );
};

export default RealtorInfoBlock;