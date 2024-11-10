import styled from 'styled-components';

export const SSection = styled.section`
  padding: 40px 200px;
  background: white;
  text-align: center;
`;

export const SH2 = styled.h2`
  font-size: 40px;
`;

export const SP = styled.p`

`;

export const SDivTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const SDivTeamMember = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const SImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const SH3 = styled.h3`
  color: #ff8a00;
`;

export const SText = styled.p`

`;