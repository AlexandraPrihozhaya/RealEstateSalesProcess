import React, { useState, useEffect } from 'react';
import { SSection, SForm, SFormGroup, SLabel, SSelect, SFormInput, SOption, SInput, SButton, SSectionCards, SDivObjects } from './styled';
import { getAllDistricts, getAllMicroDistricts, getAllReobjects } from '../../utils/ApiFunctions';
import CatalogObjects from '../CatalogObjects';

const SearchField = () => {
    const [districts, setDistricts] = useState([]);
    const [microDistricts, setMicroDistricts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState('all');
    const [selectedMicroDistrict, setSelectedMicroDistrict] = useState('all');
    const [reobjects, setReobjects] = useState([]);
    const [filteredReobjects, setFilteredReobjects] = useState([]);
    
    useEffect(() => {
        fetchDistricts();
        fetchMicroDistricts();
        fetchObjects();
    }, []);

    const fetchDistricts = async () => {
        try {
            const result = await getAllDistricts();
            setDistricts(result);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const fetchMicroDistricts = async () => {
        try {
            const result = await getAllMicroDistricts();
            setMicroDistricts(result);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleSelectedDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };

    const handleSelectedMicroDistrictChange = (e) => {
        setSelectedMicroDistrict(e.target.value);
    };

    const fetchObjects = async () => {
        try {
            const result = await getAllReobjects();
            setReobjects(result);
            setFilteredReobjects(result);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [rooms, setRooms] = useState("all");
    const [areaFrom, setAreaFrom] = useState("");
    const [areaTo, setAreaTo] = useState("");
    const [street, setStreet] = useState("");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");
    const [type, setType] = useState("all");
    const [sort, setSort] = useState("new");

    const filterReobjects = () => {

        const sortedReobjects = reobjects.sort((a, b) => {
            switch (sort) {
                case 'new':
                    return b.yearOfConstruction - a.yearOfConstruction;
                case 'old':
                    return a.yearOfConstruction - b.yearOfConstruction;
                case 'asc':
                    return a.price - b.price;
                case 'desc':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

        return sortedReobjects.filter(reobject => {
            const typeValid = (type === "all" || reobject.type === type);
            const priceValid = (!priceFrom || reobject.price >= priceFrom) && (!priceTo || reobject.price <= priceTo);
            const roomsValid = (rooms === "all" || reobject.numberOfRooms == rooms);
            const areaValid = (!areaFrom || reobject.square >= areaFrom) && (!areaTo || reobject.square <= areaTo);
            const streetValid = !street || reobject.address.toLowerCase().includes(street.toLowerCase());
            const yearValid = (!yearFrom || reobject.yearOfConstruction >= yearFrom) && (!yearTo || reobject.yearOfConstruction <= yearTo);
            const districtValid = (selectedDistrict === 'all' || reobject.microDistrict.district.id == selectedDistrict);
            const microDistrictValid = (selectedMicroDistrict === 'all' || reobject.microDistrict.id == selectedMicroDistrict);

            return typeValid && priceValid && roomsValid && areaValid && streetValid && yearValid && districtValid && microDistrictValid;
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const results = filterReobjects();
        setFilteredReobjects(results);
    };

    return (
        <>
            <SSection>
                <SForm onSubmit={handleSearch} action="#">
                    <SFormGroup>
                        <SLabel for="type">Тип недвижимости:</SLabel>
                        <SSelect id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <SOption value="all">Все</SOption>
                            <SOption value="Квартира">Квартира</SOption>
                            <SOption value="Дом">Дом</SOption>
                            <SOption value="Участок">Участок</SOption>
                            <SOption value="Комната">Комната</SOption>
                        </SSelect>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="district">Район:</SLabel>
                        <SSelect id="district" value={selectedDistrict} onChange={handleSelectedDistrictChange}>
                            <SOption value="all">Все</SOption>
                            {districts.map(district => (
                                <SOption key={district.id} value={district.id}>
                                    {district.name}
                                </SOption>
                            ))}
                        </SSelect>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="microDistrict">Микрорайон:</SLabel>
                        <SSelect id="microDistrict" value={selectedMicroDistrict} onChange={handleSelectedMicroDistrictChange}>
                            <SOption value="all">Все</SOption>
                            {microDistricts.filter(microDistrict => selectedDistrict === 'all' || microDistrict.district.id == selectedDistrict)
                                .map(microDistrict => (
                                    <SOption key={microDistrict.id} value={microDistrict.id}>
                                        {microDistrict.name}
                                    </SOption>
                                ))}
                        </SSelect>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="price">Цена (в у.е.):</SLabel>
                        <SFormInput>
                            <SInput type="number" id="price" placeholder="от" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
                            <SInput type="number" id="price" placeholder="до" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="rooms">Количество комнат:</SLabel>
                        <SSelect id="rooms" value={rooms} onChange={(e) => setRooms(e.target.value)}>
                            <SOption value="all">Все</SOption>
                            <SOption value="1">1</SOption>
                            <SOption value="2">2</SOption>
                            <SOption value="3">3</SOption>
                            <SOption value="4">4</SOption>
                        </SSelect>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="area">Площадь (кв.м.):</SLabel>
                        <SFormInput>
                            <SInput type="number" id="area" placeholder="от" value={areaFrom} onChange={(e) => setAreaFrom(e.target.value)} />
                            <SInput type="number" id="area" placeholder="до" value={areaTo} onChange={(e) => setAreaTo(e.target.value)} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="street">Название улицы:</SLabel>
                        <SFormInput>
                            <SInput type="text" id="street" placeholder="Введите название улицы" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="year">Год постройки:</SLabel>
                        <SFormInput>
                            <SInput type="number" id="year" placeholder="от" value={yearFrom} onChange={(e) => setYearFrom(e.target.value)} />
                            <SInput type="number" id="year" placeholder="до" value={yearTo} onChange={(e) => setYearTo(e.target.value)} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                            <SSelect id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                                <SOption value="new">Сначала новые</SOption>
                                <SOption value="old">Сначала старые</SOption>
                                <SOption value="asc">По возрастанию цены</SOption>
                                <SOption value="desc">По убыванию цены</SOption>
                            </SSelect>
                        </SFormGroup>
                    <SFormGroup>
                        <SButton type="submit">Искать</SButton>
                    </SFormGroup>
                </SForm>
            </SSection>

            <SSectionCards>
                <SDivObjects>
                    {filteredReobjects.length === 0 ? (
                        <p>Нет объектов для отображения.</p>
                    ) : (
                        filteredReobjects.map(reobject => (
                            <CatalogObjects key={reobject.id} object={reobject} />
                        ))
                    )}
                </SDivObjects>
            </SSectionCards>
        </>
    );
};

export default SearchField;

