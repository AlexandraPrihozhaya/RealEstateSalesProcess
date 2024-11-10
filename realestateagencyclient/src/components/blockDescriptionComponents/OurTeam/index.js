import React from 'react';
import { SSection, SH2, SP, SDivTeam, SDivTeamMember, SImage, SH3, SText } from './styled';

const OurTeam = () => {
    
  return (
    <SSection>
      <SH2>Наша миссия</SH2>
      <SP>Мы стремимся помочь вам найти идеальное жилье и сделать процесс покупки или аренды максимально комфортным.</SP>
      <SH2>Наша команда</SH2>
        <SDivTeam>
          <SDivTeamMember>
            <SImage src="https://img.freepik.com/free-photo/portrait-handsome-young-man-closeup_176420-15568.jpg?semt=ais_hybrid" alt="Агент 1"/>
            <SH3>Иван Иванов</SH3>
            <SText>Старший риэлтор с 10-летним опытом работы в отрасли.</SText>
          </SDivTeamMember>
          <SDivTeamMember>
            <SImage src="https://img.freepik.com/premium-photo/beautiful-happy-asian-girl-realtor-near-modern-house_826801-7277.jpg" alt="Агент 2"/>
            <SH3>Мария Петрова</SH3>
            <SText>Специалист по коммерческой недвижимости.</SText>
          </SDivTeamMember>
          <SDivTeamMember>
            <SImage src="https://img.freepik.com/foto-gratis/chico-caucasico-atractivo-seguro-beige-pullon-sonriendo-ampliamente-mientras-esta-pie-contra-gris_176420-44508.jpg" alt="Агент 3"/>
            <SH3>Елена Сидорова</SH3>
            <SText>Эксперт по residential недвижимости.</SText>
          </SDivTeamMember>
          <SDivTeamMember>
            <SImage src="https://img.freepik.com/foto-gratis/chico-caucasico-atractivo-seguro-beige-pullon-sonriendo-ampliamente-mientras-esta-pie-contra-gris_176420-44508.jpg" alt="Агент 4"/>
            <SH3>Елена Сидорова</SH3>
            <SText>Эксперт по residential недвижимости.</SText>
          </SDivTeamMember>
        </SDivTeam>
    </SSection>
  );
};

export default OurTeam;