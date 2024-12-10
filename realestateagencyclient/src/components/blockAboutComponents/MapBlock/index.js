import React, { useState, useEffect } from 'react';
import { SSection } from './styled';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapBlock = ({ address }) => {
  const [position, setPosition] = useState(null); // Начальное состояние должно быть null
  const [loading, setLoading] = useState(true);

  const getCoordinates = async (address) => {
    const apiKey = 'e5c73b1e-041d-49f0-b6d3-c96913f230d3';
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${encodeURIComponent(address)}&format=json`);
    const data = await response.json();

    // Проверяем, есть ли данные и координаты
    if (data && data.response && data.response.GeoObjectCollection && data.response.GeoObjectCollection.featureMember.length > 0) {
      const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      setPosition([parseFloat(coordinates[1]), parseFloat(coordinates[0])]); // Устанавливаем позицию
      console.log(coordinates[1])
      console.log(coordinates[0])
      setLoading(false);
    } else {
      console.error('Координаты не найдены');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (address) {
      getCoordinates(address);
    }
  }, [address]);

  // Убедитесь, что позиция определена перед передачей в Map
  const defaultState = {
    center: position || [53.908177, 27.446775], // Координаты по умолчанию
    zoom: 16,
  };

  const defaultStyle = {
    width: '100%',
    height: '60vh',
  };

  return (
    <SSection>
      <YMaps>
        <Map 
          state={defaultState}
          style={defaultStyle}
        >
          {position && ( // Проверяем, что позиция определена перед рендерингом Placemark
            <Placemark 
              geometry={position} 
              options={{
                iconColor: '#ff8a00',
              }} 
            />
          )}
        </Map>
      </YMaps>
    </SSection>
  );
};

export default MapBlock;