import React from 'react';
import { SSection, SGraph, SBlockText, SImg, SP, SH2 } from './styled';
import photo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/graph.png"
import { VscDebugBreakpointLog } from "react-icons/vsc";

const GraphBlock = () => {
    return (
      <SSection>
          <SGraph><SImg src={photo}/></SGraph>
          <SBlockText>
              <SH2>Адрес успеха - ваш надежный партнер по недвижимости в Минске</SH2>
              <SP>
                  <VscDebugBreakpointLog /> С 2021 года мы задаем высокие стандарты в сфере недвижимости, 
                  ставя во главу угла исключительный сервис клиентов.
              </SP>
              <SP>
                  <VscDebugBreakpointLog /> Как лидер на рынке недвижимости Минска, мы продолжаем 
                  лидировать в отрасли, устанавливая новые стандарты: постоянный рост и развитие, инновационные 
                  решения в сфере недвижимости, помощь бесчисленным клиентам в достижении их целей в сфере недвижимости.
              </SP>
              <SP>
                  <VscDebugBreakpointLog /> Мы неустанно фокусируемся на совершенствовании и приобретении 
                  новых навыков, чтобы оставаться на передовой рынка недвижимости.
              </SP>
              <SP><VscDebugBreakpointLog /> Наша команда опытных риэлторов, обладающих обширными знаниями рынка, 
                обеспечивает индивидуальный подход и широкий спектр услуг. Команда привержена постоянному обучению, 
                гарантируя клиентам доступ к последним знаниям и тенденциям в отрасли.
              </SP>
              <SP><VscDebugBreakpointLog /> Приверженность Адреса успеха инновациям и передовым технологиям 
                позволяет предлагать клиентам исключительный опыт. Благодаря этому клиенты могут легко 
                ориентироваться в рынке недвижимости и принимать обоснованные решения.
              </SP>
          </SBlockText>
      </SSection>
    );
  };
  
  export default GraphBlock;