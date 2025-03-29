import styled from 'styled-components';

export const SSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    height: 100vh;

    @media screen and (min-width: 1024px) {
        grid-template-columns: 15% 85%;
      }
`;