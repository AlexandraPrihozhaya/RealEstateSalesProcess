import styled from 'styled-components';

export const SSection = styled.section`
  display: flex;
`;

export const SCard = styled.div`
  flex: 1;
  margin: 10px;
  text-align: center;
  box-shadow: 0px 2px 3px rgba(114, 114, 114, 0.5);
  overflow: hidden;
`;

export const STitle = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  padding: 15px;
  padding-bottom: 60px;
  color: #ffffff;
  background-color: #ff8a00;
`;

export const SIcon = styled.div`
  box-sizing: border-box;
  font-size: 35px;
  font-weight: bold;
  background-color: #000000;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #fdf7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -60px auto 0px auto;
  z-index: 2;
  position: relative;
  box-shadow: inset 0px -10px 8px -8px rgba(154, 154, 154, 0.51);
  background-color: #ff8a00;
`;

export const SInfo = styled.div`
  padding: 15px;
  padding-top: 45px;
  margin-top: -45px;
  background-color: #ffffff;
  box-shadow: 0px -2px 2px rgba(181, 181, 181, 0.15);
`;

export const SUl = styled.ul`
  text-align: left;
`;


export const SLi = styled.li`
  list-style-type: circle;
`;