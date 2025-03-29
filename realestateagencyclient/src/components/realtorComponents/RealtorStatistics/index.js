import React from 'react';
import { SSection } from './styled';
import MenuRealtor from '../../headerComponents/MenuRealtor';
import RealtorStatisticsBlock from '../RealtorStatisticsBlock';

const RealtorStatistics = () => {

  return (
      <SSection>
            <MenuRealtor />
            <RealtorStatisticsBlock />
      </SSection>
  );
};

export default RealtorStatistics;
