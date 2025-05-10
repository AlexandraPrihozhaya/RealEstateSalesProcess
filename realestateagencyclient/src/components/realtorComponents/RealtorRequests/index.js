import React from 'react';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorInfoRequests from '../RealtorInfoRequests';
import { SSection } from './styled';

const RealtorRequests = () => {

  return (
      <SSection>
            <MenuRealtor />
            <RealtorInfoRequests />
      </SSection>
  );
};

export default RealtorRequests;