import React from 'react';
import { SSection, SDivText, SDivPictures, SH1, SText } from './styled';
import BlockPhoto from '../BlockPhoto';

const BlockInfo = () => {
  return (
    <SSection>
      <SDivText>
        <SH1>
            Поможем управлять вашим бизнесом
        </SH1>
        <SText>
            Duis aute irure dolor в осуждении за сладострастие velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat not proident, sunt in culpa
        </SText>
      </SDivText>
      <SDivPictures>
        <BlockPhoto name="Консультации" photoUrl="https://stihi.ru/pics/2014/01/22/5554.jpg" />
        <BlockPhoto name="Маркетинг" photoUrl="https://flomaster.top/o/uploads/posts/2023-11/1700668726_flomaster-top-p-serie-tsveti-v-prirode-risunki-vkontakte-5.jpg" />
        <BlockPhoto name="Стратегия" photoUrl="https://avatanplus.com/files/resources/original/5782271c5f660155d468c6e7.jpg" />
        <BlockPhoto name="Стартапы" photoUrl="https://avatanplus.com/files/resources/original/59259b93ca84015c3ae7b976.jpg" />
        <BlockPhoto name="Инвестиции" photoUrl="https://kartinki.pics/uploads/posts/2022-03/thumbs/1647889192_60-kartinkin-net-p-serie-estetichnie-kartinki-65.jpg" />
        <BlockPhoto name="Антикризисный" photoUrl="https://kartinki.pics/uploads/posts/2022-03/thumbs/1647889159_10-kartinkin-net-p-serie-estetichnie-kartinki-12.jpg" />
      </SDivPictures>
    </SSection>
  );
};

export default BlockInfo;