import React from 'react';
import { SSection } from './styled';
import AboutUsPhoto from '../AboutUsPhoto';
import AboutUsText from '../AboutUsText';


const BlockAboutUs = () => {
  return (
    <SSection>
      <AboutUsText />
      <AboutUsPhoto />
    </SSection>
  );
};

export default BlockAboutUs;