import React from 'react';
import { SSection, SDivText, SDivPictures, SH1, SText } from './styled';
import BlockPhoto from '../BlockPhoto';

const BlockInfo = () => {
  return (
    <SSection>
      <SDivText>
        <SH1>
            Наша недвижимость
        </SH1>
        {/* <SText>
            Duis aute irure dolor в осуждении за сладострастие velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat not proident, sunt in culpa
        </SText> */}
      </SDivText>
      <SDivPictures>
        <BlockPhoto name="Консультации" photoUrl="https://kronas.com.ua/Media/files/filemanager/Blog-pics/sovremennaja-smart-kvartira/1.jpg" />
        <BlockPhoto name="Маркетинг" photoUrl="https://www.bobrlife.by/wp-content/uploads/2024/04/zaxpqr3erfsy4rzu4gkr5mmoi3lvj4f5.jpg" />
        <BlockPhoto name="Стратегия" photoUrl="https://cdn0.divan.ru/img/v1/KezAr7IWtPZdQlBKk8yhvEVaxBcLEFUH4rO2vCC0gIM/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNTI0NjU1MC5qcGc.jpg" />
        <BlockPhoto name="Стартапы" photoUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/327438946.jpg?k=f4e245488852c1ed4950faee9babd74a2403a273c5963a2da215dc03bcfcc0bb&o=&hp=1" />
        <BlockPhoto name="Инвестиции" photoUrl="https://cdn0.divan.ru/img/v1/ONootYir3il99xLEI5srV3W5TqymsCjJTmAYbCKomLU/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNTI0NjM4NC5qcGc.jpg" />
        <BlockPhoto name="Антикризисный" photoUrl="https://www.pufikhomes.com/wp-content/uploads/2017/04/sovremennaya-kvartira-v-vilniuse-81sqm-pufikhomes-1.jpg" />
      </SDivPictures>
    </SSection>
  );
};

export default BlockInfo;
