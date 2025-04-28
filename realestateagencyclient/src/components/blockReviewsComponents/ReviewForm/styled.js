import styled from 'styled-components';

export const SSection = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 200px 40px 200px;
    background-color: #f5f5f5;
`;

export const SForm = styled.form`
    padding: 0 30px 20px 30px;
`;

export const SFormData = styled.div`
    background: #f5f5f5;   
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const SInput = styled.input`
    background: #fff;
    border: none;
    padding: 12px 15px;
    width: 100%;
    margin: 5px 0;
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
    margin: 15px 0;

    &:active {
        transform: scale(.95);
    }

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
    
`;


export const STextarea = styled.textarea`
  background: #fff;
  border: none;
  padding: 12px 15px;
  width: 100%;
  margin: 5px 0;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  min-height: 100px;
`;

export const SLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #333;
  align-self: flex-start;
`;

export const SStarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const SStar = styled.span`
  font-size: 30px;
  color: ${props => (props.selected ? '#FFD700' : '#ccc')};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ffcc00;
  }
`;

export const SText = styled.text`

`;

export const SA = styled.a`
    color: #ff8a00;
`;