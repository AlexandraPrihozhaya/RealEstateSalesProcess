import React from 'react';
import { SDiv, SImage, SH3, SP } from './styled';

const Service = ({ photoUrl, name, text }) => {
  return (
    <SDiv>
		<SImage src={photoUrl} alt="Time"/>
		<SH3>
			{name}
		</SH3>
		<SP>
			{text}
		</SP>
	</SDiv>
  );
};

export default Service;

