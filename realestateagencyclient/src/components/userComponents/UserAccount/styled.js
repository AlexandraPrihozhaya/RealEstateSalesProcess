import styled from 'styled-components';

export const SSection = styled.section`
    display: column;
    margin: 40px 200px;
    background: #fff;
`;

export const SNav = styled.div`
    
`;

export const SUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: start; 
    margin: 0;
    padding: 0;
`;

export const SLi = styled.li`
    background: ${props => (props.selected ? '#e5e5e5' : '#ff8a00')};
    color: ${props => (props.selected ? '#000' : '#fff')};
    font-weight: 300;
    padding: 10px 20px;
    border-radius: 10px 10px 0 0;
`;

export const SDivContent = styled.div`
    background: #e5e5e5;
    margin-bottom: 40px;
`;