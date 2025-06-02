'use client';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

import Title from './Title';
import { findCountyByCode } from '@/utils/counties';

function PropertyMap({ countyCode  }: {  countyCode : string }) {
  debugger;
  const defaultLocation = [45.9432, 24.9668] as [number, number];
  const location = findCountyByCode(countyCode )?.location as [number, number];

    return (
    <div className='mt-4'>
      <div className='mb-4'>
        <Title text='Where you will be staying' />
        <span className='text-lg font-medium'>
          {findCountyByCode(countyCode)?.name || 'Romania'}
        </span>
      </div>
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className='h-[50vh] rounded-lg relative z-0'
        center={location || defaultLocation}
        zoom={7}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker position={location || defaultLocation} icon={markerIcon} />
      </MapContainer>
    </div>
  );
}
export default PropertyMap;
