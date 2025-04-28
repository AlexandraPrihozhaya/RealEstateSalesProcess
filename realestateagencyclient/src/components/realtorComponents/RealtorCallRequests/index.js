import React from 'react';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorInfoCallRequests from '../RealtorInfoCallRequests';
import { SSection } from './styled';

const RealtorCallRequests = () => {

  return (
      <SSection>
            <MenuRealtor />
            <RealtorInfoCallRequests />
      </SSection>
  );
};

export default RealtorCallRequests;