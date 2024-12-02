import React from 'react';
import { SSection } from './styled';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapBlock = () => {
    
  const position = [53.908177,27.446775];

  const defaultState = {
    center: position,
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
          style={defaultStyle} >
          <Placemark 
            geometry={position} 
            options={{
                iconColor: '#ff8a00'
              }}  />
        </Map>
      </YMaps>
    </SSection>
  );
};

export default MapBlock;