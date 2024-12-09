import styled from 'styled-components';

export const SSection = styled.section`
  padding: 30px;
`;

export const STable = styled.table`
  width: 100%;
`;

export const SThead = styled.thead`
  background: #3b3b3b;
  text-align: center;
`;

export const STbody = styled.tbody`

`;

export const STr = styled.tr`

`;

export const SHead = styled.th`
  padding: 20px 0;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
`;

export const STh = styled.th`
  text-align: right;
  padding: 10px 20px 10px 0;
  background: #efefef;
  font-weight: 500;
  width: 40%;
`;

export const STd = styled.td`
  text-align: left;
  padding: 10px 0 10px 20px;
  background: #efefef;
  font-weight: 300;
  width: 60%;
`;

export const SUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const SLi = styled.li`
  font-size: 14px;
  background-color: #dddddd;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const SText = styled.text`

`;

export const SButton = styled.button`
  border-radius: 10px;
  border: 1px solid #ff8a00;
  background: #ff8a00;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(.95);
  }
`;

export const SForm = styled.form`

`;

export const SInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 8px;
  font-size: 14px;
`;
