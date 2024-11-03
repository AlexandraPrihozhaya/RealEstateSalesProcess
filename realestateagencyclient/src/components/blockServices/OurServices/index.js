import React from 'react';
import { SSection, SH1, SDivServices, SDivService, SImg, SH3, SP} from './styled';
import iconsearch from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/iconsearch.png"
import iconevaluation from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/iconevaluation.png"
import icondocuments from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/icondocuments.png"
import iconnegotiations from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/iconnegotiations.png"
import iconlaw from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/iconlaw.png"



const OurServices = () => {
  return (
    <SSection>
        <SH1>Наши услуги</SH1>
        <SDivServices>
        <SDivService>
            <SImg src={iconsearch} alt="Поиск недвижимости"/>
            <SH3>Помощь в поиске идеального дома, квартиры или участка</SH3>
            <SP>Мы учитываем ваши потребности и бюджет, чтобы найти идеальный вариант.</SP>
        </SDivService>
        <SDivService>
            <SImg src={iconevaluation} alt="Оценка недвижимости"/>
            <SH3>Профессиональная оценка недвижимости</SH3>
            <SP>Точная оценка стоимости недвижимости для выгодной сделки.</SP>
        </SDivService>
        <SDivService>
            <SImg src={icondocuments} alt="Подготовка документов"/>
            <SH3>Подготовка документов для сделки</SH3>
            <SP>Мы позаботимся о всех юридических нюансах.</SP>
        </SDivService>
        <SDivService>
            <SImg src={iconnegotiations} alt="Переговоры"/>
            <SH3>Ведение переговоров с продавцом/покупателем</SH3>
            <SP>Достижение оптимальных условий для обеих сторон.</SP>
        </SDivService>
        <SDivService>
            <SImg src={iconlaw} alt="Юридическое сопровождение"/>
            <SH3>Юридическое сопровождение сделки</SH3>
            <SP>Полная защита ваших интересов на всех этапах сделки.</SP>
        </SDivService>
    </SDivServices>
    </SSection>
  );
};

export default OurServices;