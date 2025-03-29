import React from 'react';
import { SSection, SH1 } from './styled';
import MyBarChart from '../MyBarChart';

const RealtorStatisticsBlock = () => {

  return (
      <SSection>
        <SH1>Количество поданных объявлений в зависимости от типа объекта недвижимости</SH1>
        <MyBarChart />
      </SSection>
  );
};

export default RealtorStatisticsBlock;