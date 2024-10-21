import styled from 'styled-components';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export const SAccordion = styled(Accordion)`
  
`;

export const SAccordionItem = styled(AccordionItem)`

`;

export const SAccordionItemHeading = styled(AccordionItemHeading)`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
  padding: 15px 5px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  font-weight: 500;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);;
    cursor: pointer;
  }
`;

export const SAccordionItemButton = styled(AccordionItemButton)`

`;

export const SAccordionItemPanel = styled(AccordionItemPanel)`
  color: #ffffff;
  font-size: 18px;
`;