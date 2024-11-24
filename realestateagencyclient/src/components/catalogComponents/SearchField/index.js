import React from 'react';
import { SSection, SForm, SFormGroup, SLabel, SSelect, SFormInput, SOption, SInput, SButton } from './styled';

const SearchField = () => {
  return (
    <SSection>
        <SForm action="#">
            <SFormGroup>
                <SLabel for="type">Тип недвижимости:</SLabel>
                <SSelect id="type">
                    <SOption value="all">Все</SOption>
                    <SOption value="apartment">Квартира</SOption>
                    <SOption value="house">Дом</SOption>
                    <SOption value="land">Участок</SOption>
                </SSelect>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="city">Населенный пункт:</SLabel>
                <SSelect id="city">
                    <SOption value="all">Все</SOption>
                    <SOption value="minsk">Минск</SOption>
                    <SOption value="vitebsk">Витебск</SOption>
                    <SOption value="gomel">Гомель</SOption>
                </SSelect>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="district">Микрорайон:</SLabel>
                <SSelect id="district">
                    <SOption value="all">Все</SOption>
                    <SOption value="center">Центр</SOption>
                    <SOption value="sokol">Сокол</SOption>
                    <SOption value="ural">Урал</SOption>
                </SSelect>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="price">Цена (в у.е.):</SLabel>
                <SFormInput>
                    <SInput type="number" id="price" placeholder="от"/>
                    <SInput type="number" id="price" placeholder="до"/>
                </SFormInput>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="rooms">Количество комнат:</SLabel>
                <SSelect id="rooms">
                    <SOption value="all">Все</SOption>
                    <SOption value="1">1</SOption>
                    <SOption value="2">2</SOption>
                    <SOption value="3">3</SOption>
                </SSelect>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="area">Площадь (кв.м.):</SLabel>
                <SFormInput>
                    <SInput type="number" id="area" placeholder="от"/>
                    <SInput type="number" id="area" placeholder="до"/>
                </SFormInput>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="street">Название улицы:</SLabel>
                <SFormInput>
                    <SInput type="text" id="street" placeholder="Введите название улицы"/>
                </SFormInput>
            </SFormGroup>
            <SFormGroup>
                <SLabel for="year">Год постройки:</SLabel>
                <SFormInput>
                    <SInput type="number" id="year" placeholder="от"/>
                    <SInput type="number" id="year" placeholder="до"/>
                </SFormInput>
            </SFormGroup>
            <SFormGroup>
                <SButton type="submit">Искать</SButton>
            </SFormGroup>
        </SForm>
    </SSection>
  );
};

export default SearchField;