import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
import Container from '../../Components/Container';

const Coverage = () => {
   const position = [23.81, 90.37]
   const serviceCentars = useLoaderData();
   console.log(serviceCentars);
    return (
        <Container>
        <div>
            <h2 className='text-2xl text-primary'>We are available in 64 districts</h2>

        </div>
        <div className='border w-full h-[600px] rounded-4xl m-4'>
            <MapContainer 
            center={position}
             zoom={7}
              scrollWheelZoom={false}
              className='h-[600px] rounded-4xl'
              >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {
            serviceCentars.map((center ,index )=> 
            <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
               <strong>{center.district}</strong> <br />
               service Area : {center.covered_area.join(', ')}
            </Popup>
            </Marker>
            )
           }
            </MapContainer>,
        </div>
        </Container>
    );
};

export default Coverage;